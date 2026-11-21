(function () {
'use strict';
var M = window.MATERI, SUM = window.SUMMARY, KON = window.KONSEP, PAST = window.PAST, G = window.GEN, DN = window.DECKNAME;
var MID = {}; M.forEach(function (m) { MID[m.id] = m; });
var PRIO = ['m5', 'm6', 'm7', 'm4', 'm1', 'm2'];
var $app = document.getElementById('app'), $modal = document.getElementById('modal');

/* ---------- penyimpanan (per browser) ---------- */
var KEY = 'ospe-uts-v2';
var store = { stats: {}, prefs: { mode: 'ketik', paper: false } };
try { var raw = localStorage.getItem(KEY); if (raw) { var p = JSON.parse(raw); store.stats = p.stats || {}; store.prefs = Object.assign(store.prefs, p.prefs || {}); } } catch (e) {}
function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }

/* ---------- bank soal ---------- */
var Q = [], QID = {};
function add(q) { Q.push(q); QID[q.id] = q; }
KON.forEach(function (k, i) { add({ id: 'k' + i, type: 'konsep', m: k.m, q: k.q, a: k.a, al: k.al, k: k.k, x: k.x, ref: k.r }); });
PAST.forEach(function (p) { add({ id: 'p' + (p.set === 'UTS 2025' ? '25-' : p.set === 'UTS 21' ? '21-' : '26-') + p.no, type: 'past', set: p.set, no: p.no, m: p.m, q: p.q, a: p.a, al: p.al, k: p.k, x: p.x, pimg: p.img }); });
G.IMGQ.forEach(function (g) { add({ id: g.id, type: 'img', m: g.m, q: g.q, a: g.a, al: g.al, k: g.k, slide: g.img, mask: g.mask }); });
G.LEG.forEach(function (g) { add({ id: g.id, type: 'leg', m: g.m, q: g.q, a: g.a, al: g.al, slide: g.img, mask: g.mask }); });
Object.keys(G.IDL).forEach(function (s) {
  var deck = s.split('-')[0], m = G.DECK2M[deck];
  G.IDL[s].forEach(function (l, i) {
    if (l.a) add({ id: 'i-' + s + '-' + i, type: 'id', m: m, slide: s, li: i, q: 'Sebutkan nama struktur yang ditunjuk nomor ' + (i + 1) + ' (kotak merah muda).', a: l.c || l.t, al: l.syn || [l.t], lenient: true, x: l.c && l.c.toLowerCase() !== l.t.toLowerCase() ? 'Tulisan pada slide: ' + l.t : '' });
  });
});
(window.PREP || []).forEach(function (p, i) { add({ id: 'f-' + p.f, type: 'prep', m: 'm7', q: 'Foto preparat praktikum: jaringan/preparat apa yang tampak?', a: p.a, al: p.al, k: p.k, x: p.x, pimg: 'prep/' + p.f + '.jpg', pname: p.n }); });
var TYPES = { prep: 'Foto preparat', id: 'Tunjuk label slide', img: 'Gambar: apa ini?', leg: 'Nomor pada gambar', konsep: 'Konsep (isian)', past: 'Soal tahun lalu' };
function isImg(q) { return !!(q.slide || q.pimg); }

/* ---------- pencocokan jawaban (toleran ejaan) ---------- */
var STOP = {}; ('m mm musculus muskulus musculi otot n nn nervus nervi saraf os ossa ossis tulang a aa arteri arteria arteriae v vv vena venae the dan and yang of lig ligamentum sel cell cells lamina tes test fase periode muscle muscles nerve bone artery vein di pada adalah ini itu ke dari atau').split(' ').forEach(function (w) { STOP[w] = 1; });
var ABBR = { proc: 'processus', prosc: 'processus', art: 'articularis', ext: 'extensor', tuberc: 'tuberculum', sulc: 'sulcus', fiss: 'fissura', lat: 'lateralis', med: 'medialis', sup: 'superior', inf: 'inferior', ant: 'anterior', post: 'posterior', ped: 'pedunculus', vert: 'vertebra', vtr: 'vertebra', nucl: 'nucleus', flex: 'flexor', abd: 'abductor', add: 'adductor', ca: 'calcium', kalsium: 'calcium' };
function stem(w) {
  if (/^\d+$/.test(w)) return w;
  w = w.replace(/ph/g, 'f').replace(/k/g, 'c').replace(/y/g, 'i').replace(/ae/g, 'e').replace(/(.)\1+/g, '$1');
  if (w.length > 5) w = w.replace(/(ior|ius|ium|eus|us|um|is|es|ae|a|i|e|o)$/, '');
  return w;
}
function norm(s) {
  s = String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  s = s.replace(/[²⁺→]/g, ' ').replace(/[^a-z0-9\s]/g, ' ');
  return s.split(/\s+/).filter(Boolean).map(function (w) { return ABBR[w] || w; }).filter(function (w) { return !STOP[w]; }).map(stem).filter(Boolean);
}
function lev(a, b) {
  var m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  var prev = new Array(n + 1), cur = new Array(n + 1), i, j;
  for (j = 0; j <= n; j++) prev[j] = j;
  for (i = 1; i <= m; i++) { cur[0] = i; for (j = 1; j <= n; j++) { cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); } var t = prev; prev = cur; cur = t; }
  return prev[n];
}
function sim(a, b) { if (a === b) return 1; return 1 - lev(a, b) / Math.max(a.length, b.length); }
function tokHit(t, U, th, pre) {
  pre = pre || 4;
  for (var i = 0; i < U.length; i++) {
    var u = U[i];
    if (sim(u, t) >= th) return true;
    if (t.length >= pre && u.indexOf(t) === 0) return true;
    if (u.length >= 5 && t.length >= 5 && t.indexOf(u) === 0) return true;
  }
  return false;
}
var WEAK = {}; ('foramen fossa sulcus processus tuberculum tuberositas crista margo facies angulus lobus fasciculus cornu incisura canalis kanal spina caput collum corpus extremitas lateralis medialis superior inferior anterior posterior major minor longus brevis tendo tendon').split(' ').forEach(function (w) { WEAK[stem(w)] = 1; });
function phrase(ans, U, th, pre) {
  var A = norm(ans); if (!A.length) return 0;
  var strong = A.filter(function (t) { return !WEAK[t]; });
  var h = 0; A.forEach(function (t) { if (tokHit(t, U, th, pre)) h++; });
  var full = h / A.length;
  if (strong.length && strong.length < A.length) { var hs = 0; strong.forEach(function (t) { if (tokHit(t, U, th, pre)) hs++; }); if (hs === 0) return 0; if (hs < strong.length) return Math.min(full, 0.6); }
  return full;
}
function grade(q, input) {
  var U = norm(input);
  if (!U.length) return { v: 'kosong', s: 0 };
  var th = q.lenient ? 0.72 : 0.8, s = 0;
  if (q.k && q.k.length) {
    var ok = 0;
    var low = String(input || '').toLowerCase();
    q.k.forEach(function (g) { if (g.some(function (syn) { return norm(syn).length ? phrase(syn, U, th, 3) >= 0.99 : low.indexOf(syn.toLowerCase()) >= 0; })) ok++; });
    s = ok / q.k.length;
  } else {
    var c = (q.al && q.al.length) ? q.al.slice() : [];
    c.push(String(q.a).replace(/\(.*?\)/g, ''));
    c.forEach(function (x) { s = Math.max(s, phrase(x, U, th)); });
  }
  return { v: s >= 0.99 ? 'benar' : s >= 0.5 ? 'hampir' : 'salah', s: s };
}
window.__grade = grade; window.__Q = QID;

/* ---------- statistik & pemilihan soal ---------- */
function st(id) { return store.stats[id]; }
function record(id, ok) {
  var s = store.stats[id] || { b: 0, s: 0, c: 0 };
  s.s++; if (ok) { s.c++; s.b = Math.max(2, s.b + 1); if (s.b > 4) s.b = 4; } else s.b = 1;
  store.stats[id] = s; save();
}
function weight(q) { var s = st(q.id); if (!s) return 3; return [3, 6, 2, 1, 0.5][s.b] || 1; }
function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function pickW(pool, n, usedSlides) {
  var out = [], cand = pool.slice(); usedSlides = usedSlides || {};
  while (out.length < n && cand.length) {
    var tot = 0, i; for (i = 0; i < cand.length; i++) tot += weight(cand[i]);
    var r = Math.random() * tot, k = 0;
    for (i = 0; i < cand.length; i++) { r -= weight(cand[i]); if (r <= 0) { k = i; break; } }
    var q = cand.splice(k, 1)[0];
    if (q.type === 'id') { if (usedSlides[q.slide]) continue; usedSlides[q.slide] = 1; }
    out.push(q);
  }
  return out;
}
function mastery(mid) {
  var tot = 0, good = 0, seen = 0;
  Q.forEach(function (q) { if (q.m !== mid) return; tot++; var s = st(q.id); if (s) { seen++; if (s.b >= 2) good++; } });
  return { tot: tot, good: good, seen: seen };
}

/* ---------- util ---------- */
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function pct(b) { return (b * 100).toFixed(2) + '%'; }
function slideSrc(key) { return 'img/' + key + '.jpg'; }
function deckOf(key) { return key.split('-')[0]; }
function slideNo(key) { return +key.split('-')[1]; }

/* figur dengan masker label; opts: {reveal:bool, interactive:bool, maskAll:bool} */
function figure(q, opts) {
  opts = opts || {};
  var src, masks = [];
  if (q.pimg) src = 'img/' + q.pimg;
  else if (q.slide) src = slideSrc(q.slide);
  else return '';
  if (q.type === 'id' || opts.maskAll) {
    (G.IDL[q.slide] || []).forEach(function (l, i) { masks.push({ b: l.b, n: i + 1, tg: q.type === 'id' && i === q.li, t: l.t }); });
  } else if (q.mask) q.mask.forEach(function (b) { masks.push({ b: b, plain: true }); });
  var h = '<div class="fig" data-fig><img src="' + src + '" alt="Gambar soal" loading="lazy">';
  masks.forEach(function (mk) {
    var b = mk.b, cls = 'mk' + (mk.plain ? ' plain' : '') + (mk.tg ? ' tg' : '') + ((opts.reveal && (mk.tg || mk.plain)) ? ' open' : '');
    h += '<span class="' + cls + '" style="left:' + pct(b[0]) + ';top:' + pct(b[1]) + ';width:' + pct(b[2]) + ';height:' + pct(b[3]) + '"' + (mk.t ? ' title="Klik untuk buka/tutup"' : '') + (mk.plain ? '' : ' role="button" tabindex="0"') + '>' + (mk.n || '') + '</span>';
  });
  return h + '</div>';
}
function bindMasks(root) {
  root.querySelectorAll('.fig .mk:not(.plain)').forEach(function (el) {
    function tog() { el.classList.toggle('open'); }
    el.addEventListener('click', tog);
    el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tog(); } });
  });
}
function zoomBox(inner) { return '<div class="zoomwrap" data-zoom>' + inner + '</div>'; }
function bindZoom(root) {
  root.querySelectorAll('[data-zoombtn]').forEach(function (b) {
    b.addEventListener('click', function () { var z = root.querySelector('[data-zoom]'); if (z) { z.classList.toggle('z2'); b.textContent = z.classList.contains('z2') ? 'Perkecil' : 'Perbesar'; } });
  });
}

/* ---------- router ---------- */
var view = { r: 'beranda', mat: 'm5', sub: 'ringkasan' };
var timerId = null;
function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }
function route() {
  stopTimer();
  var h = (location.hash || '#beranda').slice(1);
  if (['beranda', 'pelajari', 'latihan', 'simulasi', 'tahun-lalu'].indexOf(h) < 0) h = 'beranda';
  view.r = h;
  document.querySelectorAll('#tabs a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-r') === h); });
  if (h === 'beranda') renderHome();
  else if (h === 'pelajari') renderLearn();
  else if (h === 'latihan') { if (sess && sess.kind === 'lat' && !sess.done) renderCard(); else renderPracticeSetup(); }
  else if (h === 'simulasi') { if (sess && sess.kind === 'sim' && !sess.done) renderSimCard(); else renderSimSetup(); }
  else renderPast();
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
function go(h) { if (location.hash === '#' + h) route(); else location.hash = h; }

/* ---------- Beranda ---------- */
function renderHome() {
  var cards = M.map(function (m) {
    var ms = mastery(m.id), p = ms.tot ? ms.good / ms.tot : 0;
    return '<button class="card mcard" data-m="' + m.id + '"><span class="no">Praktikum ' + m.no + (PRIO.indexOf(m.id) >= 0 ? ' <span class="prio">· prioritas</span>' : '') + '</span><h3>' + esc(m.title) + '</h3><span class="muted small">' + esc(m.sub) + '</span><div class="bar" aria-hidden="true"><i style="width:' + (p * 100).toFixed(1) + '%"></i></div><span class="small muted">Dikuasai ' + ms.good + ' dari ' + ms.tot + ' soal</span></button>';
  }).join('');
  $app.innerHTML =
    '<section class="hero"><div><h1>Siap OSPE besok: 25 soal, 1 menit per soal</h1><p class="lead">Soalnya diambil dari slide PPT praktikum dan dijawab dengan tulisan tangan. Di sini kamu belajar dari slide yang sama: label disembunyikan, kamu sebutkan namanya, lalu cocokkan dengan slide asli.</p>' +
    '<div class="row" style="margin-top:16px"><button class="btn pri big" data-go="simulasi">Mulai simulasi 25 soal</button><button class="btn big" data-go="latihan">Latihan per materi</button><button class="btn big" data-go="tahun-lalu">Soal tahun lalu</button></div></div>' +
    '<div class="card"><h3 style="margin-top:0">Cara pakai malam ini</h3><ol class="rules"><li><b class="n">1</b><span>Baca <b>Ringkasan</b> materi prioritas di tab Pelajari.</span></li><li><b class="n">2</b><span>Kerjakan <b>Soal Tahun Lalu</b>. Pola soalnya hampir pasti berulang.</span></li><li><b class="n">3</b><span><b>Latihan</b> tunjuk label. Soal yang salah akan muncul lebih sering.</span></li><li><b class="n">4</b><span>Tutup dengan <b>Simulasi OSPE</b> berwaktu. Pilih mode kertas supaya terbiasa menulis tangan.</span></li></ol></div></section>' +
    '<h2>8 materi praktikum</h2><p class="lead small">Progres tersimpan di browser ini saja.</p><div class="grid g-cards" style="margin-top:12px">' + cards + '</div>' +
    '<p class="note" style="margin-top:22px">Sumber: slide praktikum dosen (Ossa Cranialis, Anatomi Syaraf II, Nonne & Pandy, Histologi Syaraf, Histopatologi Persyarafan, Osteologi & Arthrologi, Myologi, Histologi Muskuloskeletal, Fisiologi), 20 foto preparat histologi dari praktikum, Buku Panduan Praktikum Semester VII, soal UTS 21, UTS 2025 & UTS 2026. Kunci jawaban label diambil dari teks slide (dibaca otomatis); kalau ada ejaan aneh, percayai label asli yang muncul saat jawaban dibuka.</p>';
  $app.querySelectorAll('[data-go]').forEach(function (b) { b.addEventListener('click', function () { go(b.getAttribute('data-go')); }); });
  $app.querySelectorAll('[data-m]').forEach(function (b) { b.addEventListener('click', function () { view.mat = b.getAttribute('data-m'); view.sub = 'ringkasan'; go('pelajari'); }); });
}

/* ---------- Pelajari ---------- */
function renderLearn() {
  var m = MID[view.mat];
  var chips = M.map(function (x) { return '<button class="chip' + (x.id === m.id ? ' on' : '') + '" data-mat="' + x.id + '">' + x.no + '. ' + esc(x.title) + '</button>'; }).join('');
  var nSlides = m.decks.reduce(function (a, d) { return a + G.SLIDES[d].n; }, 0);
  var nKon = KON.filter(function (k) { return k.m === m.id; }).length;
  var nImg = Q.filter(function (q) { return q.m === m.id && (q.type === 'img' || q.type === 'leg'); }).length;
  var nPrep = Q.filter(function (q) { return q.m === m.id && q.type === 'prep'; }).length;
  var subs = [['ringkasan', 'Ringkasan'], ['slide', 'Slide (' + nSlides + ')']];
  if (nPrep) subs.push(['preparat', 'Foto preparat (' + nPrep + ')']);
  subs.push(['konsep', 'Soal konsep (' + nKon + ')'], ['gambar', 'Soal gambar (' + nImg + ')']);
  if (view.sub === 'preparat' && !nPrep) view.sub = 'ringkasan';
  var h = '<div class="row" style="gap:6px">' + chips + '</div>' +
    '<div style="margin-top:18px"><span class="tag eo">Praktikum ' + m.no + '</span><h1 style="margin-top:6px">' + esc(m.title) + '</h1><p class="lead">' + esc(m.sub) + '. Sumber: ' + esc(m.dosen) + '.</p></div>' +
    '<div class="subtabs">' + subs.map(function (s) { return '<button class="chip' + (view.sub === s[0] ? ' on' : '') + '" data-sub="' + s[0] + '">' + s[1] + '</button>'; }).join('') +
    '<button class="btn pri sm" data-train style="margin-left:auto">Latihan materi ini</button></div><div id="sub"></div>';
  $app.innerHTML = h;
  $app.querySelectorAll('[data-mat]').forEach(function (b) { b.addEventListener('click', function () { view.mat = b.getAttribute('data-mat'); renderLearn(); }); });
  $app.querySelectorAll('[data-sub]').forEach(function (b) { b.addEventListener('click', function () { view.sub = b.getAttribute('data-sub'); renderLearn(); }); });
  $app.querySelector('[data-train]').addEventListener('click', function () { setup.mats = [m.id]; sess = null; go('latihan'); });
  var $s = document.getElementById('sub');
  if (view.sub === 'ringkasan') {
    $s.innerHTML = '<div class="card summary">' + SUM[m.id].replace(/<table>/g, '<div class="tblwrap"><table>').replace(/<\/table>/g, '</table></div>') + '</div>';
    decorateSummary($s.querySelector('.summary'), m.id);
  } else if (view.sub === 'slide') {
    var sh = '';
    m.decks.forEach(function (d) {
      sh += '<h3>' + esc(DN[d]) + '</h3><div class="thumbs">';
      for (var i = 1; i <= G.SLIDES[d].n; i++) {
        var key = d + '-' + i, nl = (G.IDL[key] || []).length;
        sh += '<button class="thumb" data-sl="' + key + '"><img src="' + slideSrc(key) + '" alt="Slide ' + i + '" loading="lazy"><span>' + i + '</span>' + (nl ? '<em>' + nl + ' label</em>' : '') + '</button>';
      }
      sh += '</div>';
    });
    $s.innerHTML = '<p class="note">Slide bertanda <b>label</b> bisa dipakai menguji diri: buka slide, aktifkan "Sembunyikan label", lalu klik kotak untuk membuka satu per satu.</p>' + sh;
    $s.querySelectorAll('[data-sl]').forEach(function (b) { b.addEventListener('click', function () { openViewer(b.getAttribute('data-sl')); }); });
  } else if (view.sub === 'konsep') {
    var items = Q.filter(function (q) { return q.type === 'konsep' && q.m === m.id; });
    $s.innerHTML = '<p class="note">Baca soal, jawab dalam hati, lalu klik untuk melihat kunci.</p><div class="list">' + items.map(function (q) {
      return '<details class="qa"><summary>' + esc(q.q) + '</summary><div class="a"><div class="key">' + esc(q.a) + '</div>' + (q.x ? '<div class="small muted" style="margin-top:4px">' + esc(q.x) + '</div>' : '') + (q.ref ? '<button class="btn sm ghost" style="margin-top:6px" data-sl="' + q.ref + '">Lihat slide terkait</button>' : '') + '</div></details>';
    }).join('') + '</div>';
    $s.querySelectorAll('[data-sl]').forEach(function (b) { b.addEventListener('click', function () { openViewer(b.getAttribute('data-sl')); }); });
  } else if (view.sub === 'preparat') {
    var pr = Q.filter(function (q) { return q.m === m.id && q.type === 'prep'; });
    $s.innerHTML = '<p class="note">Foto preparat dari praktikum. Tebak dulu jaringannya, lalu buka jawaban untuk melihat ciri pembedanya. Semua foto ini juga muncul sebagai soal di Latihan dan Simulasi.</p><div class="row" style="margin:8px 0 12px"><button class="btn pri sm" data-trainprep>Latihan foto preparat (' + pr.length + ')</button></div><div class="pastgrid">' + pr.map(function (q, i) {
      return '<div class="card"><b class="timer" style="font-size:1rem">Foto ' + (i + 1) + '</b><div style="margin-top:8px"><img src="img/' + q.pimg + '" alt="Foto preparat ' + (i + 1) + '" loading="lazy" style="border-radius:8px;border:1px solid var(--line);cursor:zoom-in" data-zoomprep="' + i + '"></div><details class="qa" style="margin-top:10px"><summary>Lihat jawaban</summary><div class="a"><div class="key">' + esc(q.a) + '</div><div class="small muted" style="margin-top:4px">' + esc(q.x) + '</div></div></details></div>';
    }).join('') + '</div>';
    $s.querySelector('[data-trainprep]').addEventListener('click', function () { startSession('lat', shuffle(pr.slice()), 'Foto preparat histologi'); });
    $s.querySelectorAll('[data-zoomprep]').forEach(function (im) { im.addEventListener('click', function () {
      var q = pr[+im.getAttribute('data-zoomprep')];
      $modal.innerHTML = '<div class="modal" role="dialog" aria-modal="true"><div class="box"><div class="qhead"><b>Foto preparat</b><div class="row"><button class="btn sm" data-zoombtn>Perbesar</button><button class="btn sm pri" data-close>Tutup</button></div></div>' + zoomBox('<div class="fig"><img src="img/' + q.pimg + '" alt="Foto preparat"></div>') + '<details class="qa"><summary>Lihat jawaban</summary><div class="a"><div class="key">' + esc(q.a) + '</div><div class="small muted">' + esc(q.x) + '</div></div></details></div></div>';
      var root = $modal.firstChild; bindZoom(root);
      root.querySelector('[data-close]').addEventListener('click', closeModal);
      root.addEventListener('click', function (e) { if (e.target === root) closeModal(); });
      document.onkeydown = function (e) { if (e.key === 'Escape') closeModal(); };
    }); });
  } else {
    var gi = Q.filter(function (q) { return q.m === m.id && (q.type === 'img' || q.type === 'leg'); });
    $s.innerHTML = gi.length ? '<div class="pastgrid">' + gi.map(function (q) {
      return '<div class="card"><div>' + figure(q) + '</div><p style="margin:10px 0 6px;font-weight:500">' + esc(q.q) + '</p><details class="qa"><summary>Lihat jawaban</summary><div class="a key">' + esc(q.a) + '</div></details></div>';
    }).join('') + '</div>' : '<div class="empty">Belum ada soal gambar untuk materi ini.</div>';
    bindMasks($s);
  }
}


/* gambar per subbab ringkasan */
function imgInfo(k) {
  if (k.indexOf('wan/') === 0) return { src: 'img/' + k + '.jpg', cap: (window.WANCAP || {})[k] || 'Slide kuliah' };
  if (k.indexOf('prep/') === 0) { var f = k.slice(5), p = (window.PREP || []).filter(function (x) { return x.f === f; })[0]; return { src: 'img/' + k + '.jpg', cap: 'Foto preparat praktikum: ' + (p ? p.n : '') }; }
  var t = (G.TITLES || {})[k];
  return { src: slideSrc(k), cap: (DN[deckOf(k)] || '') + ' · slide ' + slideNo(k) + (t ? ' · ' + t : ''), slide: k };
}
function openImg(info) {
  $modal.innerHTML = '<div class="modal" role="dialog" aria-modal="true"><div class="box"><div class="qhead"><b>' + esc(info.cap) + '</b><div class="row"><button class="btn sm" data-zoombtn>Perbesar</button><button class="btn sm pri" data-close>Tutup</button></div></div>' + zoomBox('<div class="fig"><img src="' + info.src + '" alt=""></div>') + '</div></div>';
  var root = $modal.firstChild; bindZoom(root);
  root.querySelector('[data-close]').addEventListener('click', closeModal);
  root.addEventListener('click', function (e) { if (e.target === root) closeModal(); });
  document.onkeydown = function (e) { if (e.key === 'Escape') closeModal(); };
}
function decorateSummary(root, mid) {
  var map = (window.SECIMG || {})[mid]; if (!map || !root) return;
  root.querySelectorAll('h3').forEach(function (h) {
    var t = h.textContent.trim(), ent = map.filter(function (e) { return t.indexOf(e[0]) === 0; })[0];
    if (!ent) return;
    var end = h; while (end.nextElementSibling && end.nextElementSibling.tagName !== 'H3') end = end.nextElementSibling;
    var strip = document.createElement('div'); strip.className = 'figstrip';
    strip.innerHTML = ent[1].map(function (k) { var i = imgInfo(k); return '<button class="fthumb" data-fk="' + k + '" title="Klik untuk memperbesar"><img src="' + i.src + '" alt="" loading="lazy"><span>' + esc(i.cap) + '</span></button>'; }).join('');
    end.parentNode.insertBefore(strip, end.nextSibling);
  });
  root.querySelectorAll('[data-fk]').forEach(function (b) { b.addEventListener('click', function () { var k = b.getAttribute('data-fk'), i = imgInfo(k); if (i.slide) { openViewer.hide = false; openViewer(k); } else openImg(i); }); });
}

/* viewer slide */
function openViewer(key) {
  var d = deckOf(key), n = slideNo(key), max = G.SLIDES[d].n, labs = G.IDL[key] || [];
  var hide = !!(labs.length && openViewer.hide);
  var fake = { slide: key, type: 'view' };
  $modal.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-label="Slide"><div class="box">' +
    '<div class="qhead"><div><span class="tag">' + esc(DN[d]) + '</span> <b>Slide ' + n + ' / ' + max + '</b></div><div class="row">' +
    (labs.length ? '<label class="chip"><input type="checkbox" id="hideLab"' + (hide ? ' checked' : '') + '> Sembunyikan label (' + labs.length + ')</label><button class="btn sm" data-trainslide>Latih label slide ini</button>' : '') +
    '<button class="btn sm" data-zoombtn>Perbesar</button><button class="btn sm" data-prev' + (n <= 1 ? ' disabled' : '') + '>← Sebelumnya</button><button class="btn sm" data-next' + (n >= max ? ' disabled' : '') + '>Berikutnya →</button><button class="btn sm pri" data-close>Tutup</button></div></div>' +
    zoomBox(hide ? figure(fake, { maskAll: true }) : figure({ slide: key })) +
    (hide ? '<p class="note">Klik kotak bernomor untuk membuka labelnya. Klik lagi untuk menutup.</p>' : '') + '</div></div>';
  var root = $modal.firstChild;
  bindMasks(root); bindZoom(root);
  root.addEventListener('click', function (e) { if (e.target === root) closeModal(); });
  root.querySelector('[data-close]').addEventListener('click', closeModal);
  var pv = root.querySelector('[data-prev]'), nx = root.querySelector('[data-next]');
  pv.addEventListener('click', function () { if (n > 1) openViewer(d + '-' + (n - 1)); });
  nx.addEventListener('click', function () { if (n < max) openViewer(d + '-' + (n + 1)); });
  var hl = root.querySelector('#hideLab'); if (hl) hl.addEventListener('change', function () { openViewer.hide = hl.checked; openViewer(key); });
  var ts = root.querySelector('[data-trainslide]'); if (ts) ts.addEventListener('click', function () {
    closeModal();
    var list = Q.filter(function (q) { return q.type === 'id' && q.slide === key; });
    startSession('lat', shuffle(list), 'Label ' + DN[d] + ' slide ' + n);
  });
  document.onkeydown = function (e) {
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowRight' && n < max) openViewer(d + '-' + (n + 1));
    else if (e.key === 'ArrowLeft' && n > 1) openViewer(d + '-' + (n - 1));
  };
  root.querySelector('[data-close]').focus();
}
openViewer.hide = true;
function closeModal() { $modal.innerHTML = ''; document.onkeydown = null; }

/* ---------- Latihan ---------- */
var setup = { mats: PRIO.slice(), types: ['prep', 'id', 'img', 'leg', 'konsep', 'past'], n: 20 };
var sess = null;
function poolFor(mats, types) { return Q.filter(function (q) { return mats.indexOf(q.m) >= 0 && types.indexOf(q.type) >= 0; }); }
function renderPracticeSetup() {
  var pool = poolFor(setup.mats, setup.types);
  var weak = Q.filter(function (q) { var s = st(q.id); return s && s.b === 1; });
  $app.innerHTML = '<h1>Latihan</h1><p class="lead">Pilih materi dan jenis soal. Soal yang pernah salah lebih sering muncul lagi.</p>' +
    '<div class="card setup" style="margin-top:16px">' +
    '<div><span class="lbl">Materi</span><div class="row" style="gap:6px">' + M.map(function (m) { return '<button class="chip' + (setup.mats.indexOf(m.id) >= 0 ? ' on' : '') + '" data-mt="' + m.id + '">' + m.no + '. ' + esc(m.title) + '</button>'; }).join('') +
    '</div><div class="row small" style="margin-top:6px"><button class="btn sm ghost" data-all>Pilih semua</button><button class="btn sm ghost" data-prio>Hanya prioritas</button></div></div>' +
    '<div><span class="lbl">Jenis soal</span><div class="row" style="gap:6px">' + Object.keys(TYPES).map(function (t) { return '<button class="chip' + (setup.types.indexOf(t) >= 0 ? ' on' : '') + '" data-ty="' + t + '">' + TYPES[t] + '</button>'; }).join('') + '</div></div>' +
    '<div class="row" style="gap:22px"><div><span class="lbl">Jumlah soal</span><div class="seg">' + [10, 20, 40].map(function (n) { return '<button data-n="' + n + '" class="' + (setup.n === n ? 'on' : '') + '">' + n + '</button>'; }).join('') + '</div></div>' +
    '<div><span class="lbl">Cara menjawab</span><div class="seg"><button data-mode="ketik" class="' + (store.prefs.mode === 'ketik' ? 'on' : '') + '">Ketik + cek otomatis</button><button data-mode="buka" class="' + (store.prefs.mode === 'buka' ? 'on' : '') + '">Buka jawaban, nilai sendiri</button></div></div></div>' +
    '<div class="row"><button class="btn pri big" data-start' + (pool.length ? '' : ' disabled') + '>Mulai latihan</button><span class="muted small">' + pool.length + ' soal tersedia</span>' +
    (weak.length ? '<button class="btn big" data-weak>Ulangi yang salah (' + weak.length + ')</button>' : '') + '</div></div>';
  $app.querySelectorAll('[data-mt]').forEach(function (b) { b.addEventListener('click', function () { var id = b.getAttribute('data-mt'), i = setup.mats.indexOf(id); if (i >= 0) setup.mats.splice(i, 1); else setup.mats.push(id); renderPracticeSetup(); }); });
  $app.querySelectorAll('[data-ty]').forEach(function (b) { b.addEventListener('click', function () { var id = b.getAttribute('data-ty'), i = setup.types.indexOf(id); if (i >= 0) setup.types.splice(i, 1); else setup.types.push(id); renderPracticeSetup(); }); });
  $app.querySelector('[data-all]').addEventListener('click', function () { setup.mats = M.map(function (m) { return m.id; }); renderPracticeSetup(); });
  $app.querySelector('[data-prio]').addEventListener('click', function () { setup.mats = PRIO.slice(); renderPracticeSetup(); });
  $app.querySelectorAll('[data-n]').forEach(function (b) { b.addEventListener('click', function () { setup.n = +b.getAttribute('data-n'); renderPracticeSetup(); }); });
  $app.querySelectorAll('[data-mode]').forEach(function (b) { b.addEventListener('click', function () { store.prefs.mode = b.getAttribute('data-mode'); save(); renderPracticeSetup(); }); });
  var sb = $app.querySelector('[data-start]'); sb.addEventListener('click', function () { startSession('lat', balanced(pool, setup.n), 'Latihan'); });
  var wb = $app.querySelector('[data-weak]'); if (wb) wb.addEventListener('click', function () { startSession('lat', shuffle(weak).slice(0, 40), 'Ulangi yang salah'); });
}
/* sebar soal merata antar materi yang dipilih */
function balanced(pool, n) {
  var by = {}; pool.forEach(function (q) { (by[q.m] = by[q.m] || []).push(q); });
  var mats = Object.keys(by), out = [], used = {}, per = Math.ceil(n / mats.length);
  mats.forEach(function (m) {
    var p = by[m], img = p.filter(function (q) { return q.type === 'id'; }), oth = p.filter(function (q) { return q.type !== 'id'; });
    var nId = Math.min(img.length, Math.round(per * 0.45));
    out = out.concat(pickW(img, nId, used), pickW(oth, per - nId, used));
  });
  if (out.length < n) out = out.concat(pickW(pool.filter(function (q) { return out.indexOf(q) < 0; }), n - out.length, used));
  return shuffle(out).slice(0, n);
}
function startSession(kind, list, title) {
  if (!list.length) return;
  sess = { kind: kind, list: list, i: 0, res: [], title: title, done: false, paper: kind === 'sim' && store.prefs.paper };
  if (kind === 'sim') { if (location.hash !== '#simulasi') { location.hash = 'simulasi'; return; } renderSimCard(); }
  else { if (location.hash !== '#latihan') { location.hash = 'latihan'; return; } renderCard(); }
}
function mtag(q) { var m = MID[q.m]; return '<span class="tag">' + (m ? 'Prak. ' + m.no + ' · ' + esc(m.title) : '') + '</span> <span class="tag eo">' + TYPES[q.type] + (q.set ? ' · ' + q.set + ' no. ' + q.no : '') + '</span>'; }
function srcLine(q) {
  if (q.slide) return '<div class="note">Sumber: ' + esc(DN[deckOf(q.slide)]) + ', slide ' + slideNo(q.slide) + '</div>';
  if (q.type === 'prep') return '<div class="note">Foto preparat dari praktikum</div>';
  if (q.pimg) return '<div class="note">Gambar dari soal ' + esc(q.set) + '</div>';
  return '';
}
function renderCard(checked) {
  var q = sess.list[sess.i], mode = store.prefs.mode, img = isImg(q), r = sess.res[sess.i];
  var fig = img ? '<div>' + zoomBox(figure(q, { reveal: !!r })) + '<div class="row" style="margin-top:8px"><button class="btn sm" data-zoombtn>Perbesar</button>' + (q.slide ? '<button class="btn sm ghost" data-openslide>Buka slide asli</button>' : '') + '</div>' + srcLine(q) + '</div>' : '';
  var right = '<div class="card"><div class="qtext">' + esc(q.q) + '</div>';
  if (!r) {
    if (mode === 'ketik') right += '<input class="ans" id="ans" autocomplete="off" spellcheck="false" placeholder="Tulis jawabanmu…" aria-label="Jawaban"><div class="row" style="margin-top:10px"><button class="btn pri" data-check>Cek jawaban</button><button class="btn ghost" data-skip>Tidak tahu</button><span class="note"><kbd>Enter</kbd> untuk cek</span></div>';
    else right += '<p class="muted small">Jawab dalam hati atau tulis di kertas, lalu buka kuncinya.</p><button class="btn pri" data-reveal>Buka jawaban</button>';
  } else {
    right += verdictBox(q, r) + '<div class="row" style="margin-top:12px">' +
      (r.v === 'benar' ? '<button class="btn sm ghost" data-mark="0">Sebenarnya aku salah</button>' : '<button class="btn sm" data-mark="1">' + (r.v === 'buka' ? 'Aku benar' : 'Jawabanku benar') + '</button>') +
      (r.v === 'buka' ? '<button class="btn sm" data-mark="0">Aku salah</button>' : '') +
      '<button class="btn pri" data-next>' + (sess.i + 1 < sess.list.length ? 'Lanjut' : 'Lihat hasil') + '</button></div>';
  }
  right += '</div>';
  $app.innerHTML = '<div class="qhead"><div><b>' + esc(sess.title) + '</b> <span class="muted">· soal ' + (sess.i + 1) + ' dari ' + sess.list.length + '</span></div><div class="row"><div class="seg"><button data-mode="ketik" class="' + (mode === 'ketik' ? 'on' : '') + '">Ketik</button><button data-mode="buka" class="' + (mode === 'buka' ? 'on' : '') + '">Buka jawaban</button></div><button class="btn sm ghost" data-quit>Selesai</button></div></div>' +
    '<div style="margin-bottom:10px">' + mtag(q) + '</div><div class="quiz' + (img ? '' : ' noimg') + '">' + fig + right + '</div>';
  bindMasks($app); bindZoom($app);
  var os = $app.querySelector('[data-openslide]'); if (os) os.addEventListener('click', function () { openViewer.hide = false; openViewer(q.slide); });
  $app.querySelectorAll('[data-mode]').forEach(function (b) { b.addEventListener('click', function () { store.prefs.mode = b.getAttribute('data-mode'); save(); renderCard(); }); });
  $app.querySelector('[data-quit]').addEventListener('click', function () { finishPractice(); });
  var inp = document.getElementById('ans');
  function check(skip) { var val = skip ? '' : (inp ? inp.value : ''); var g = grade(q, val); sess.res[sess.i] = { v: g.v, input: val, ok: g.v === 'benar' }; record(q.id, g.v === 'benar'); renderCard(); }
  if (inp) { inp.focus(); inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); check(false); } }); }
  var cb = $app.querySelector('[data-check]'); if (cb) cb.addEventListener('click', function () { check(false); });
  var sk = $app.querySelector('[data-skip]'); if (sk) sk.addEventListener('click', function () { check(true); });
  var rb = $app.querySelector('[data-reveal]'); if (rb) rb.addEventListener('click', function () { sess.res[sess.i] = { v: 'buka', input: '', ok: null }; renderCard(); });
  $app.querySelectorAll('[data-mark]').forEach(function (b) { b.addEventListener('click', function () { var ok = b.getAttribute('data-mark') === '1'; var rr = sess.res[sess.i]; var first = rr.ok === null; rr.ok = ok; rr.v = ok ? 'benar' : 'salah'; if (first) record(q.id, ok); else { var s = store.stats[q.id]; if (s) { if (ok) { s.c++; s.b = Math.max(2, s.b); } else { s.b = 1; s.c = Math.max(0, s.c - 1); } save(); } } renderCard(); }); });
  var nb = $app.querySelector('[data-next]'); if (nb) { nb.focus(); nb.addEventListener('click', nextCard); }
}
function nextCard() { var r = sess.res[sess.i]; if (r && r.ok === null) { r.ok = false; record(sess.list[sess.i].id, false); } if (sess.i + 1 < sess.list.length) { sess.i++; renderCard(); } else finishPractice(); }
function verdictBox(q, r) {
  var lbl = { benar: 'Benar', hampir: 'Hampir benar (cek ejaan/kelengkapan)', salah: 'Belum tepat', kosong: 'Belum dijawab', buka: 'Kunci jawaban' }[r.v] || '';
  return '<div class="verdict ' + (r.v === 'buka' ? 'benar' : r.v) + '"><span class="vt">' + lbl + '</span>' + (r.input ? '<span class="small">Jawabanmu: ' + esc(r.input) + '</span>' : '') +
    '<span class="key">' + esc(q.a) + '</span>' + (q.x ? '<span class="small">' + esc(q.x) + '</span>' : '') +
    (q.type === 'id' ? '<span class="note">Label asli sudah dibuka di gambar. Kalau ejaan kunci terlihat aneh, ikuti tulisan di slide.</span>' : '') +
    (q.ref ? '<button class="btn sm ghost" data-ref="' + q.ref + '">Lihat slide terkait</button>' : '') + '</div>';
}
document.addEventListener('click', function (e) { var t = e.target.closest && e.target.closest('[data-ref]'); if (t) { openViewer.hide = false; openViewer(t.getAttribute('data-ref')); } });
function finishPractice() {
  if (!sess) return renderPracticeSetup();
  sess.done = true;
  var done = sess.res.filter(Boolean), ok = done.filter(function (r) { return r.ok; }).length;
  var wrong = sess.list.filter(function (q, i) { return sess.res[i] && !sess.res[i].ok; });
  $app.innerHTML = '<h1>Hasil latihan</h1><div class="card" style="margin-top:14px"><div class="score">' + ok + ' / ' + done.length + '</div><p class="muted">' + esc(sess.title) + '</p><div class="row" style="margin-top:10px">' +
    (wrong.length ? '<button class="btn pri" data-redo>Ulangi ' + wrong.length + ' soal yang salah</button>' : '') + '<button class="btn" data-new>Latihan baru</button></div></div>' +
    reviewList(sess.list.slice(0, done.length), sess.res);
  var rd = $app.querySelector('[data-redo]'); if (rd) rd.addEventListener('click', function () { startSession('lat', shuffle(wrong), 'Ulangi yang salah'); });
  $app.querySelector('[data-new]').addEventListener('click', function () { sess = null; renderPracticeSetup(); });
}
function reviewList(list, res, editable) {
  return '<h2 style="margin-top:22px">Pembahasan</h2><div class="review" style="margin-top:10px">' + list.map(function (q, i) {
    var r = res[i] || { v: 'kosong', input: '' };
    var thumb = isImg(q) ? '<div class="rvimg">' + (q.pimg ? '<img src="img/' + q.pimg + '" alt="" loading="lazy">' : '<img src="' + slideSrc(q.slide) + '" alt="" loading="lazy">') + '</div>' : '<div class="rvimg"></div>';
    var v = r.ok ? 'benar' : (r.v === 'hampir' ? 'hampir' : 'salah');
    return '<div class="card rv"><div class="rvn">' + (i + 1) + '</div>' + thumb + '<div><div style="font-weight:500">' + esc(q.q) + '</div><div class="small">' + (r.input ? 'Jawabanmu: ' + esc(r.input) + ' · ' : '') + '<b>Kunci: ' + esc(q.a) + '</b></div>' + (q.x ? '<div class="note">' + esc(q.x) + '</div>' : '') + srcLine(q) + '</div>' +
      '<div class="rvbtn">' + (editable ? '<div class="seg"><button data-sg="' + i + '-1" class="' + (r.ok ? 'on' : '') + '">Benar</button><button data-sg="' + i + '-0" class="' + (!r.ok ? 'on' : '') + '">Salah</button></div>' : '<span class="tag' + (v === 'benar' ? '' : ' eo') + '">' + (v === 'benar' ? 'Benar' : v === 'hampir' ? 'Hampir' : 'Salah') + '</span>') + (isImg(q) ? '<button class="btn sm ghost" data-rvopen="' + i + '" style="margin-top:6px">Lihat gambar</button>' : '') + '</div></div>';
  }).join('') + '</div>';
}
function bindReviewOpen(list) {
  $app.querySelectorAll('[data-rvopen]').forEach(function (b) { b.addEventListener('click', function () {
    var q = list[+b.getAttribute('data-rvopen')];
    $modal.innerHTML = '<div class="modal" role="dialog" aria-modal="true"><div class="box"><div class="qhead"><b>' + esc(q.q) + '</b><div class="row"><button class="btn sm" data-zoombtn>Perbesar</button><button class="btn sm pri" data-close>Tutup</button></div></div>' + zoomBox(figure(q, { reveal: true })) + '<div class="key">' + esc(q.a) + '</div></div></div>';
    var root = $modal.firstChild; bindMasks(root); bindZoom(root);
    root.querySelector('[data-close]').addEventListener('click', closeModal);
    root.addEventListener('click', function (e) { if (e.target === root) closeModal(); });
    document.onkeydown = function (e) { if (e.key === 'Escape') closeModal(); };
  }); });
}

/* ---------- Simulasi OSPE ---------- */
function simList() {
  var used = {}, out = [];
  M.forEach(function (m) {
    var p = Q.filter(function (q) { return q.m === m.id; });
    var im = p.filter(isImg), tx = p.filter(function (q) { return !isImg(q); });
    var nImg = Math.min(im.length, (m.id === 'm3' || m.id === 'm8') ? 1 : 2);
    out = out.concat(pickW(im, nImg, used), pickW(tx, 3 - nImg, used));
  });
  var rest = Q.filter(function (q) { return PRIO.indexOf(q.m) >= 0 && isImg(q) && out.indexOf(q) < 0; });
  out = out.concat(pickW(rest, 25 - out.length, used));
  return shuffle(out).slice(0, 25);
}
function renderSimSetup() {
  $app.innerHTML = '<h1>Simulasi OSPE</h1><p class="lead">25 soal acak dari 8 materi (±3 soal per materi, kebanyakan bergambar seperti slide ujian). Tiap soal 60 detik dan pindah otomatis saat waktu habis. Tidak ada kunci sampai selesai.</p>' +
    '<div class="card setup" style="margin-top:16px"><div><span class="lbl">Cara menjawab</span><div class="seg"><button data-pp="0" class="' + (!store.prefs.paper ? 'on' : '') + '">Ketik di sini</button><button data-pp="1" class="' + (store.prefs.paper ? 'on' : '') + '">Tulis di kertas (seperti ujian)</button></div>' +
    '<p class="note">Mode kertas: siapkan kertas bernomor 1–25, tulis tangan, lalu nilai sendiri di halaman pembahasan.</p></div>' +
    '<div class="row"><button class="btn pri big" data-simstart>Mulai 25 soal × 1 menit</button><button class="btn big" data-past26>Simulasi UTS 2026 (ujian kemarin)</button><button class="btn big" data-past25>Simulasi soal UTS 2025</button><button class="btn big" data-past21>Simulasi soal UTS 21</button></div></div>';
  $app.querySelectorAll('[data-pp]').forEach(function (b) { b.addEventListener('click', function () { store.prefs.paper = b.getAttribute('data-pp') === '1'; save(); renderSimSetup(); }); });
  $app.querySelector('[data-simstart]').addEventListener('click', function () { startSession('sim', simList(), 'Simulasi OSPE'); });
  $app.querySelector('[data-past25]').addEventListener('click', function () { startSession('sim', Q.filter(function (q) { return q.set === 'UTS 2025'; }), 'Simulasi UTS 2025'); });
  $app.querySelector('[data-past26]').addEventListener('click', function () { startSession('sim', Q.filter(function (q) { return q.set === PSET26; }), 'Simulasi UTS 2026 (Prak \'23)'); });
  $app.querySelector('[data-past21]').addEventListener('click', function () { startSession('sim', shuffle(Q.filter(function (q) { return q.set === 'UTS 21'; })).slice(0, 25), 'Simulasi UTS 21 (25 acak)'); });
}
function renderSimCard() {
  stopTimer();
  var q = sess.list[sess.i], img = isImg(q), left = 60;
  var right = '<div class="card"><div class="qhead" style="margin-bottom:0"><span class="muted small">Soal ' + (sess.i + 1) + ' / ' + sess.list.length + '</span><span class="timer" id="tm">60</span></div><div class="tbar"><i id="tb" style="width:100%"></i></div><div class="qtext" style="margin-top:12px">' + esc(q.q) + '</div>' +
    (sess.paper ? '<p class="muted small">Tulis jawaban nomor ' + (sess.i + 1) + ' di kertasmu.</p>' : '<input class="ans" id="ans" autocomplete="off" spellcheck="false" placeholder="Jawaban…" aria-label="Jawaban">') +
    '<div class="row" style="margin-top:10px"><button class="btn pri" data-snext>' + (sess.i + 1 < sess.list.length ? 'Soal berikutnya' : 'Selesai') + '</button><button class="btn ghost sm" data-sstop>Hentikan simulasi</button></div></div>';
  $app.innerHTML = '<div class="qhead"><b>' + esc(sess.title) + '</b><span class="muted small">' + (MID[q.m] ? 'Prak. ' + MID[q.m].no : '') + '</span></div><div class="quiz' + (img ? '' : ' noimg') + '">' + (img ? '<div>' + zoomBox(figure(q)) + '<div class="row" style="margin-top:8px"><button class="btn sm" data-zoombtn>Perbesar</button></div></div>' : '') + right + '</div>';
  bindZoom($app);
  var inp = document.getElementById('ans');
  function next() { stopTimer(); sess.res[sess.i] = { input: inp ? inp.value : '', v: null, ok: null }; if (sess.i + 1 < sess.list.length) { sess.i++; renderSimCard(); } else finishSim(); }
  if (inp) { inp.focus(); inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); next(); } }); }
  $app.querySelector('[data-snext]').addEventListener('click', next);
  $app.querySelector('[data-sstop]').addEventListener('click', function () { stopTimer(); sess.list = sess.list.slice(0, sess.i); if (sess.list.length) finishSim(); else { sess = null; renderSimSetup(); } });
  var tm = document.getElementById('tm'), tb = document.getElementById('tb');
  timerId = setInterval(function () {
    left--; tm.textContent = left; tb.style.width = (left / 60 * 100) + '%'; tm.classList.toggle('low', left <= 10);
    if (left <= 0) next();
  }, 1000);
}
function finishSim() {
  stopTimer(); sess.done = true;
  sess.list.forEach(function (q, i) {
    var r = sess.res[i] || { input: '' }; sess.res[i] = r;
    if (sess.paper) { r.v = 'salah'; r.ok = false; }
    else { var g = grade(q, r.input); r.v = g.v; r.ok = g.v === 'benar'; }
  });
  renderSimResult();
}
function renderSimResult() {
  var ok = sess.res.filter(function (r) { return r.ok; }).length;
  $app.innerHTML = '<h1>Hasil simulasi</h1><div class="card" style="margin-top:14px"><div class="score">' + ok + ' / ' + sess.list.length + '</div><p class="muted">' + (sess.paper ? 'Mode kertas: cocokkan tulisanmu dengan kunci, lalu tandai Benar/Salah tiap soal.' : 'Dinilai otomatis (toleran salah ketik kecil). Koreksi penilaian dengan tombol Benar/Salah bila perlu.') + '</p>' +
    '<div class="row" style="margin-top:10px"><button class="btn pri" data-save>Simpan ke progres</button><button class="btn" data-again>Simulasi baru</button></div></div>' + reviewList(sess.list, sess.res, true);
  $app.querySelectorAll('[data-sg]').forEach(function (b) { b.addEventListener('click', function () { var p = b.getAttribute('data-sg').split('-'); sess.res[+p[0]].ok = p[1] === '1'; renderSimResult(); }); });
  bindReviewOpen(sess.list);
  var sv = $app.querySelector('[data-save]');
  sv.addEventListener('click', function () { if (sess.saved) return; sess.list.forEach(function (q, i) { record(q.id, !!sess.res[i].ok); }); sess.saved = true; sv.textContent = 'Tersimpan'; sv.disabled = true; });
  if (sess.saved) { sv.textContent = 'Tersimpan'; sv.disabled = true; }
  $app.querySelector('[data-again]').addEventListener('click', function () { sess = null; renderSimSetup(); });
}

/* ---------- Soal tahun lalu ---------- */
var PSET26 = "UTS 2026 (Prak '23)";
var pastSet = PSET26;
function renderPast() {
  var items = Q.filter(function (q) { return q.set === pastSet; });
  $app.innerHTML = '<h1>Soal tahun lalu</h1><p class="lead">UTS 2026 adalah soal ujian praktikum angkatan 2023 beserta kuncinya. UTS 2025 berasal dari ingatan kakak tingkat (isian). UTS 21 aslinya pilihan ganda dan di sini dijadikan isian seperti OSPE. Kunci sudah dicek ke slide; catatan muncul kalau kunci lama meragukan.</p>' +
    '<div class="row" style="margin:14px 0"><div class="seg">' + [PSET26, 'UTS 2025', 'UTS 21'].map(function (sn) { var n = Q.filter(function (q) { return q.set === sn; }).length; return '<button data-ps="' + esc(sn) + '" class="' + (pastSet === sn ? 'on' : '') + '">' + esc(sn) + ' (' + n + ')</button>'; }).join('') + '</div><button class="btn pri" data-plat>Latihan set ini</button><button class="btn" data-psim>Simulasi berwaktu</button></div>' +
    '<div class="pastgrid">' + items.map(function (q) {
      return '<div class="card"><div class="row" style="justify-content:space-between"><b class="timer" style="font-size:1rem">No. ' + q.no + '</b><span class="tag">' + (MID[q.m] ? 'Prak. ' + MID[q.m].no : '') + '</span></div>' + (q.pimg ? '<div style="margin-top:8px"><img src="img/' + q.pimg + '" alt="Gambar soal no. ' + q.no + '" loading="lazy" style="border-radius:8px;border:1px solid var(--line)"></div>' : '') +
        '<p style="margin:10px 0 8px;font-weight:500">' + esc(q.q) + '</p><details class="qa"><summary>Lihat jawaban</summary><div class="a"><div class="key">' + esc(q.a) + '</div>' + (q.x ? '<div class="small muted" style="margin-top:4px">' + esc(q.x) + '</div>' : '') + '</div></details></div>';
    }).join('') + '</div>';
  $app.querySelectorAll('[data-ps]').forEach(function (b) { b.addEventListener('click', function () { pastSet = b.getAttribute('data-ps'); renderPast(); }); });
  $app.querySelector('[data-plat]').addEventListener('click', function () { startSession('lat', shuffle(items.slice()), 'Soal ' + pastSet); });
  $app.querySelector('[data-psim]').addEventListener('click', function () { startSession('sim', pastSet === 'UTS 21' ? shuffle(items.slice()).slice(0, 25) : items.slice(), 'Simulasi ' + pastSet); });
}

route();
})();
