/* Konten belajar OSPE Praktikum UTS — disusun dari slide praktikum dosen + buku panduan.
   Tanda [TB] = tambahan/koreksi dari textbook (Moore, Netter, Junqueira, Robbins, Guyton). */

window.MATERI = [
  { id: 'm1', no: 'I', title: 'Anatomi Saraf I', sub: 'Scalp, meninges, cranium, basis cranii & foramen', decks: ['cranial'], dosen: 'dr. Erwin Hakim Lubis (Ossa Cranialis)' },
  { id: 'm2', no: 'II', title: 'Anatomi Saraf II', sub: 'Otak, batang otak, ventrikel, medula spinalis, plexus', decks: ['saraf2'], dosen: 'Praktikum Anatomi Syaraf II' },
  { id: 'm3', no: 'III', title: 'Tes Nonne & Pandy', sub: 'Pemeriksaan protein LCS', decks: ['nonne'], dosen: 'Bagian Patologi Klinik' },
  { id: 'm4', no: 'IV', title: 'Histologi & Histopatologi Saraf', sub: 'Neuron, glia, cerebrum, cerebellum, medula spinalis, kelainan SSP', decks: ['histosaraf', 'histopato'], dosen: 'dr. Ira Cinta Lestari & Bagian PA' },
  { id: 'm5', no: 'V', title: 'Osteologi & Arthrologi', sub: 'Vertebra, costa, tulang ekstremitas, klasifikasi sendi', decks: ['osteo'], dosen: 'Praktikum Osteologi & Arthrologi' },
  { id: 'm6', no: 'VI', title: 'Myologi', sub: 'Otot ekstremitas atas & bawah, plexus, vaskularisasi', decks: ['myo'], dosen: 'dr. Erwin Hakim Lubis' },
  { id: 'm7', no: 'VII', title: 'Histologi Muskuloskeletal', sub: 'Sel tulang, osteon, kartilago, 3 jenis otot', decks: ['histomusculo'], dosen: 'dr. Ira Cinta Lestari' },
  { id: 'm8', no: 'VIII', title: 'Perangsangan Otot & Saraf', sub: 'Preparat kodok, stimulus, kimograf, sumasi, tetanus, fatigue', decks: ['fisio'], dosen: 'Praktikum Muskuloskeletal (Fisiologi)' }
];

window.DECKNAME = {
  cranial: 'Revisi Praktikum Ossa Cranialis', saraf2: 'Praktikum Anatomi Syaraf II', nonne: 'Pemeriksaan Nonne & Pandy',
  histosaraf: 'Praktikum Histologi Syaraf', histopato: 'Praktikum Histopatologi Persyarafan', osteo: 'Praktikum Osteologi & Arthrologi',
  myo: 'Praktikum Myologi', histomusculo: 'Praktikum Histologi Muskuloskeletal', fisio: 'Praktikum Musculoskeletal (Fisiologi)'
};

window.SUMMARY = {
m1: `
<h3>Lapisan kulit kepala (SCALP), luar → dalam</h3>
<ol><li><b>S</b>kin (kulit)</li><li><b>C</b>onnective tissue: jaringan ikat padat, tempat pembuluh darah</li><li><b>A</b>poneurosis = <i>galea aponeurotica</i>, menyatukan m. frontalis & m. occipitalis</li><li><b>L</b>oose areolar tissue (jaringan ikat jarang)</li><li><b>P</b>ericranium (periosteum cranium)</li></ol>
<h3>Meninges & ruangnya</h3>
<ul><li>Duramater → arachnoidea mater → piamater.</li><li>Ruang: <b>spatium epidural</b> (antara tulang & dura), <b>subdural</b> (dura–arachnoid), <b>subarachnoid</b> (arachnoid–pia, berisi LCS).</li><li>Septa duramater: <b>falx cerebri</b> (di antara 2 hemisfer), <b>tentorium cerebelli</b> (atap fossa cranii posterior, di atas cerebellum), <b>falx cerebelli</b>, <b>diaphragma sellae</b> (atap sella turcica).</li><li>Sinus duramatris: sagittalis superior & inferior, rectus, transversus, sigmoideus, occipitalis, cavernosus, petrosus sup & inf → v. jugularis interna. <i>Confluens sinuum</i> = pertemuan sinus.</li></ul>
<h3>Ossa cranii (22 tulang)</h3>
<table><tr><th>Neurocranium (8)</th><th>Splanchnocranium / viscerocranium (14)</th></tr>
<tr><td>Tunggal: os frontale, occipitale, sphenoidale, ethmoidale<br>Sepasang: os parietale, os temporale</td><td>Sepasang: os nasale, lacrimale, zygomaticum, maxilla, palatinum, concha nasalis inferior<br>Tunggal: mandibula, vomer</td></tr></table>
<ul><li>Neurocranium dibagi <b>calvaria</b> & <b>basis cranii</b>. Batasnya: bidang horizontal lewat <b>arcus superciliaris</b> & <b>linea nuchae superior</b>.</li><li>Calvaria: squama frontalis, os parietale ka/ki, pars squamosa os temporale, squama occipitalis.</li></ul>
<h3>Sutura & titik kraniometri</h3>
<table><tr><th>Sutura</th><th>Menghubungkan</th></tr>
<tr><td>Coronalis</td><td>os frontale – kedua os parietale</td></tr>
<tr><td>Sagittalis</td><td>os parietale – os parietale</td></tr>
<tr><td>Lambdoidea</td><td>os parietale – os occipitale</td></tr>
<tr><td>Squamosa</td><td>os parietale – squama temporalis</td></tr>
<tr><td>Frontalis (metopica)</td><td>kedua belahan os frontale (bayi)</td></tr></table>
<p class="warn">Slide Ossa Cranialis menulis "sutura coronalis: antara os parietale dan os parietale". Itu salah ketik. Yang benar: frontale–parietale.</p>
<ul><li><b>Bregma</b>: pertemuan sutura sagittalis & coronalis (= fontanella anterior). <b>Lambda</b>: sagittalis & lambdoidea (= fontanella posterior). <b>Vertex</b>: titik tertinggi. <b>Obelion</b>: pada sutura sagittalis di antara foramina parietalia.</li>
<li><b>Nasion</b>: sutura nasofrontalis di garis tengah. <b>Glabella</b>: di atas nasion, di antara arcus superciliaris. <b>Inion</b>: pada protuberantia occipitalis externa. <b>Basion/Opisthion</b>: tepi depan/belakang foramen magnum. <b>Gonion</b>: sudut mandibula. <b>Porion</b>: titik teratas porus acusticus externus. <b>Orbitale</b>: titik terendah tepi bawah orbita (Porion + Orbitale = <b>bidang Frankfurt</b>).</li></ul>
<h3>Fossa cranii & foramen (paling sering keluar!)</h3>
<table><tr><th>Fossa</th><th>Isi otak</th><th>Lubang → yang lewat</th></tr>
<tr><td>Anterior (os frontale pars orbitalis, lamina cribrosa os ethmoidale, ala minor os sphenoidale)</td><td>Lobus frontalis</td><td>Lamina cribrosa → <b>N. I</b> olfactorius; foramen caecum; crista galli (tonjolan os ethmoidale)</td></tr>
<tr><td>Media (ala major & corpus os sphenoidale, pars petrosa anterior, squama temporalis)</td><td>Lobus temporalis</td><td>Canalis opticus → <b>N. II</b> (+ a. ophthalmica)<br>Fissura orbitalis superior → <b>N. III, IV, V1, VI</b><br>Foramen <b>R</b>otundum → <b>V2</b> (maxillaris)<br>Foramen <b>O</b>vale → <b>V3</b> (mandibularis)<br>Foramen <b>S</b>pinosum → <b>a. meningea media</b><br>Foramen lacerum; sella turcica (fossa hypophysialis → hipofisis)</td></tr>
<tr><td>Posterior (dorsum sellae, pars petrosa posterior, os occipitale)</td><td>Cerebellum, pons, medulla oblongata</td><td>Meatus/porus acusticus internus → <b>N. VII & VIII</b><br>Foramen jugulare → <b>N. IX, X, XI</b> + v. jugularis interna [TB: buku panduan hanya menulis IX & X]<br>Canalis hypoglossi → <b>N. XII</b><br>Foramen magnum → medulla oblongata, a. vertebralis</td></tr></table>
<p class="tip">Jembatan keledai dosen: <b>R-O-S</b> = rotundum, ovale, spinosum berderet dari anterior ke posterior di ala major.</p>
<h3>Ciri kelamin cranium (akurasi ±92%)</h3>
<table><tr><th>Ciri</th><th>Pria</th><th>Wanita</th></tr>
<tr><td>Sudut frontal</td><td>Kecil</td><td>Besar</td></tr><tr><td>Regio glabella</td><td>Sangat jelas</td><td>Tidak jelas</td></tr><tr><td>Regio supraorbitalis</td><td>Crista jelas</td><td>Kurang berkembang</td></tr><tr><td>Processus mastoideus</td><td>Besar</td><td>Kecil</td></tr><tr><td>Permukaan calvaria</td><td>Kasar</td><td>Licin</td></tr><tr><td>Tuberositas masseterica & pterygoidea</td><td>Sangat menonjol</td><td>Tidak jelas</td></tr><tr><td>Linea nuchae & protuberantia occipitalis externa</td><td>Jelas</td><td>Kurang jelas</td></tr></table>
<h3>Mandibula</h3>
<ul><li>Corpus mandibulae: protuberantia mentalis, tuberculum mentale, <b>foramen mentale</b>, linea obliqua, pars alveolaris (16 alveoli dentales).</li><li>Ramus: <b>incisura mandibulae</b> membagi menjadi <b>processus coronoideus</b> (ventral, tempat m. temporalis) & <b>processus condylaris/articularis</b> (dorsal, capitulum mandibulae). Angulus: <b>tuberositas masseterica</b> (luar), <b>tuberositas pterygoidea</b> (dalam).</li></ul>
<h3>Rongga cranium, sinus, TMJ</h3>
<ul><li>Rongga: fossa temporalis, fossa infratemporalis, fossa pterygopalatina, cavum orbitae, cavum nasi.</li><li>Septum nasi osseum = lamina perpendicularis os ethmoidale (atas) + vomer (bawah).</li><li>Sinus paranasalis: maxillaris, frontalis, ethmoidalis anterior → <b>meatus nasi medius</b>; ethmoidalis posterior → meatus nasi superior; sphenoidalis → recessus sphenoethmoidalis.</li><li>TMJ, komponen pasif: fossa mandibularis os temporale, capitulum mandibulae, capsula articularis, <b>discus articularis</b> (membagi rongga sendi jadi 2), ligamenta (temporomandibulare laterale, sphenomandibulare, stylomandibulare).</li></ul>
<h3>Vaskularisasi otak (buku panduan Prak. I)</h3>
<ul><li><b>A. carotis interna</b> (masuk lewat canalis caroticus) → a. cerebri anterior, a. cerebri media, a. communicans posterior.</li><li><b>A. vertebralis</b> ka+ki masuk lewat foramen magnum → bersatu jadi <b>a. basilaris</b> (permukaan ventral pons) → 2 <b>a. cerebri posterior</b>.</li><li><b>Circulus arteriosus Willisi</b>: a. communicans anterior, aa. cerebri anteriores, a. carotis interna, aa. communicantes posteriores, aa. cerebri posteriores.</li><li>Columna vertebralis: cervical 7, thoracal 12, lumbal 5, sacrum (5 ruas menyatu), coccyx (4–5).</li></ul>`,

m2: `
<h3>Pembagian SSP</h3>
<ul><li><b>Encephalon</b>: Prosencephalon (= telencephalon/cerebrum + diencephalon), Mesencephalon, Rhombencephalon (= metencephalon: pons + cerebellum; myelencephalon: medulla oblongata).</li><li><b>Medulla spinalis</b>.</li><li>SST: 12 pasang n. cranialis, 31 pasang n. spinalis, sistem saraf otonom (simpatis & parasimpatis).</li></ul>
<h3>Cerebrum</h3>
<ul><li>2 hemisfer dipisahkan <b>fissura longitudinalis cerebri</b> dan dihubungkan <b>corpus callosum</b>.</li><li>4 lobus: frontalis, parietalis, temporalis, occipitalis. <b>Insula</b> tersembunyi di dalam sulcus lateralis.</li><li>4 sulcus utama: <b>centralis (Rolandi)</b>, <b>parieto-occipitalis</b>, <b>lateralis (Sylvii)</b>, <b>calcarina</b>.</li><li>Cortex = substansia grisea; gyrus (tonjolan) & sulcus (lekukan).</li></ul>
<h3>Diencephalon</h3>
<table><tr><th>Dorsal</th><th>Ventral</th></tr><tr><td>Thalamus (dinding lateral ventrikel III)<br>Metathalamus: corpus geniculatum mediale & laterale<br>Epithalamus: corpus pineale, trigonum habenulae, commissura posterior</td><td>Hypothalamus: <b>chiasma opticum, infundibulum, tuber cinereum, corpus mammillare</b><br>Subthalamus (thalamus ventralis)</td></tr></table>
<h3>Batang otak (truncus encephali)</h3>
<ul><li>= <b>mesencephalon + pons + medulla oblongata</b>, berbaring di <b>clivus</b> (Blumenbachi).</li><li>3 pedunculus cerebelli: <b>superior</b> (brachium conjunctivum) → mesencephalon; <b>medius</b> (brachium pontis) → pons; <b>inferior</b> (corpus restiforme) → medulla oblongata.</li><li><b>Mesencephalon</b>: tectum (corpora quadrigemina = 2 colliculus superior + 2 inferior), tegmentum, pedunculus cerebri (crus cerebri). Rongga: <b>aquaeductus cerebri (Sylvii)</b>. Colliculus superior → corpus geniculatum laterale = visual. Colliculus inferior → corpus geniculatum mediale = auditori. <b>N. III</b> keluar dari fossa interpeduncularis (sisi medial crus cerebri). <b>N. IV</b> keluar di dorsal, di bawah colliculus inferior (satu-satunya n. cranialis yang keluar dari dorsal).</li><li><b>Pons</b>: sulcus basilaris (a. basilaris); <b>N. V</b> keluar di lateral (radix motoris kecil, sensoris besar); <b>N. VI, VII, VIII</b> keluar di batas pons–medulla.</li><li><b>Medulla oblongata</b>, anterior: fissura mediana anterior, <b>pyramis</b> (tractus corticospinalis), decussatio pyramidum, <b>oliva</b> (nucleus olivaris inferior). <b>N. XII</b> keluar dari sulcus anterolateralis (antara pyramis & oliva). <b>N. IX, X, XI</b> keluar dari sulcus posterolateralis (dorsal oliva). Posterior: tuberculum gracile (nucleus gracilis), tuberculum cuneatum (nucleus cuneatus), trigonum hypoglossi & vagale, <b>obex</b>.</li></ul>
<h3>Cerebellum</h3><ul><li>2 hemisfer + <b>vermis</b> di tengah. 3 lobus: <b>anterior, posterior (medius), flocculonodularis</b>.</li></ul>
<h3>Ventrikel & LCS</h3>
<ul><li>Ventriculus lateralis ka/ki → <b>foramen interventriculare (Monro)</b> → ventriculus III (diencephalon) → <b>aquaeductus cerebri (Sylvii)</b> → ventriculus IV (antara pons/medulla & cerebellum) → <b>apertura lateralis (Luschka)</b> ×2 & <b>apertura mediana (Magendie)</b> → spatium subarachnoid & cisterna → diserap <b>granulatio arachnoidea</b> → sinus sagittalis superior.</li><li>Diproduksi <b>plexus choroideus</b>. ±20 mL/jam, ±500 mL/hari, volume ±140 mL.</li><li>Ventriculus IV: atap = cerebellum (velum medullare superius & inferius); lantai = <b>fossa rhomboidea</b> (sulcus medianus, sulcus limitans, eminentia mediana, colliculus facialis, area vestibuli, striae medullares, obex).</li><li>Cisterna: cerebellomedullaris (<b>magna</b>), pontis, interpeduncularis (basalis), fossa lateralis, v. cerebri magna (ambiens), chiasmatis.</li></ul>
<h3>Ganglia basalis & capsula interna</h3>
<ul><li>Corpus striatum (dipisahkan capsula interna): <b>nucleus caudatus</b> (bentuk huruf C: caput, corpus, cauda) + <b>nucleus lentiformis</b> (= putamen di lateral + globus pallidus di medial). Ditambah corpus amygdaloideum & claustrum. Fungsi: tonus otot, gerakan luwes & otomatis.</li><li>Capsula interna: <b>crus anterius</b> (antara n. lentiformis & n. caudatus), <b>genu</b>, <b>crus posterius</b> (antara thalamus & n. lentiformis).</li></ul>
<h3>Sistem limbik</h3><ul><li>Gyrus subcallosus, gyrus cinguli, formatio hippocampi (hippocampus, gyrus dentatus, gyrus parahippocampalis), nucleus amygdaloideus, hypothalamus/corpus mammillare, nucleus anterior thalami. Jaras: alveus, fimbria, fornix, tractus mammillothalamicus, stria terminalis.</li><li>Fungsi: kebiasaan makan, tingkah laku seksual, ekspresi emosi.</li></ul>
<h3>Medulla spinalis & nervus</h3>
<ul><li>Panjang 40–45 cm, dari foramen magnum (atlanto-occipital) sampai <b>L1–L2</b>. Ujung kerucut = <b>conus medullaris</b> → <b>filum terminale</b> (melekat ke coccyx). Akar lumbal-sakral bawah = <b>cauda equina</b>.</li><li><b>Intumescentia cervicalis</b> (plexus brachialis) & <b>lumbalis</b> (plexus lumbosacralis).</li><li>31 pasang n. spinalis: C8, T12, L5, S5, Co1. Tiap n. spinalis = radix dorsalis (aferen/sensoris) + radix ventralis (eferen/motoris).</li><li><b>Plexus brachialis</b> C5–T1: 5 radix → 3 truncus (superior C5–6, medius C7, inferior C8–T1) → 6 divisi → 3 fasciculus. Lateralis → n. musculocutaneus. Medialis → n. ulnaris (+ n. cutaneus brachii & antebrachii medialis). Lateralis + medialis → n. medianus. Posterior → n. axillaris & n. radialis.</li><li><b>Plexus lumbosacralis</b>: lumbalis → n. femoralis, n. obturatorius. Sacralis → <b>n. gluteus superior & inferior</b>, n. ischiadicus (= n. tibialis + n. peroneus/fibularis communis).</li></ul>
<p class="warn">Slide Anatomi Syaraf II menulis n. gluteus sup/inf berasal dari plexus lumbalis. Yang benar: dari plexus sacralis.</p>
<h3>Soal pre-test dari slide (latihan wajib)</h3><ol><li>Organ yang termasuk SSP</li><li>Isi brain stem</li><li>Isi ganglia basalis</li><li>Bagian umum cerebrum & cerebellum</li><li>Bagian hypothalamus</li><li>Bagian sistem ventrikel</li></ol>`,

m3: `
<h3>Pengambilan LCS</h3>
<ul><li>Punksi <b>lumbal L3–L4 atau L4–L5</b> ke cavum subarachnoid (tersering). Bisa juga suboccipital (cisterna magna) atau ventrikel.</li><li>Butuh 10–20 mL dalam 3–4 <b>tabung plastik steril</b> (bukan kaca, karena sel melekat ke kaca): <b>I</b> = tetes pertama, sering bercampur darah punksi, jangan dipakai. <b>II</b> = kimia. <b>III</b> = mikroskopis (sel). <b>IV</b> = mikrobiologi (kultur & sensitivitas), harus steril.</li><li>LCS keruh/berdarah: tambah Na-sitrat 20% sebanyak 0,01 mL per 1 mL LCS agar tidak membeku. Periksa maksimal 1 jam setelah diambil.</li><li>Pemeriksaan rutin: makroskopis, mikroskopis, kimia, bakteriologi + sensitivity test. Khusus: elektroforesis protein, imunoelektroforesis, serologi, imunoglobulin.</li></ul>
<h3>Alat & bahan</h3><p>Sampel LCS, reagen Nonne, reagen Pandy, tabung reaksi (kecil, diameter 7 mm), pipet tetes, spuit.</p>
<table><tr><th></th><th>Tes PANDY</th><th>Tes NONNE</th></tr>
<tr><td>Mendeteksi</td><td><b>Albumin + globulin</b></td><td><b>Globulin</b> saja</td></tr>
<tr><td>Bentuk reaksi</td><td>Kekeruhan</td><td><b>Cincin putih</b> di perbatasan 2 lapisan</td></tr>
<tr><td>Cara</td><td>1 mL reagen Pandy + <b>1 tetes</b> LCS → lihat <b>segera</b></td><td>1 mL reagen Nonne + <b>1 mL</b> LCS dialirkan pelan dari dinding tabung (miring) → 2 lapisan (LCS di atas) → <b>diamkan 3 menit</b> → lihat perbatasan</td></tr>
<tr><td>Negatif (normal)</td><td>Tidak keruh (atau keruh sangat halus)</td><td>Tidak terbentuk cincin</td></tr>
<tr><td>Positif</td><td>Kekeruhan jelas</td><td>Terbentuk cincin</td></tr>
<tr><td>Reagen [TB]</td><td>Larutan fenol (asam karbol) jenuh</td><td>Amonium sulfat jenuh</td></tr></table>
<p class="tip"><b>UTS 2026: 4 soal (no. 7–10) tentang tes Pandy.</b> Tujuan tes Pandy = mendeteksi <b>albumin dan globulin</b> di LCS. Patokan cepat: soal menyebut "kekeruhan" → Pandy; menyebut "cincin" di antara dua lapisan → Nonne; "albumin & globulin meningkat" → Pandy.</p>
<h3>Tabel interpretasi (hafalkan!)</h3>
<table><tr><th>Nonne</th><th>Pandy</th><th>Interpretasi</th></tr><tr><td>+</td><td>+</td><td>↑ globulin dan/atau ↑ albumin</td></tr><tr><td>+</td><td>−</td><td>Tidak mungkin terjadi</td></tr><tr><td>−</td><td>+</td><td>↑ albumin</td></tr><tr><td>−</td><td>−</td><td>Normal</td></tr></table>
<h3>Arti klinis</h3>
<ul><li><b>Pandy positif</b>: tumor otak (meningioma, neuroma akustik, ependimoma), abses otak, sklerosis multipel, meningitis purulen akut, meningitis granulomatosa, sindrom Guillain-Barré, penyakit Cushing, perdarahan otak.</li><li><b>Nonne positif</b>: kerusakan sawar darah otak, ↑ produksi imunoglobulin di SSP, ↓ klirens protein LCS, degenerasi jaringan saraf. Tersering: <b>meningitis & perdarahan</b>.</li><li>Nilai rujukan keduanya: <b>negatif</b>.</li></ul>`,

m4: `
<h3>Neuron</h3>
<ul><li>Bagian: dendrit, badan sel (perikaryon, badan Nissl), axon hillock, <b>axon</b>, selubung mielin, nodus Ranvier, terminal presinaps.</li><li>Jenis: <b>multipolar</b> (paling banyak, motor neuron), <b>bipolar</b> (retina, mukosa olfaktori, ganglion koklear & vestibular), <b>pseudounipolar</b> (ganglion spinal & ganglion kranial).</li></ul>
<h3>Sel glia</h3>
<table><tr><th>Sel</th><th>Lokasi</th><th>Fungsi</th></tr>
<tr><td>Oligodendrosit</td><td>SSP</td><td>Membentuk mielin SSP</td></tr><tr><td>Astrosit</td><td>SSP</td><td>Penyokong, sawar darah otak, perbaikan</td></tr><tr><td>Mikroglia</td><td>SSP (asal sumsum tulang)</td><td>Imun/fagosit</td></tr><tr><td>Sel ependim</td><td>SSP</td><td>Melapisi ventrikel & kanal sentral</td></tr><tr><td><b>Sel Schwann</b></td><td>SST</td><td>Membentuk <b>mielin SST</b> (neurolemmocyte)</td></tr><tr><td>Sel satelit</td><td>Ganglion SST</td><td>Penyokong badan sel ganglion</td></tr></table>
<p>Substansia <b>grisea</b> = badan sel neuron + glia. Substansia <b>alba</b> = serabut saraf (axon) bermielin.</p>
<h3>Cerebrum: 6 lapisan korteks (luar → dalam)</h3>
<ol><li>Lamina <b>molecularis</b> (plexiform), di bawah piamater</li><li>Lamina <b>granularis externa</b></li><li>Lamina <b>pyramidalis</b> (externa)</li><li>Lamina <b>granularis interna</b></li><li>Lamina <b>ganglionaris</b> (pyramidalis interna; sel piramid besar)</li><li>Lamina <b>multiformis</b> (sel fusiform/polimorf)</li></ol>
<p>Permukaan secara makro tidak berlipat-lipat seperti otak kecil. Lapisan sukar dibedakan. Substansia alba = serabut bermielin.</p>
<h3>Cerebellum: 3 lapisan (luar → dalam)</h3>
<ol><li>Lamina <b>molecularis</b>: dendrit sel Purkinje, sel bintang, akson paralel, kapiler (pucat, sedikit sel)</li><li>Lamina <b>ganglionaris</b> = lapisan <b>sel Purkinje</b> (satu deret sel besar berbentuk piriform/botol)</li><li>Lamina <b>granularis</b>: sel granul kecil, sangat banyak (ungu gelap)</li></ol>
<p>Makro: gambaran pohon = <b>arbor vitae</b>. Substansia alba di tengah folium.</p>
<p class="tip">Soal UTS: pada gambar cerebellum, nomor di lapisan pucat luar = molekularis; lapisan gelap padat = granularis; deret sel besar di antaranya = Purkinje (ganglionaris).</p>
<h3>Medula spinalis (potongan melintang)</h3>
<ul><li>Substansia grisea di tengah berbentuk <b>kupu-kupu / huruf H</b>; alba di luar.</li><li><b>Fissura mediana anterior</b> = celah dalam di depan. <b>Sulcus medianus posterior</b> + septum medianum posterior di belakang. Alba posterior: <b>fasciculus gracilis</b> (Goll, medial) & <b>cuneatus</b> (Burdach, lateral).</li><li><b>Kornu anterior</b> (ventral) lebih <b>tebal</b>, berisi motor neuron besar (kolumna antero-medial & antero-lateral). <b>Kornu posterior</b> (dorsal) lebih <b>runcing</b>, ada traktus Lissauer. <b>Kanal ependim/sentral</b> di tengah grisea.</li></ul>
<h3>Saraf tepi</h3><p>Nerve = kumpulan axon + sel glia + jaringan ikat: <b>epineurium</b> (luar), <b>perineurium</b> (membungkus fasikel), <b>endoneurium</b> (tiap serabut). Ganglia sensoris & otonom, ujung saraf.</p>
<p>Preparat praktikum: <b>cerebrum, cerebellum, medula spinalis</b> (perbesaran 40×, 100×, 400×).</p>
<h3>Histopatologi: trauma</h3>
<table><tr><th></th><th>Epidural hematoma</th><th>Subdural hematoma</th><th>Subarachnoid hemorrhage</th></tr>
<tr><td>Pembuluh</td><td><b>A. meningea media</b> (fraktur temporal)</td><td><b>Bridging veins</b></td><td>Aneurisma arteri circulus Willisi</td></tr>
<tr><td>Onset</td><td>Cepat</td><td>Lebih lambat</td><td>Cepat</td></tr>
<tr><td>Darah di LCS</td><td>Tidak</td><td>Tidak</td><td><b>Ya</b></td></tr>
<tr><td>Khas</td><td>Lucid interval, bentuk lensa</td><td>Bulan sabit, trauma frontal/occipital</td><td>Sakit kepala hebat mendadak</td></tr></table>
<h3>Histopatologi: infeksi</h3>
<ul><li><b>Abses serebri</b>: dari fokus lokal (mastoiditis, sinusitis) atau hematogen (ekstraksi gigi, sepsis). Staph/Strep. Awalnya cerebritis (neutrofil, edema, nekrosis likuefaktif) → kapsul fibrosa dengan pusat cair. Juga: empiema subdural (sinusitis), abses ekstradural (osteomielitis).</li><li><b>Meningitis bakterial</b>: leptomeningitis (pia + arachnoid, LCS terinfeksi) vs pachymeningitis (dura; dari sinusitis/mastoiditis kronik). Makro: <b>eksudat krem</b> menutupi leptomeninges. Mikro: <b>neutrofil di ruang subarachnoid</b>.</li><li>LCS: bakterial = neutrofil, protein ↑, glukosa ↓. TB = limfosit, protein ↑, glukosa ↓. Virus = limfosit, protein ±, glukosa normal. Sifilis = limfosit & sel plasma.</li><li>Kronik: TB, sifilis (gumma), Lyme (neuro-borreliosis). Ensefalitis virus. <b>Ensefalitis HIV</b>: atrofi ringan, demielinisasi, astrogliosis, <b>nodul mikroglia + sel datia berinti banyak</b> (patognomonik).</li></ul>
<h3>Histopatologi: tumor</h3>
<ul><li>Sekunder (<b>metastasis</b>, tersering): paru, payudara, melanoma, ginjal, GIT (±80%).</li><li>Primer: glia (astrositoma & glioblastoma, oligodendroglioma, ependimoma), selubung saraf (schwannoma, neurofibroma), meninges (<b>meningioma</b>), embrional (<b>medulloblastoma</b>), limfoma SSP.</li><li>Tersering <b>dewasa</b>: astrositoma/glioblastoma, meningioma, metastasis. <b>Anak</b>: astrositoma & medulloblastoma.</li><li><b>Astrositoma</b> (GFAP+): grade I pilositik (anak, fossa posterior), II difus, III anaplastik, IV <b>glioblastoma multiforme</b> (massa nekrotik-hemoragik, <b>nekrosis dikelilingi sel tumor pseudopalisade</b>, <b>proliferasi endotel</b>).</li><li><b>Ependimoma</b>: 2 dekade pertama, di/dekat ventrikel IV (→ hidrosefalus). Dewasa: di medula spinalis (NF2).</li><li><b>Meningioma</b>: dari meningotel, dekade 4–5, 20% tumor SSP primer, menempel di permukaan luar otak. Multipel + schwannoma N. VIII → NF2. Mikro: pola <i>whorl</i> (pusaran sel) dan <b>badan psammoma</b>, yaitu struktur bulat berlapis konsentris yang mengalami kalsifikasi. <span class="tag eo">UTS 2026</span></li><li><b>Medulloblastoma</b>: predominan anak, eksklusif di <b>cerebellum</b> (fossa posterior), tidak berdiferensiasi (<i>small round blue cell</i>), sangat ganas tetapi <b>sangat radiosensitif</b>. Gejala: sakit kepala, muntah pagi hari, gangguan keseimbangan. <span class="tag eo">UTS 2026</span></li></ul>`,

m5: `
<h3>Penggolongan tulang</h3>
<ul><li>Panjang (femur), pendek (cuboideum, carpal), pipih (cranium, sternum, scapula), tak beraturan (vertebra, tulang wajah), <b>sesamoid</b> (patella).</li><li><b>Axial</b>: cranium, sternum, costae, vertebrae, sacrum. <b>Appendicular</b>: cingulum (scapula, clavicula, coxae) + ekstremitas superior & inferior.</li></ul>
<h3>Vertebra</h3>
<ul><li><b>Columna vertebralis</b> = rangka aksial bagian posterior batang tubuh. <span class="tag eo">UTS 2026</span> C7, T12, L5, sacral 5 (menyatu), coccygeal 4–5. Kurvatura: <b>lordosis cervicalis</b>, <b>kifosis thoracalis</b>, <b>lordosis lumbalis</b>, <b>kifosis sacralis</b>.</li><li>Bagian umum: corpus (anterior), arcus (pediculus/radix + lamina), foramen vertebrale (→ canalis vertebralis), incisura vertebralis superior & inferior (→ foramen intervertebrale, tempat keluar n. spinalis), proc. articularis superior & inferior, proc. transversus, proc. spinosus.</li></ul>
<table><tr><th></th><th>Cervical</th><th>Thoracal</th><th>Lumbal</th></tr>
<tr><td>Corpus</td><td>Kecil, segi empat</td><td>Bentuk jantung</td><td>Besar, bentuk ginjal/kacang</td></tr>
<tr><td>Foramen vertebrale</td><td>Lebih besar dari corpus (segitiga)</td><td>Bulat</td><td>Segitiga sama kaki</td></tr>
<tr><td>Proc. spinosus</td><td><b>Bercabang dua</b> (bifid)</td><td>Panjang, seperti taji, arah ke bawah</td><td>Kokoh, datar (horizontal)</td></tr>
<tr><td>Khas</td><td><b>Foramen transversarium</b></td><td><b>Fovea costalis</b></td><td>Proc. mamillaris & accessorius</td></tr></table>
<ul><li><b>C1 = atlas</b>: cincin, tanpa corpus & tanpa proc. spinosus (ada tuberculum anterius & posterius, fovea dentis, foramen transversarium).</li><li><b>C2 = axis (epistropheus)</b>: punya <b>dens</b> (dens epistrophei).</li><li><b>C7 = vertebra prominens</b>: proc. spinosus panjang & <b>tidak bercabang</b>.</li></ul>
<p class="warn">Slide Osteologi menulis "Cervicalis II disebut juga os prominens". Itu salah. C2 = axis, vertebra prominens = C7.</p>
<ul><li><b>Sacrum</b>: basis, <b>promontorium</b>, foramina sacralia anterior & posterior, crista sacralis mediana/intermedia/lateralis, facies auricularis (bersendi dengan ilium), apex.</li></ul>
<h3>Sternum & costa</h3>
<ul><li>Sternum: <b>manubrium</b>, <b>corpus</b>, <b>processus xiphoideus</b>.</li><li>Costa verae I–VII (langsung ke sternum), spuriae VIII–X (lewat cartilago costa di atasnya), fluctuantes XI–XII (ujung bebas).</li><li><b>Costa I</b>: <b>tuberculum m. scaleni (anterior)</b>, sulcus a. & v. subclavia. Bagian costa: caput (capitulum), collum, tuberculum, angulus, corpus, <b>sulcus costae</b>.</li></ul>
<h3>Ekstremitas superior</h3>
<ul><li><b>Scapula</b>: 3 angulus (superior, inferior, lateralis), 3 margo (superior, medialis/vertebralis, lateralis/axillaris), 2 facies (costalis & dorsalis). <b>Spina scapulae</b> memisah fossa <b>supraspinata</b> & <b>infraspinata</b>. <b>Acromion</b>, <b>processus coracoideus</b>, <b>cavitas glenoidalis</b> (bersendi dengan caput humeri), collum scapulae.</li><li><b>Clavicula</b>: bentuk S. Extremitas sternalis (bulat, medial) & acromialis (pipih, lateral), tuberositas coracoidea, sulcus subclavius.</li><li><b>Humerus</b>. Proksimal: caput, collum anatomicum, <b>collum chirurgicum</b>, tuberculum majus & minus, sulcus intertubercularis. Corpus: <b>tuberositas deltoidea</b>, sulcus n. radialis. Distal: <b>trochlea</b> (ke ulna), <b>capitulum</b> (ke radius), epicondylus medialis & lateralis, fossa coronoidea & radialis (depan), <b>fossa olecrani</b> (belakang), sulcus n. ulnaris (belakang epicondylus medialis).</li><li><b>Ulna</b> (medial): <b>olecranon</b>, proc. coronoideus, incisura trochlearis. <b>Radius</b> (lateral): caput/capitulum radii (circumferentia articularis), collum, <b>tuberositas radii</b>, incisura ulnaris, <b>proc. styloideus</b>.</li><li><b>Carpal (8)</b>, proksimal lat→med: <b>naviculare (scaphoideum), lunatum, triquetrum, pisiforme</b>. Distal: <b>multangulum majus (trapezium), multangulum minus (trapezoideum), capitatum, hamatum</b>. Jembatan keledai dosen: "Nona Lagi Tunggu Pacar Main-main ...". Metacarpal I–V, phalanges 14.</li></ul>
<p class="warn">Slide menulis "Os piriformis". Yang benar: <b>os pisiforme</b>.</p>
<h3>Ekstremitas inferior</h3>
<ul><li><b>Os coxae</b> = ilium + ischium + pubis, bertemu di <b>acetabulum</b> (bentuk huruf Y saat pubertas).</li><li><b>Cavum pelvis</b> dibentuk oleh 2 os coxae (ilium, ischium, pubis), <b>os sacrum</b>, dan <b>os coccygis</b>. <span class="tag eo">UTS 2026</span></li><li><b>Femur</b>: tulang terpanjang. Caput, collum, trochanter major & minor, linea aspera, condylus medialis & lateralis, fossa intercondylaris.</li><li><b>Patella</b>: sesamoid. Basis di atas, apex di bawah, facies articularis medialis & lateralis. Menentukan sisi (dosen): letakkan permukaan posterior ke bawah; kalau jatuh ke kanan → patella kanan.</li><li><b>Tibia</b> (medial): condylus medialis & lateralis, <b>tuberositas tibiae</b>, crista anterior, <b>malleolus medialis</b>. <b>Fibula</b> (lateral): capitulum fibulae, <b>malleolus lateralis</b>.</li><li><b>Tarsal (7)</b>: talus, <b>calcaneus</b> (tulang tumit, tarsal terbesar, tempat insersio tendo Achilles) <span class="tag eo">UTS 2026</span>, naviculare, cuboideum, cuneiforme mediale/intermedium/laterale. Metatarsal I–V, phalanges 14.</li></ul>
<h3>Arthrologi</h3>
<table><tr><th>Jenis</th><th>Gerak</th><th>Contoh</th></tr>
<tr><td><b>Sinarthrosis</b>: sutura, gomphosis, synchondrosis, synostosis</td><td>Tidak bergerak</td><td>Sutura cranium; gigi–rahang (gomphosis); iga–sternum (synchondrosis)</td></tr>
<tr><td><b>Amphiarthrosis</b>: syndesmosis, symphysis</td><td>Sedikit</td><td>Radius–ulna (membrana interossea); symphysis pubis; antar-vertebra</td></tr>
<tr><td><b>Diarthrosis</b> (sinovial)</td><td>Luas</td><td>Kapsul fibrosa, membran & cairan sinovial, rawan sendi (tanpa saraf & pembuluh darah)</td></tr></table>
<ul><li>Sumbu 1: <b>ginglymus/engsel</b> (humeroulnar, interphalang), <b>trochoidea/kisar</b> (radioulnar). Sumbu 2: <b>ellipsoidea</b> (radiocarpea), <b>sellaris/pelana</b>. Sumbu 3: <b>spheroidea/globoidea (peluru)</b>.</li>
<li>Art. sternoclavicularis: simpleks, permukaan sellaris, berfungsi triaksial. Art. acromioclavicularis: slide menyebut globoidea/triaksial [TB: plane joint]. <b>Art. humeri</b>: spheroidea, triaksial, simpleks; khas ada tendo melewati ruang sendi; diperkuat m. supraspinatus, infraspinatus, teres minor, subscapularis, deltoideus. <b>Art. cubiti</b>: composita (humeroulnaris + humeroradialis + radioulnaris proksimalis). Radius–ulna: diarthrosis (radioulnaris proksimal & distal) + syndesmosis (membrana interossea, chorda obliqua). <b>Art. radiocarpea</b>: ellipsoidea (2 aksis).</li></ul>`,

m6: `
<h3>Prinsip</h3>
<ul><li>3 jenis otot: rangka (volunter), jantung, polos. Penamaan otot rangka berdasar bentuk (m. rhomboideus major), perlekatan (m. sternohyoideus), fungsi (m. flexor pollicis longus), arah serabut (m. obliquus externus abdominis).</li></ul>
<h3>Ekstremitas superior</h3>
<table><tr><th>Regio</th><th>Otot</th></tr>
<tr><td>Bahu ventral</td><td>Pectoralis major, pectoralis minor, subclavius, subscapularis</td></tr>
<tr><td>Bahu lateral</td><td><b>Deltoideus</b>, supraspinatus</td></tr>
<tr><td>Bahu dorsal</td><td>Infraspinatus, teres major, teres minor, latissimus dorsi</td></tr>
<tr><td>Lengan atas ventral</td><td>Biceps brachii, coracobrachialis, brachialis</td></tr>
<tr><td>Lengan atas dorsal</td><td>Triceps brachii, anconeus</td></tr>
<tr><td>Lengan bawah ventral superfisial</td><td>Pronator teres, flexor carpi radialis, palmaris longus, <b>flexor digitorum superficialis</b> (tendo ke jari II–V) <span class="tag eo">UTS 2026</span>, flexor carpi ulnaris</td></tr>
<tr><td>Lengan bawah ventral profunda</td><td>Flexor digitorum profundus, flexor pollicis longus, pronator quadratus</td></tr>
<tr><td>Lengan bawah dorsal (extensor)</td><td>Brachioradialis, extensor carpi radialis longus & brevis, <b>abductor pollicis longus</b>, extensor pollicis brevis, extensor pollicis longus, extensor digiti minimi, extensor digitorum communis, extensor carpi ulnaris, anconeus</td></tr>
<tr><td>Thenar</td><td>Abductor pollicis brevis, opponens pollicis, flexor pollicis brevis, adductor pollicis</td></tr>
<tr><td>Hypothenar</td><td>Palmaris brevis, abductor digiti minimi, flexor digiti minimi brevis, opponens digiti minimi</td></tr>
<tr><td>Punggung tangan</td><td>Mm. interossei dorsales (+ tendo extensor)</td></tr></table>
<ul><li><b>Rotator cuff</b>: <b>s</b>upraspinatus (abduktor), <b>i</b>nfraspinatus, <b>t</b>eres minor, <b>s</b>ubscapularis (rotator). Menstabilkan caput humeri di cavitas glenoidalis. Cedera khas pada pelempar bisbol.</li>
<li><b>Tabatière anatomique</b> (anatomical snuffbox): celah di antara tendo <b>m. extensor pollicis longus</b> (ulnar) dan <b>m. extensor pollicis brevis + abductor pollicis longus</b> (radial). [TB] Dasarnya os scaphoideum, isinya a. radialis.</li>
<li>Persarafan: plexus brachialis (C5–T1). Cabang dari radix: n. dorsalis scapulae, n. subclavius, n. thoracicus longus. Dari truncus: n. suprascapularis. Fasciculus lateralis: n. pectoralis lateralis, n. musculocutaneus, cabang lateral n. medianus. Fasciculus posterior: n. subscapularis superior & inferior, n. thoracodorsalis, n. axillaris, n. radialis. Fasciculus medialis: n. pectoralis medialis, cabang medial n. medianus, n. cutaneus brachii medialis, n. cutaneus antebrachii medialis, n. ulnaris.</li>
<li>Vaskularisasi: a. subclavia → <b>a. axillaris</b> → <b>a. brachialis</b> → di fossa cubiti bercabang <b>a. radialis</b> & <b>a. ulnaris</b>. Vena mengikuti arteri.</li></ul>
<p class="warn">Slide menulis "n. subscapularis superior" dua kali. Salah satunya seharusnya <i>inferior</i>.</p>
<h3>Ekstremitas inferior</h3>
<table><tr><th>Regio</th><th>Otot</th></tr>
<tr><td>Cingulum interna</td><td>Iliacus, psoas major, psoas minor (iliacus + psoas major = <b>iliopsoas</b>)</td></tr>
<tr><td>Cingulum externa (gluteal)</td><td>Gluteus maximus, medius, minimus, piriformis, gemellus superior & inferior, obturatorius internus, quadratus femoris, tensor fasciae latae</td></tr>
<tr><td>Paha ventral</td><td>Sartorius, <b>quadriceps femoris</b> = rectus femoris, vastus lateralis, vastus medialis, vastus intermedius <span class="tag eo">UTS 2026</span></td></tr>
<tr><td>Paha medial (adduktor)</td><td>Superfisial: pectineus, adductor longus, gracilis. Profunda: adductor brevis, adductor magnus, adductor minimus</td></tr>
<tr><td>Paha dorsal (hamstring)</td><td>Semitendinosus, semimembranosus, biceps femoris</td></tr>
<tr><td>Cruris ventral</td><td>Tibialis anterior, extensor hallucis longus, extensor digitorum longus, peroneus tertius</td></tr>
<tr><td>Cruris lateral</td><td>Peroneus (fibularis) longus & brevis</td></tr>
<tr><td>Cruris dorsal</td><td>Superfisial: <b>gastrocnemius</b>, plantaris, soleus (gastrocnemius + soleus = triceps surae → tendo Achilles). Profunda: popliteus, flexor digitorum longus, flexor hallucis longus, tibialis posterior</td></tr>
<tr><td>Pedis dorsal</td><td>Extensor hallucis brevis, extensor digitorum brevis</td></tr>
<tr><td>Plantar</td><td>Medial: abductor hallucis, <b>adductor hallucis</b> (2 caput, mirip angka 7), flexor hallucis brevis. Lateral: abductor, flexor brevis & opponens digiti minimi. Tengah: flexor digitorum brevis, quadratus plantae, lumbricales. Interossei plantares 3, dorsales 4</td></tr></table>
<ul><li><b>Trigonum femorale</b>: superior = <b>lig. inguinale</b>, lateral = <b>tepi medial m. sartorius</b>, medial = <b>m. adductor longus</b> (tepi medialnya). Isi dari lateral ke medial: <b>N. femoralis, A. femoralis, V. femoralis</b> (+ v. saphena magna), sarung femoral (NAVEL).</li>
<li>Persarafan: plexus lumbosacralis (L1–S3/S4). N. femoralis (paha depan), n. obturatorius (adduktor), n. gluteus superior (gluteus medius & minimus, TFL), n. gluteus inferior (gluteus maximus), n. ischiadicus (hamstring) → n. tibialis & n. peroneus communis (→ superficialis & profundus).</li></ul>
<p class="warn">Typo di slide: "M. obturator inferior" → obturatorius <b>internus</b>/externus; "M. gamellus" → <b>gemellus</b>; "M. adductor minimi" → adductor <b>minimus</b>; "M. lumbricales dorsales" tidak ada → maksudnya mm. <b>interossei dorsales</b>.</p>`,

m7: `
<h3>Sel-sel tulang</h3>
<table><tr><th>Sel</th><th>Ciri</th><th>Fungsi</th></tr>
<tr><td>Osteoprogenitor</td><td>Sel punca di periosteum & endosteum</td><td>Menjadi osteoblas</td></tr>
<tr><td><b>Osteoblas</b></td><td>Kuboid, berderet di permukaan tulang</td><td><b>Sekresi matriks</b> (kolagen tipe I, glikoprotein, proteoglikan) yang lalu mengeras (kalsifikasi). Osteokalsin + glikoprotein mengikat Ca²⁺, alkali fosfatase menghidrolisis PO₄ → kristal hidroksiapatit</td></tr>
<tr><td><b>Osteosit</b></td><td>Di dalam <b>lakuna</b>, punya juluran sitoplasma dalam <b>kanalikuli</b></td><td><b>Mempertahankan matriks</b> yang sudah terkalsifikasi, menerima nutrisi lewat kanalikuli</td></tr>
<tr><td><b>Osteoklas</b></td><td><b>Sangat besar, motil, berinti banyak</b>, asal monosit, di lakuna Howship</td><td><b>Resorpsi tulang → remodeling</b></td></tr></table>
<ul><li><b>Periosteum</b>: lapisan luar padat (kolagen + fibroblas, <b>serat Sharpey/perforating</b>), lapisan dalam berisi sel osteoprogenitor. <b>Endosteum</b>: sangat tipis, sel osteoprogenitor & osteoblas pipih, melapisi rongga sumsum & trabekula.</li><li>Makro: tulang <b>kompakta</b> vs <b>spongiosa</b>. Tulang panjang: epifisis (spongiosa berlapis kompakta tipis), diafisis (hampir semua kompakta), metafisis. Tulang pipih: 2 lapis kompakta mengapit spongiosa (<b>diploe</b>).</li><li>Mikro: tulang <b>primer/woven</b> (imatur, serat acak) vs <b>sekunder/lamellar</b> (matur, berlapis).</li><li><b>Osteon (sistem Havers)</b>: <b>kanal Havers</b> (sentral; pembuluh darah, saraf, jaringan ikat longgar), lamela konsentris, lakuna (berisi osteosit), kanalikuli. Kanal Volkmann (perforating) menghubungkan antar kanal Havers.</li><li>Sumsum tulang (<i>bone marrow</i>) ada di rongga di antara trabekula tulang spongiosa.</li></ul>
<h3>Kartilago (avaskular, kecuali perikondrium)</h3>
<table><tr><th></th><th>Hialin</th><th>Elastis</th><th>Fibrokartilago</th></tr>
<tr><td>Kolagen</td><td>Tipe II</td><td>Tipe II + <b>serat elastin</b></td><td><b>Tipe I</b> (berkas tebal)</td></tr>
<tr><td>Perikondrium</td><td>Ada</td><td>Ada</td><td>Tidak ada [TB]</td></tr>
<tr><td>Lokasi</td><td>Permukaan sendi, hidung, laring, trakea, bronkus, ujung ventral costa, lempeng epifisis, rangka janin</td><td><b>Auricula</b>, meatus acusticus externus, tuba auditiva, <b>epiglottis</b>, kartilago cuneiformis laring</td><td><b>Discus intervertebralis</b>, <b>symphysis pubis</b></td></tr></table>
<p>Kondrosit berada dalam <b>lakuna</b> dan sering berkelompok (isogenous group). Matriks mengandung kondroitin sulfat. Perikondrium = jaringan ikat padat di tepi kartilago.</p>
<h3>Otot</h3>
<table><tr><th></th><th>Rangka (skelet)</th><th>Jantung</th><th>Polos</th></tr>
<tr><td>Bentuk sel</td><td>Panjang, silindris</td><td><b>Bercabang</b></td><td><b>Fusiform</b> (gelendong)</td></tr>
<tr><td>Inti</td><td><b>Banyak, di tepi</b></td><td>1–2, di tengah</td><td>1, di tengah</td></tr>
<tr><td>Lurik</td><td>Ya</td><td>Ya</td><td>Tidak</td></tr>
<tr><td>Khas</td><td>Potongan melintang poligonal, inti perifer</td><td><b>Diskus interkalaris</b></td><td>Lapisan sirkular dalam & longitudinal luar (usus)</td></tr>
<tr><td>Kontrol</td><td>Volunter, cepat, kuat</td><td>Involunter, ritmik</td><td>Involunter, lambat</td></tr></table>
<ul><li>Pembungkus: <b>epimysium</b> (seluruh otot) → <b>perimysium</b> (fasikel) → <b>endomysium</b> (tiap serat; kolagen tipe I & III/retikulin, lamina basal kaya laminin). <b>Sel satelit</b> = sel punca otot rangka.</li><li><b>Sarkomer</b> (Z ke Z): pita A (gelap, miosin), pita I (terang, aktin), zona H, garis M. Miofibril, sarkolema, retikulum sarkoplasma, tubulus T. <b>Myotendinous junction</b>: tempat serat otot menyambung ke tendon.</li></ul>
<p>Preparat praktikum: <b>otot rangka, otot jantung, otot polos, kartilago hialin, kartilago elastis, fibrokartilago, tulang keras (osteon)</b>.</p>`,

m8: `
<h3>Preparat saraf-otot katak puru</h3>
<ul><li>Lumpuhkan kodok: genggam, antefleksikan kepala, <b>tusuk di garis median antara tulang kepala & atlas</b> lewat foramen occipitale magnum ke medulla oblongata, lalu ke kanalis vertebralis (sumsum tulang belakang dirusak).</li><li>Telentang, kulit ditarik ke arah kaki, organ dalam dikeluarkan. Temukan <b>n. ischiadicus</b> (seperti benang putih) dan bebaskan secara tumpul: tidak boleh terjepit, tertarik, atau tergunting. Ikat tendon Achilles, potong tibia di bawah patella. <b>M. gastrocnemius tidak boleh dipotong</b>.</li><li>Sediaan = <b>tendon Achilles + m. gastrocnemius + patella + n. ischiadicus</b>. Selalu basahi dengan <b>larutan Ringer</b> agar tidak kering (kunci UTS 2026: Ringer laktat). <span class="tag eo">UTS 2026</span></li><li>Alat & bahan: kimograf, kertas asap, induktorium, stimulator, myograph board, pinset, pisau & gunting diseksi, kristal NaCl, air panas, H₂SO₄ 0,1–0,4%, larutan Ringer.</li></ul>
<h3>Jenis stimulus</h3>
<table><tr><th>Stimulus</th><th>Contoh di praktikum</th></tr><tr><td>Mekanis</td><td>Pijit, pukul, tarik, cubit, tekan dengan pinset</td></tr><tr><td>Thermis</td><td>Panas (tabung air panas) & dingin</td></tr><tr><td>Khemis</td><td>Asam, basa, <b>garam (kristal NaCl)</b></td></tr><tr><td>Elektris</td><td>Arus listrik (induktorium/stimulator)</td></tr></table>
<p><b>Elektris yang terbaik</b>, karena intensitas, frekuensi, dan durasinya bisa diatur & dikontrol. "Refleks" bukan jenis stimulus.</p>
<h3>Intensitas rangsang</h3>
<ol><li><b>Subliminal</b> (subminimal/subthreshold): belum menimbulkan respons</li><li><b>Liminal</b> (minimal/threshold): rangsang terkecil yang menimbulkan respons</li><li><b>Submaksimal</b>: antara minimal & maksimal</li><li><b>Maksimal</b>: respons maksimal</li><li><b>Supramaksimal</b>: intensitas > maksimal, tetapi respons tetap sama dengan maksimal</li></ol>
<p><b>All or none law</b> (versi dosen): berlaku untuk <b>otot jantung</b> (& polos). Pada otot rangka hanya berlaku untuk <b>satu serabut</b>, tidak untuk keseluruhan otot karena terdiri dari banyak serabut dengan ambang berbeda.</p>
<h3>Kontraksi tunggal (single twitch)</h3>
<table><tr><th>Periode</th><th>Lama</th><th>Yang terjadi</th></tr><tr><td><b>Laten</b></td><td>0,005–0,01 s</td><td>Dari rangsang sampai respons: potensial aksi ke tubulus T → cross bridge</td></tr><tr><td><b>Kontraksi</b></td><td>±0,04 s</td><td>Pemendekan sarkomer, power stroke</td></tr><tr><td><b>Relaksasi</b></td><td>±0,05 s</td><td>Ca²⁺ diserap kembali, cross bridge lepas</td></tr></table>
<h3>Sumasi, treppe, tetanus, fatigue</h3>
<ul><li>Rangsang ke-2 saat <b>periode laten</b> (refrakter absolut) → tidak ada respons tambahan.</li><li>Rangsang ke-2 saat kontraksi baru selesai → dua kontraksi tunggal berturutan. Saat <b>relaksasi</b> → <b>sumasi</b> (kontraksi tambahan lebih tinggi/sama/lebih rendah).</li><li><b>Treppe</b> (staircase): rangsang berulang dengan intensitas sama → kontraksi makin lama makin kuat, masih ada relaksasi.</li><li><b>Tetanus incomplete</b> (clonus, bergerigi): rangsang >30×/s, masih terlihat relaksasi. <b>Tetanus complete</b> (lurus): >50×/s, tidak terlihat relaksasi lagi.</li><li><b>Fatigue</b>: rangsang terus-menerus → amplitudo menurun, laten/kontraksi/relaksasi memanjang, sampai tidak kontraksi. Dicuci saline → pulih sementara. Setelah lelah lewat saraf, otot yang dirangsang langsung masih bisa kontraksi (lelah di sambungan neuromuskular).</li><li>Induktorium: rangsang saat arus ditutup (<b>make</b>) vs dibuka (<b>break</b>). [TB] <i>Break</i> lebih efektif (perubahan arus lebih cepat).</li></ul>
<h3>Mekanisme kontraksi & energi</h3>
<ul><li>Impuls → <b>asetilkolin</b> → potensial aksi sarkolema → <b>tubulus T</b> → <b>retikulum sarkoplasma</b> melepas Ca²⁺ → Ca²⁺ mengikat <b>troponin</b> → <b>tropomiosin</b> bergeser → binding site aktin terbuka → kepala miosin (ADP+Pi) melekat (<b>cross bridge</b>) → <b>power stroke</b>. ATP melepas ikatan miosin-aktin. Ca²⁺ dipompa kembali ke RS (butuh ATP). <b>Kolinesterase</b> memecah ACh → kolin + asam asetat.</li><li>3 peran ATP: energi power stroke, melepas ikatan aktin-miosin, transport aktif Ca²⁺ kembali ke RS.</li><li>Pembentukan ATP: <b>kreatin fosfat</b> (tercepat, 1 CP → 1 ATP, cepat habis), <b>glikolisis</b> (2 ATP + piruvat; tanpa O₂ → laktat → lelah/kram), <b>siklus Krebs</b> (36 ATP, butuh O₂).</li><li>Struktur: sarkomer dibatasi 2 garis Z. Filamen tipis = aktin, tropomiosin, troponin. Filamen tebal = miosin. 1 filamen tipis dikelilingi 3 tebal, 1 tebal dikelilingi 6 tipis. Cisterna terminalis = tempat simpan Ca²⁺. Triad = tubulus T + 2 cisterna terminalis.</li></ul>`
};

/* ====== SOAL KONSEP (isian singkat) ======
   k = kelompok kata kunci wajib (tiap kelompok berisi sinonim). Jika tidak ada k, dicocokkan ke a/al. */
window.KONSEP = [
{"m":"m1","q":"Sebutkan 3 lapisan meninges dari luar ke dalam.","a":"Duramater, arachnoidea mater, piamater","k":[["dura"],["arachnoid","araknoid"],["pia"]],"r":"cranial-4"},
{"m":"m1","q":"LCS mengalir di ruang meningeal yang mana?","a":"Spatium subarachnoid","al":["subarachnoid","subaraknoid","cavum subarachnoid","ruang subarachnoid"]},
{"m":"m1","q":"Lipatan duramater berbentuk bulan sabit di antara kedua hemisfer cerebri adalah …","a":"Falx cerebri","al":["falx cerebri"]},
{"m":"m1","q":"Lipatan duramater yang menjadi atap fossa cranii posterior dan menutupi permukaan atas cerebellum adalah …","a":"Tentorium cerebelli","al":["tentorium cerebelli","tentorium"]},
{"m":"m1","q":"Bagian os sphenoidale tempat duduknya hipofisis disebut …","a":"Sella turcica (fossa hypophysialis)","al":["sella turcica","fossa hypophysialis","fossa hipofisealis"]},
{"m":"m1","q":"Foramen rotundum dilewati oleh …","a":"N. maxillaris (N. V2)","al":["n maxillaris","nervus maxillaris","v2","n v2","maksilaris"]},
{"m":"m1","q":"Foramen ovale dilewati oleh …","a":"N. mandibularis (N. V3)","al":["n mandibularis","nervus mandibularis","v3","n v3","mandibularis"]},
{"m":"m1","q":"Canalis opticus (foramen opticum) dilewati oleh …","a":"N. II opticus (+ a. ophthalmica)","al":["n opticus","nervus opticus","n ii","opticus","optikus"]},
{"m":"m1","q":"Sebutkan nervus yang melewati foramen jugulare.","a":"N. IX, N. X, N. XI (+ v. jugularis interna)","k":[["ix","9","glossopharyngeus","glosofaringeus"],["x","10","vagus"],["xi","11","accessorius","aksesorius"]],"x":"Buku panduan hanya menulis IX & X. Lengkapnya IX, X, XI."},
{"m":"m1","q":"Canalis hypoglossi dilewati oleh …","a":"N. XII hypoglossus","al":["n hypoglossus","hypoglossus","hipoglosus","n xii","xii"]},
{"m":"m1","q":"Sutura di antara kedua os parietale adalah …","a":"Sutura sagittalis","al":["sagittalis","sutura sagittalis","sagital"]},
{"m":"m1","q":"Sutura di antara os parietale dan os occipitale adalah …","a":"Sutura lambdoidea","al":["lambdoidea","sutura lambdoidea","lamdoidea"]},
{"m":"m2","q":"Prosencephalon terdiri dari …","a":"Telencephalon dan diencephalon","k":[["telencephalon","telensefalon","cerebrum"],["diencephalon","diensefalon"]]},
{"m":"m2","q":"Bagian dorsal diencephalon terdiri dari …","a":"Thalamus, metathalamus, epithalamus","k":[["thalamus","talamus"],["metathalamus","metatalamus"],["epithalamus","epitalamus"]]},
{"m":"m2","q":"Colliculus superior & corpus geniculatum laterale berhubungan dengan sistem …","a":"Optik (penglihatan)","al":["optik","optic","penglihatan","visual"]},
{"m":"m2","q":"Colliculus inferior & corpus geniculatum mediale berhubungan dengan sistem …","a":"Auditoris (pendengaran)","al":["auditoris","auditori","pendengaran","auditory"]},
{"m":"m2","q":"Struktur di bidang median yang menghubungkan kedua hemisfer adalah …","a":"Corpus callosum","al":["corpus callosum","korpus kalosum"]},
{"m":"m2","q":"Sulcus yang memisahkan lobus frontalis dan lobus parietalis adalah …","a":"Sulcus centralis (Rolandi)","al":["sulcus centralis","rolandi","sentralis"]},
{"m":"m2","q":"Bagian tengah cerebellum yang menghubungkan kedua hemisfernya disebut …","a":"Vermis","al":["vermis"]},
{"m":"m2","q":"Pedunculus cerebelli superior menghubungkan cerebellum dengan …","a":"Mesencephalon","al":["mesencephalon","mesensefalon","midbrain"]},
{"m":"m2","q":"Pedunculus cerebelli medius (brachium pontis) menghubungkan cerebellum dengan …","a":"Pons","al":["pons"]},
{"m":"m2","q":"Pedunculus cerebelli inferior menghubungkan cerebellum dengan …","a":"Medulla oblongata","al":["medulla oblongata","oblongata"]},
{"m":"m2","q":"Nervus cranialis yang keluar dari sisi lateral pons (radix motoris kecil & sensoris besar) adalah …","a":"N. V trigeminus","al":["trigeminus","trigeminal","n v"]},
{"m":"m2","q":"Penghubung ventriculus III dengan ventriculus IV adalah …","a":"Aquaeductus cerebri (Sylvii)","al":["aquaeductus","aquaductus","akuaduktus","sylvii","silvii","aqueduct"]},
{"m":"m2","q":"LCS diproduksi oleh …","a":"Plexus choroideus","al":["plexus choroideus","pleksus koroid","plexus coroideus","choroid plexus"]},
{"m":"m2","q":"Kumpulan radix n. lumbales & sacrales di bawah conus medullaris disebut …","a":"Cauda equina","al":["cauda equina","kauda ekuina"]},
{"m":"m3","q":"Tes Pandy bereaksi dengan protein …","a":"Albumin dan globulin","k":[["albumin"],["globulin"]]},
{"m":"m3","q":"Hasil positif tes Pandy ditandai dengan …","a":"Kekeruhan yang jelas","al":["kekeruhan","keruh","kekeruhan jelas"]},
{"m":"m3","q":"Hasil positif tes Nonne ditandai dengan …","a":"Terbentuk cincin (putih) di perbatasan kedua lapisan","al":["cincin","terbentuk cincin","cincin putih"]},
{"m":"m3","q":"Interpretasi Nonne (+) dan Pandy (+)?","a":"Peningkatan globulin dan/atau albumin","k":[["globulin"],["albumin"]]},
{"m":"m3","q":"Interpretasi Nonne (−) dan Pandy (+)?","a":"Peningkatan albumin","al":["albumin","peningkatan albumin","albumin meningkat"]},
{"m":"m3","q":"Interpretasi Nonne (+) dan Pandy (−)?","a":"Tidak mungkin terjadi","al":["tidak mungkin","tidak mungkin terjadi","mustahil"]},
{"m":"m3","q":"Interpretasi Nonne (−) dan Pandy (−)?","a":"Normal","al":["normal"]},
{"m":"m3","q":"Nilai rujukan (normal) tes Nonne dan Pandy adalah …","a":"Negatif","al":["negatif","negative","(-)","-"]},
{"m":"m4","q":"Sel yang membentuk mielin di SSP adalah …","a":"Oligodendrosit","al":["oligodendrosit","oligodendrocyte","oligodendroglia"]},
{"m":"m4","q":"Sel glia yang melapisi ventrikel otak dan kanal sentral medula spinalis adalah …","a":"Sel ependim","al":["ependim","ependimal","sel ependim","ependymal"]},
{"m":"m4","q":"Sel glia yang menyokong neuron dan membentuk sawar darah otak adalah …","a":"Astrosit","al":["astrosit","astrocyte"]},
{"m":"m4","q":"Lapisan korteks cerebri paling luar (di bawah piamater) adalah …","a":"Lamina molecularis (plexiform)","al":["molecularis","molekularis","lamina molekularis","plexiform","pleksiform"]},
{"m":"m4","q":"Lapisan cerebellum yang berisi satu deret sel besar berbentuk piriform adalah …","a":"Lamina ganglionaris (lapisan sel Purkinje)","al":["ganglionaris","lamina ganglionaris","purkinje","sel purkinje"]},
{"m":"m4","q":"Lapisan cerebellum yang berisi banyak sel granul kecil (tampak gelap padat) adalah …","a":"Lamina granularis","al":["granularis","lamina granularis","granular"]},
{"m":"m4","q":"Gambaran cerebellum secara makroskopis yang seperti pohon disebut …","a":"Arbor vitae","al":["arbor vitae","arbovitae","arbor vita"]},
{"m":"m4","q":"Kornu medula spinalis yang lebih tebal dan berisi badan sel motoris adalah …","a":"Kornu anterior (ventralis)","al":["kornu anterior","cornu anterior","anterior","ventralis","kornu ventral"]},
{"m":"m4","q":"Saluran di bagian tengah substansia grisea medula spinalis disebut …","a":"Kanal ependim (kanal sentralis)","al":["kanal ependim","kanal sentral","canalis centralis","central canal","kanal sentralis"]},
{"m":"m4","q":"Epidural hematoma biasanya akibat robekan …","a":"A. meningea media","al":["a meningea media","arteri meningea media","meningea media"]},
{"m":"m4","q":"Subdural hematoma biasanya akibat robekan …","a":"Bridging veins","al":["bridging vein","bridging veins","vena penghubung"]},
{"m":"m4","q":"Gambaran mikroskopis khas meningitis bakterial adalah …","a":"Akumulasi banyak neutrofil di ruang subarachnoid","k":[["neutrofil","neutrophil","pmn"]]},
{"m":"m5","q":"Vertebra cervicalis I disebut juga … dan apa ciri khasnya?","a":"Atlas: berbentuk cincin, tanpa corpus dan tanpa processus spinosus","k":[["atlas"]]},
{"m":"m5","q":"Vertebra prominens adalah vertebra … dengan ciri …","a":"C7: processus spinosus panjang dan tidak bercabang dua","k":[["c7","vii","7"]],"x":"Slide menulis C2 = os prominens. Itu salah."},
{"m":"m5","q":"Ciri khas vertebra cervicalis yang tidak dimiliki vertebra lain adalah …","a":"Foramen transversarium (dan proc. spinosus bercabang dua)","al":["foramen transversarium","foramen transversum","foramen transversus"]},
{"m":"m5","q":"Ciri khas vertebra thoracalis adalah …","a":"Fovea costalis (corpus berbentuk jantung, proc. spinosus panjang ke bawah)","al":["fovea costalis","fovea kostalis"]},
{"m":"m5","q":"Sebutkan 3 bagian os sternum.","a":"Manubrium sterni, corpus sterni, processus xiphoideus","k":[["manubrium"],["corpus"],["xiphoid","xipoid","xifoid"]]},
{"m":"m5","q":"Struktur pada scapula yang memisahkan fossa supraspinata dan fossa infraspinata adalah …","a":"Spina scapulae","al":["spina scapulae","spina scapula","spina"]},
{"m":"m5","q":"Leher humerus tepat di bawah tuberculum yang sering patah disebut …","a":"Collum chirurgicum","al":["collum chirurgicum","collum chirurgicum humeri","surgical neck","kolum kirurgikum"]},
{"m":"m5","q":"Bagian distal humerus yang bersendi dengan ulna adalah … dan dengan radius adalah …","a":"Trochlea humeri (ulna) dan capitulum humeri (radius)","k":[["trochlea","troklea"],["capitulum","kapitulum"]]},
{"m":"m5","q":"Olecranon merupakan bagian dari tulang …","a":"Ulna (extremitas proximalis)","al":["ulna","os ulna"]},
{"m":"m5","q":"Patella termasuk jenis tulang …","a":"Tulang sesamoid","al":["sesamoid","sesamoid bone"]},
{"m":"m5","q":"Tonjolan di distal tibia sebelah medial disebut … dan di distal fibula …","a":"Malleolus medialis (tibia) dan malleolus lateralis (fibula)","k":[["malleolus medialis","maleolus medialis"],["malleolus lateralis","maleolus lateralis"]]},
{"m":"m5","q":"Art. humeri termasuk sendi bentuk … dengan … aksis.","a":"Spheroidea/globoidea (sendi peluru), triaksial","k":[["spheroid","globoid","peluru"],["tri","3"]]},
{"m":"m6","q":"Otot rotator cuff yang berfungsi sebagai abduktor lengan atas adalah …","a":"M. supraspinatus","al":["supraspinatus","m supraspinatus"]},
{"m":"m6","q":"Otot yang membentuk bulatan bahu (lateral bahu) dan sering jadi tempat injeksi IM adalah …","a":"M. deltoideus","al":["deltoideus","deltoid","m deltoideus"]},
{"m":"m6","q":"Sebutkan otot-otot ventral lengan atas.","a":"M. biceps brachii, coracobrachialis, brachialis","k":[["biceps","bicep"],["coracobrachialis","korakobrakialis"],["brachialis","brakialis"]]},
{"m":"m6","q":"Sebutkan 3 otot gluteus.","a":"M. gluteus maximus, medius, minimus","k":[["maximus"],["medius"],["minimus"]]},
{"m":"m6","q":"Sebutkan otot-otot dorsal paha (hamstring).","a":"M. semitendinosus, semimembranosus, biceps femoris","k":[["semitendinosus"],["semimembranosus"],["biceps femoris"]]},
{"m":"m6","q":"Otot dorsal superfisial tungkai bawah adalah …","a":"M. gastrocnemius, plantaris, soleus","k":[["gastrocnemius"],["plantaris"],["soleus"]]},
{"m":"m6","q":"N. gluteus inferior mempersarafi otot …","a":"M. gluteus maximus","al":["gluteus maximus","gluteus maksimus"]},
{"m":"m6","q":"Otot gabungan gastrocnemius + soleus disebut … dan berinsersi melalui …","a":"M. triceps surae, melalui tendo Achilles (calcaneus)","k":[["triceps surae","trisep sure","triceps sure"],["achilles","akiles","calcaneus"]]},
{"m":"m7","q":"Apa fungsi osteoblas?","a":"Menyekresi matriks tulang (kolagen I, glikoprotein, proteoglikan) yang kemudian mengalami kalsifikasi","k":[["sekresi","mensekresi","menyekresi","membentuk","secrete"],["matriks","matrix"]]},
{"m":"m7","q":"Apa fungsi osteosit?","a":"Mempertahankan matriks tulang yang sudah terkalsifikasi","k":[["mempertahankan","memelihara","maintain"],["matriks","matrix"]]},
{"m":"m7","q":"Ruang kecil di matriks tulang tempat osteosit berada disebut …","a":"Lakuna","al":["lakuna","lacuna","lacunae"]},
{"m":"m7","q":"Saluran halus tempat juluran sitoplasma osteosit dan jalur difusi nutrisi disebut …","a":"Kanalikuli","al":["kanalikuli","canaliculi","kanalikulus"]},
{"m":"m7","q":"Saluran yang menghubungkan antar kanal Havers, berjalan tegak lurus, disebut …","a":"Kanal Volkmann (perforating)","al":["volkmann","kanal volkmann","perforating"]},
{"m":"m7","q":"Kompleks lamela konsentris yang mengelilingi kanal sentral disebut …","a":"Osteon (sistem Havers)","al":["osteon","sistem havers","haversian system"]},
{"m":"m7","q":"Kartilago yang mengandung kolagen tipe II saja dan ditemukan di trakea, laring, permukaan sendi adalah …","a":"Kartilago hialin","al":["hialin","hyaline","kartilago hialin"]},
{"m":"m7","q":"Kartilago yang mengandung serat elastin dan ditemukan di daun telinga & epiglotis adalah …","a":"Kartilago elastis","al":["elastis","elastic","kartilago elastis"]},
{"m":"m7","q":"Kartilago dengan kolagen tipe I yang ditemukan di discus intervertebralis & symphysis pubis adalah …","a":"Fibrokartilago","al":["fibrokartilago","fibrocartilage","kartilago fibrosa"]},
{"m":"m7","q":"Struktur khas yang hanya dijumpai pada otot jantung adalah …","a":"Diskus interkalaris","al":["diskus interkalaris","discus intercalaris","intercalated disc","diskus interkalaris"]},
{"m":"m7","q":"Ciri inti sel otot rangka adalah …","a":"Banyak (multinukleus) dan terletak di tepi (perifer)","k":[["banyak","multi"],["tepi","perifer","pinggir"]]},
{"m":"m7","q":"Bentuk sel otot polos adalah …","a":"Fusiform (gelendong), inti satu di tengah, tanpa garis melintang","al":["fusiform","gelendong","spindle"]},
{"m":"m8","q":"Saraf yang dipakai pada preparat saraf-otot kodok adalah …","a":"N. ischiadicus","al":["ischiadicus","iskiadikus","ischiadikus","sciatic","n ischiadicus"]},
{"m":"m8","q":"Larutan yang diteteskan agar preparat saraf-otot tidak kering adalah …","a":"Larutan Ringer","al":["ringer","larutan ringer"]},
{"m":"m8","q":"Rangsang terkecil yang tepat mampu menimbulkan respons disebut …","a":"Rangsang liminal (minimal/threshold/ambang)","al":["liminal","minimal","threshold","ambang"]},
{"m":"m8","q":"Rangsang yang intensitasnya lebih besar dari maksimal tetapi responsnya sama dengan maksimal disebut …","a":"Supramaksimal","al":["supramaksimal","supra maksimal","supramaximal"]},
{"m":"m8","q":"Sebutkan 3 fase satu kali kontraksi otot (single twitch).","a":"Fase laten, fase kontraksi, fase relaksasi","k":[["laten","latent"],["kontraksi"],["relaksasi","relaxasi"]]},
{"m":"m8","q":"Rangsang ke-2 yang diberikan pada periode relaksasi menghasilkan peristiwa …","a":"Sumasi (penjumlahan kontraksi)","al":["sumasi","summasi","summation","penjumlahan"]},
{"m":"m8","q":"Rangsang berulang dengan intensitas sama yang membuat kuat kontraksi meningkat bertahap (masih ada relaksasi) disebut …","a":"Treppe (staircase phenomenon)","al":["treppe","staircase","tangga","jenjang"]},
{"m":"m8","q":"Rangsang ke-2 dan seterusnya (>30×) yang masih memperlihatkan periode relaksasi disebut …","a":"Tetanus incomplete (clonus)","al":["tetanus incomplete","tetanus inkomplit","clonus","klonus","tetani bergerigi"]},
{"m":"m8","q":"Apa yang terjadi pada kurva saat otot mengalami fatigue?","a":"Tinggi kontraksi menurun; masa laten, kontraksi, dan relaksasi memanjang, sampai tidak berkontraksi","k":[["menurun","turun","rendah","memanjang","lama"]]},
{"m":"m8","q":"Alat untuk mencatat aktivitas fisiologik otot pada praktikum adalah …","a":"Kimograf (kymograph)","al":["kimograf","kymograph","kymograf"]}
];

/* ====== SOAL TAHUN LALU ====== */
window.PAST = [
// UTS 2025 (ingatan kakak tingkat, isian)
{set:'UTS 2025',no:1,m:'m2',img:'past/d25-1.jpg',q:'Sebutkan struktur yang ditunjuk a dan b (potongan sagital kepala).',a:'a = Pons, b = Cerebellum',k:[['pons'],['cerebellum','serebelum']]},
{set:'UTS 2025',no:2,m:'m2',q:'Apa 3 percabangan nervus trigeminus (N. V)?',a:'N. ophthalmicus, n. maxillaris, n. mandibularis',k:[['ophthalmicus','oftalmikus','opthalmicus','ophtalmicus'],['maxillaris','maksilaris'],['mandibularis']]},
{set:'UTS 2025',no:3,m:'m1',q:'Foramen yang dilalui oleh N. vestibulocochlearis?',a:'Meatus (porus) acusticus internus',al:['meatus acusticus internus','porus acusticus internus','meatus acousticus internus','meatus akustikus internus']},
{set:'UTS 2025',no:4,m:'m2',img:'past/d25-2.jpg',q:'Nervus yang keluar dari daerah yang dilingkari (batang otak)?',a:'N. IV trochlearis (lingkaran atas, dorsal mesencephalon) dan N. XII hypoglossus (lingkaran bawah, medulla oblongata)',k:[['trochlear','troklear','troclear','iv'],['hypoglossus','hipoglosus','xii']]},
{set:'UTS 2025',no:5,m:'m2',q:'Truncus encephalicus (brain stem) terdiri dari?',a:'Mesencephalon, pons, medulla oblongata',k:[['mesencephalon','mesensefalon'],['pons'],['oblongata']]},
{set:'UTS 2025',no:6,m:'m7',img:'past/d25-3.jpg',q:'Perhatikan gambaran histologi berikut. Bagian apakah yang ditunjuk tanda panah?',a:'Sel kondrosit (kartilago hialin)',al:['kondrosit','sel kondrosit','chondrocyte']},
{set:'UTS 2025',no:7,m:'m7',img:'past/d25-4.jpg',q:'Perhatikan gambaran histologi berikut. Bagian apakah yang ditunjuk tanda panah?',a:'Kanal Havers (haversian canal)',al:['kanal havers','haversian canal','havers','canalis havers']},
{set:'UTS 2025',no:8,m:'m4',img:'past/d25-5.jpg',q:'Apa yang ditunjuk pada garis (bracket) di gambar neuron?',a:'Axon',al:['axon','akson']},
{set:'UTS 2025',no:9,m:'m4',q:'Tumor yang paling sering pada anak-anak adalah?',a:'Medulloblastoma',al:['medulloblastoma','medullablostoma','meduloblastoma'],x:'Menurut slide PA, astrositoma & medulloblastoma sama-sama tersering pada anak. Tulis jawaban sesuai kunci tahun lalu.'},
{set:'UTS 2025',no:10,m:'m4',img:'past/d25-6.jpg',q:'Gambar di atas merupakan penyakit apa?',a:'Meningioma',al:['meningioma','mengioma'],x:'Massa padat di permukaan otak (parasagital), menekan jaringan otak tanpa menginfiltrasi.'},
{set:'UTS 2025',no:11,m:'m3',img:'past/d25-7.jpg',q:'Terbentuk cincin antara dua lapisan pada tabung no. 2, 3, 4, 5. Interpretasi hasil pemeriksaan ini?',a:'Tes Nonne positif: peningkatan globulin dalam LCS (tabung 1 negatif/normal)',k:[['positif','+'],['globulin']]},
{set:'UTS 2025',no:12,m:'m3',q:'Memberikan reaksi terhadap protein globulin dalam bentuk kekeruhan berbentuk cincin merupakan tes?',a:'Tes Nonne',al:['nonne','tes nonne','test nonne']},
{set:'UTS 2025',no:13,m:'m3',q:'Tes Nonne bertujuan mendeteksi protein?',a:'Globulin',al:['globulin']},
{set:'UTS 2025',no:14,m:'m8',q:'Sediaan yang digunakan untuk melakukan stimulasi pada rangsang saraf dan otot adalah?',a:'Musculus gastrocnemius',al:['gastrocnemius','gastrocnemeus','m gastrocnemius']},
{set:'UTS 2025',no:15,m:'m8',q:'Fase sebelum kontraksi?',a:'Fase laten',al:['laten','fase laten','periode laten']},
{set:'UTS 2025',no:16,m:'m8',q:'Perangsangan otot thermis menggunakan apa?',a:'Air panas (hangat) dan dingin',al:['air panas','air hangat','panas dan dingin','air hangat dan dingin']},
{set:'UTS 2025',no:17,m:'m6',img:'past/d25-8.jpg',q:'Apa nama otot yang diberi warna hijau?',a:'M. abductor pollicis longus',al:['abductor pollicis longus','m abductor pollicis longus']},
{set:'UTS 2025',no:18,m:'m5',img:'past/d25-9.jpg',q:'Apa nama struktur anatomi yang ditunjuk tanda panah?',a:'Kunci ingatan: "olecranon"',al:['olecranon','olekranon','fossa olecrani','capitulum humeri','epicondylus lateralis'],x:'Hati-hati. Tulang di gambar adalah humerus, sedangkan olecranon milik ulna. Kemungkinan maksud soalnya fossa olecrani (dilihat dari belakang) atau ujung distal humerus. Hafalkan semua bagian distal humerus: trochlea, capitulum, epicondylus medialis & lateralis, fossa olecrani, fossa coronoidea.'},
{set:'UTS 2025',no:19,m:'m5',img:'past/d25-10.jpg',q:'Apa nama struktur yang dilingkari (vertebra cervicalis I)?',a:'Foramen transversarium (pada processus transversus atlas)',al:['foramen transversarium','foramen transversum','foramen transversus','transverse foramen']},
{set:'UTS 2025',no:20,m:'m7',img:'past/d25-11.jpg',q:'Apa nama jaringan histologi yang di sebelah kanan?',a:'Sumsum tulang (bone marrow)',al:['bone marrow','sumsum tulang','sumsum']},
{set:'UTS 2025',no:21,m:'m6',img:'past/d25-12.jpg',q:'Apa nama otot yang diberi warna merah?',a:'M. deltoideus',al:['deltoideus','deltoid','m deltoideus']},
{set:'UTS 2025',no:22,m:'m1',q:'Lamina cribrosa os ethmoidale dilewati nervus?',a:'N. olfactorius (N. I)',al:['olfactorius','olfaktorius','n olfactorius','olfactory']},
// UTS 21 (pilihan ganda → dijadikan isian)
{set:'UTS 21',no:1,m:'m7',img:'past/u21-1.jpg',q:'Gambaran histologi salah satu sel pada tulang. Apakah fungsi sel tersebut (tanda panah)?',a:'Remodelling (resorpsi) tulang: sel ini osteoklas (besar, berinti banyak)',k:[['remodel','resorpsi','menghancurkan','penghancur']]},
{set:'UTS 21',no:2,m:'m2',q:'Yang termasuk organ sistem saraf pusat adalah?',a:'Encephalon dan medulla spinalis',k:[['encephalon','ensephalon','otak'],['spinalis']]},
{set:'UTS 21',no:3,m:'m4',img:'past/u21-3.jpg',q:'Gambaran mikroskopis medula spinalis. Bagian apakah yang ditunjuk angka 1?',a:'Kanal sentralis (kanal ependim)',al:['kanal sentralis','kanal sentral','kanal ependim','central canal','canalis centralis']},
{set:'UTS 21',no:4,m:'m2',q:'Manakah yang termasuk midbrain: epithalamus, medulla oblongata, medulla spinalis, pedunculus cerebri, telencephalon?',a:'Pedunculus cerebri',al:['pedunculus cerebri','pedunkulus serebri','crus cerebri']},
{set:'UTS 21',no:5,m:'m6',q:'Tabatière anatomique adalah suatu celah yang terletak di antara?',a:'M. extensor pollicis longus dan m. extensor pollicis brevis',k:[['pollicis longus'],['pollicis brevis']]},
{set:'UTS 21',no:6,m:'m1',q:'Tulang pembentuk cranium yang tidak berpasangan, tempat glandula hypophysis?',a:'Os sphenoidale',al:['sphenoid','os sphenoidale','os sphenoidalis']},
{set:'UTS 21',no:7,m:'m1',q:'Foramen di fossa cranii media yang dilewati a. meningea media?',a:'Foramen spinosum',al:['foramen spinosum','spinosum']},
{set:'UTS 21',no:8,m:'m4',img:'past/u21-8.jpg',q:'Gambaran mikroskopis cerebellum. Bagian apakah yang ditunjuk angka 2?',a:'Lamina granularis',al:['granularis','lamina granularis','granular'],x:'Angka 1 = lamina molekularis (pucat, luar). Angka 2 = lapisan padat gelap = granularis. Angka 3 = substansia alba.'},
{set:'UTS 21',no:9,m:'m1',q:'Lapisan kulit kepala yang terdiri dari jaringan ikat yang menyatukan otot-otot di kepala?',a:'Aponeurosis (galea aponeurotica)',al:['aponeurosis','galea aponeurotica','apeunorosis']},
{set:'UTS 21',no:10,m:'m4',img:'past/u21-10.jpg',q:'Gambaran skematis sel pada susunan saraf tepi. Sel apakah yang menyusun selubung mielin?',a:'Sel Schwann',al:['schwann','sel schwann','neurolemmocyte']},
{set:'UTS 21',no:11,m:'m7',img:'past/u21-11.jpg',q:'Perhatikan gambaran histologi jaringan berikut. Bagian apakah yang ditunjuk tanda panah?',a:'Sel kondrosit',al:['kondrosit','sel kondrosit','chondrocyte']},
{set:'UTS 21',no:12,m:'m7',img:'past/u21-12.jpg',q:'Perhatikan gambaran histologi jaringan berikut. Jaringan apakah yang tampak?',a:'Otot skelet (rangka), potongan melintang',al:['otot skelet','otot rangka','skeletal','otot lurik','skelet']},
{set:'UTS 21',no:13,m:'m8',q:'All or none law berlaku pada otot?',a:'Otot jantung',al:['jantung','otot jantung']},
{set:'UTS 21',no:14,m:'m8',q:'Pada praktikum, jenis stimulus khemis adalah?',a:'Garam (NaCl)',al:['garam','nacl']},
{set:'UTS 21',no:15,m:'m5',q:'Tuberculum scaleni merupakan penonjolan yang dijumpai pada tulang?',a:'Costa I',al:['costa i','costa 1','costa pertama']},
{set:'UTS 21',no:16,m:'m4',img:'past/u21-16.jpg',q:'Gambaran mikroskopis cerebellum. Bagian apakah yang ditunjuk angka 1?',a:'Lamina molekularis',al:['molekularis','molecularis','lamina molekularis']},
{set:'UTS 21',no:17,m:'m6',q:'Apa nama celah di antara M. pollicis longus dan pollicis brevis?',a:'Tabatière (anatomique)',al:['tabatiere','tabatière','tabatiere anatomique','anatomical snuffbox','snuffbox']},
{set:'UTS 21',no:18,m:'m8',q:'Jenis stimulus terbaik adalah?',a:'Elektris',al:['elektris','listrik','electric']},
{set:'UTS 21',no:19,m:'m7',img:'past/u21-19.jpg',q:'Perhatikan gambaran histologi berikut. Bagian apakah yang ditunjuk tanda panah?',a:'Kanal Havers',al:['kanal havers','havers','haversian canal']},
{set:'UTS 21',no:20,m:'m5',q:'Dens epistrophei dijumpai pada os?',a:'Vertebra cervicalis II (axis)',al:['c2','cervical ii','cervicalis ii','axis','cervical 2']},
{set:'UTS 21',no:21,m:'m2',q:'Bagian ventral diencephalon terdiri dari?',a:'Hypothalamus dan subthalamus',k:[['hypothalamus','hipotalamus'],['subthalamus','subtalamus']]},
{set:'UTS 21',no:22,m:'m8',q:'Sediaan yang digunakan untuk stimulasi rangsang saraf dan otot adalah?',a:'M. gastrocnemius',al:['gastrocnemius','gastrocnemeus']},
{set:'UTS 21',no:23,m:'m8',q:'Bagian sediaan kodok untuk percobaan rangsang saraf-otot, KECUALI: patella, n. ischiadicus, m. gastrocnemius, tendon Achilles, m. gluteus?',a:'M. gluteus',al:['gluteus','m gluteus']},
{set:'UTS 21',no:24,m:'m1',q:'Sutura yang membatasi kedua os parietale dengan os frontale adalah?',a:'Sutura coronalis',al:['coronalis','sutura coronalis']},
{set:'UTS 21',no:25,m:'m8',q:'Perangsangan ke-2 dan seterusnya lebih dari 50× dan tidak terlihat lagi periode relaksasi merupakan?',a:'Tetanus complete',al:['tetanus complete','tetanus komplit','tetanus sempurna']},
{set:'UTS 21',no:26,m:'m6',q:'Trigonum femorale dibentuk oleh?',a:'Lig. inguinale, tepi medial m. sartorius, tepi medial m. adductor longus',k:[['inguinal'],['sartorius'],['adductor longus']]},
{set:'UTS 21',no:27,m:'m6',q:'Otot di bagian ventral telapak kaki yang berbentuk angka 7 disebut?',a:'M. adductor (hallucis)',al:['adductor','adductor hallucis']},
{set:'UTS 21',no:28,m:'m4',img:'past/u21-28.jpg',q:'Gambaran mikroskopis medula spinalis. Bagian apakah yang ditunjuk angka 2?',a:'Kornu anterior grisea',al:['kornu anterior','cornu anterior','kornu anterior grisea'],x:'Gambar buram. Angka 2 ada di substansia grisea ke arah fissura mediana anterior, jadi kornu anterior yang tebal. Pastikan kamu bisa membedakan kornu anterior (tebal) dan posterior (runcing).'},
{set:'UTS 21',no:29,m:'m7',img:'past/u21-29.jpg',q:'Perhatikan gambaran histologi berikut. Bagian apakah yang ditunjuk tanda panah (tepi kartilago)?',a:'Perikondrium',al:['perikondrium','perichondrium']},
{set:'UTS 21',no:30,m:'m2',q:'Lobus cerebrum yang berada di tengah dan dikelilingi lobus lain?',a:'Lobus insula',al:['insula','lobus insula']},
{set:'UTS 21',no:31,m:'m4',img:'past/u21-31.jpg',q:'Gambaran histologi substansia SSP. Apakah isi substansia alba?',a:'Axon',al:['axon','akson']},
{set:'UTS 21',no:32,m:'m8',q:'Sediaan kodok untuk mengamati kontraksi pada otot adalah?',a:'M. gastrocnemius',al:['gastrocnemius','gastrocnemeus']},
{set:'UTS 21',no:33,m:'m7',img:'past/u21-33.jpg',q:'Perhatikan gambaran histologi jaringan berikut. Jaringan apakah yang tampak?',a:'Otot jantung (serabut bercabang)',al:['otot jantung','jantung','cardiac'],x:'Gambar buram. Serabut bercabang dan saling beranastomosis mengarah ke otot jantung. Bandingkan dengan soal no. 12 (otot rangka, potongan melintang poligonal).'},
{set:'UTS 21',no:34,m:'m2',q:'Kedua hemispherium cerebri dexter dan sinister dipisahkan oleh?',a:'Fissura longitudinalis cerebri (kunci PG: corpus callosum)',al:['fissura longitudinalis','corpus callosum','fissura longitudinalis cerebri'],x:'Secara anatomi pemisahnya fissura longitudinalis, sedangkan corpus callosum menghubungkan. Di pilihan ganda hanya corpus callosum yang tersedia.'},
{set:'UTS 21',no:35,m:'m2',q:'Sulcus yang berada di lateral bawah hemisfer cerebri?',a:'Sulcus Sylvii (lateralis)',al:['sylvii','silvii','sulcus lateralis','sulcus silvii']},
{set:'UTS 21',no:36,m:'m8',q:'Yang BUKAN jenis stimulus otot: thermis, refleks, mekanis, elektris, khemis?',a:'Refleks',al:['refleks','reflex']},
{set:'UTS 21',no:37,m:'m5',q:'Pada tulang apakah cavitas glenoidalis dijumpai?',a:'Os scapula',al:['scapula','skapula']},
{set:'UTS 21',no:38,m:'m1',q:'Pada tulang apakah protuberantia occipitalis externa dijumpai?',a:'Os occipitale (tampak pada basis cranii externa)',al:['occipital','os occipitale','basis cranii','oksipital']},
{set:'UTS 21',no:39,m:'m6',q:'Trigonum femorale dilalui oleh?',a:'Arteri, vena, dan nervus femoralis',k:[['femoralis']]},
{set:'UTS 21',no:40,m:'m1',q:'Lamina cribrosa os ethmoidale yang dilewati N. olfactorius berada dalam fossa?',a:'Fossa cranii anterior',al:['anterior','fossa cranii anterior']}
];

/* ====== Soal gambar "apa ini?" dari slide (teks slide disembunyikan) ====== */
window.IMGQ_SPEC = [
// m7 histologi muskuloskeletal
['histomusculo',5,'m7','Sel apa yang ditunjuk huruf OB dan O?','OB = osteoblas, O = osteosit',[['osteoblas','osteoblast'],['osteosit','osteocyte']]],
['histomusculo',7,'m7','Sel apa yang tampak di dalam lakuna dengan juluran sitoplasma?','Osteosit',null,['osteosit','osteocyte']],
['histomusculo',8,'m7','Sel besar, motil, berinti banyak ini adalah …','Osteoklas',null,['osteoklas','osteoclast']],
['histomusculo',9,'m7','Lapisan yang ditandai P dan E adalah …','P = periosteum, E = endosteum',[['periosteum','periostium'],['endosteum','endostium']]],
['histomusculo',11,'m7','Dua jenis tulang secara mikroskopis (kiri & kanan) ini adalah …','Kiri: tulang primer (woven bone). Kanan: tulang sekunder (lamellar bone)',[['woven','primer','imatur'],['lamel','sekunder','matur']]],
['histomusculo',12,'m7','Struktur bulat dengan lamela konsentris ini disebut …','Osteon (sistem Havers)',null,['osteon','sistem havers','haversian']],
['histomusculo',14,'m7','Jaringan apa yang tampak?','Kartilago hialin',null,['hialin','hyaline','kartilago hialin']],
['histomusculo',15,'m7','Jaringan apa yang tampak (serat gelap di matriks)?','Kartilago elastis',null,['elastis','elastic','kartilago elastis']],
['histomusculo',16,'m7','Jaringan apa yang tampak (kondrosit berderet di antara berkas kolagen)?','Fibrokartilago',null,['fibrokartilago','fibrocartilage','kartilago fibrosa']],
['histomusculo',20,'m7','Jaringan apa yang tampak (potongan melintang, inti di tepi)?','Otot rangka (skelet)',null,['otot rangka','skeletal','otot skelet','otot lurik']],
['histomusculo',22,'m7','Struktur tempat serat otot rangka menyambung dengan tendon disebut …','Myotendinous junction',null,['myotendinous','miotendinous','myotendinous junction']],
['histomusculo',26,'m7','Jaringan apa ini? Apa yang ditunjuk huruf I?','Otot jantung; I = diskus interkalaris',[['jantung','cardiac'],['interkalaris','intercalar','intercalated']]],
['histomusculo',27,'m7','Jaringan apa yang tampak?','Otot polos (sirkular dalam & longitudinal luar)',null,['otot polos','polos','smooth']],
['histomusculo',24,'m7','Diagram ini menunjukkan unit fungsional otot rangka. Namanya?','Sarkomer',null,['sarkomer','sarcomere']],
// m4 histologi saraf
['histosaraf',4,'m4','Sel apa yang tampak?','Neuron (sel saraf)',null,['neuron','sel saraf','motor neuron']],
['histosaraf',9,'m4','Sel glia SST yang ditunjuk adalah …','Sel Schwann',null,['schwann','sel schwann']],
['histosaraf',14,'m4','Preparat organ apa ini?','Cerebrum (substansia grisea berlapis & alba)',null,['cerebrum','serebrum','otak besar']],
['histosaraf',16,'m4','Preparat apa yang tampak?','Korteks cerebri (cerebral cortex)',null,['korteks cerebri','cerebral cortex','cerebrum','korteks serebri']],
['histosaraf',19,'m4','Preparat organ apa ini?','Cerebellum',null,['cerebellum','serebelum','otak kecil']],
['histosaraf',20,'m4','Preparat organ apa ini?','Cerebellum (lapisan molekular & granular)',null,['cerebellum','serebelum']],
['histosaraf',22,'m4','Sel besar yang berderet di antara lapisan molekular dan granular ini adalah …','Sel Purkinje (lamina ganglionaris)',null,['purkinje','sel purkinje','ganglionaris']],
['histosaraf',26,'m4','Preparat organ apa ini?','Medula spinalis',null,['medula spinalis','medulla spinalis','spinal cord']],
['histosaraf',28,'m4','Preparat organ apa ini?','Medula spinalis',null,['medula spinalis','medulla spinalis','spinal cord']],
['histosaraf',31,'m4','Struktur apa yang tampak (berkas akson dengan pembungkus jaringan ikat)?','Saraf tepi (nerve): epineurium, perineurium, endoneurium',null,['saraf tepi','nerve','saraf perifer','nervus']],
// m4 histopatologi
['histopato',5,'m4','Kelainan apa yang tampak (kumpulan darah di ruang subdural akibat robekan bridging veins)?','Subdural hematoma',null,['subdural','subdural hematoma','hematoma subdural']],
['histopato',7,'m4','Lesi berkapsul dengan pusat cair ini adalah …','Abses serebri',null,['abses','abses serebri','abses otak','abscess']],
['histopato',10,'m4','Eksudat krem di leptomeninges dan neutrofil di ruang subarachnoid menandakan …','Meningitis bakterial (purulen)',null,['meningitis','meningitis bakterial','meningitis purulen']],
['histopato',16,'m4','Sel datia berinti banyak (panah) + nodul mikroglia khas pada …','Ensefalitis HIV',null,['hiv','ensefalitis hiv','hiv encephalitis']],
['histopato',22,'m4','Massa nekrotik-hemoragik dengan pseudopalisade & proliferasi endotel adalah …','Glioblastoma multiforme',null,['glioblastoma','gbm','glioblastoma multiforme']],
['histopato',23,'m4','Tumor anak di dekat ventrikel IV ini adalah …','Ependimoma',null,['ependimoma','ependymoma']],
['histopato',24,'m4','Tumor yang menempel di permukaan otak (gambar makro & mikro) ini adalah …','Meningioma',null,['meningioma']],
['histopato',26,'m4','Tumor cerebellum pada anak ini adalah …','Medulloblastoma',null,['medulloblastoma','meduloblastoma']],
['histopato',27,'m4','Tumor multipel di otak (paling sering secara keseluruhan) ini adalah …','Tumor metastasis',null,['metastasis','metastase','tumor metastasis']],
// m5 tulang
['osteo',14,'m5','Vertebra apa ini?','Vertebra cervicalis I (atlas)',null,['atlas','c1','cervicalis i','cervical i']],
['osteo',15,'m5','Vertebra apa ini?','Vertebra cervicalis II (axis/epistropheus)',null,['axis','c2','cervicalis ii','epistropheus']],
['osteo',16,'m5','Vertebra apa ini?','Vertebra thoracalis',null,['thoracalis','thoracal','torakal','thoracic']],
['osteo',17,'m5','Vertebra apa ini?','Vertebra lumbalis',null,['lumbalis','lumbal','lumbar']],
['osteo',18,'m5','Tulang apa ini (tampak anterior)?','Os sacrum (+ os coccygis)',null,['sacrum','sakrum','os sacrum']],
['osteo',21,'m5','Tulang apa ini?','Os sternum',null,['sternum','os sternum']],
['osteo',23,'m5','Tulang apa ini (ada tuberculum scaleni)?','Costa I',null,['costa i','costa 1','costa pertama']],
['osteo',28,'m5','Tulang apa ini?','Os scapula',null,['scapula','skapula']],
['osteo',30,'m5','Tulang apa ini?','Os clavicula',null,['clavicula','klavikula']],
['osteo',36,'m5','Tulang apa ini?','Os radius',null,['radius','os radius']],
['osteo',38,'m5','Kelompok tulang apa ini?','Ossa carpalia',null,['carpal','carpalia','ossa carpalia','karpal']],
['osteo',50,'m5','Tulang apa ini?','Os patella',null,['patella']],
['osteo',53,'m5','Dua tulang apa ini (tampak anterior)?','Os tibia (medial) & os fibula (lateral)',[['tibia'],['fibula']]],
['osteo',55,'m5','Kelompok tulang apa ini?','Ossa pedis (tarsal, metatarsal, phalanges)',null,['pedis','tarsal','ossa pedis','kaki']],
// m1 cranium
['cranial',8,'m1','Tulang apa ini (tampak depan)?','Os cranium (tengkorak), tampak anterior',null,['cranium','kranium','tengkorak']],
['cranial',14,'m1','Bagian cranium apa ini (tampak atas)?','Calvaria',null,['calvaria','kalvaria']],
['cranial',36,'m1','Tulang apa ini?','Mandibula',null,['mandibula','mandible']],
// m8 fisiologi
['fisio',10,'m8','Alat pencatat aktivitas otot pada praktikum ini adalah …','Kimograf (kymograph)',null,['kimograf','kymograph']],
['fisio',19,'m8','Gambar ini membandingkan 3 jenis otot. Sebutkan urut kiri → kanan.','Otot rangka, otot jantung, otot polos',[['rangka','skelet','skeletal'],['jantung','cardiac'],['polos','smooth']]],
// m3 nonne pandy
['nonne',12,'m3','Tabung kiri dan kanan menunjukkan hasil tes Pandy. Mana yang positif?','Kanan: keruh = Pandy positif (kiri jernih = negatif)',null,['kanan','keruh']],
['nonne',16,'m3','Tabung 2–5 menunjukkan cincin di perbatasan lapisan. Tes apa & interpretasinya?','Tes Nonne positif: peningkatan globulin',[['nonne'],['globulin','positif']]]
];

/* Slide dengan legenda nomor bawaan: [deck, slide, materi, legenda (nomor→nama), judul] */
window.LEGEND_SPEC = [
['cranial',3,'m1',{1:'Skin',2:'Galea aponeurotica',3:'Periosteum (pericranium)',4:'Calvaria',5:'Foveola granularis',6:'Granulatio arachnoidea',7:'V. emissaria',8:'V. diploica',9:'V. temporalis superficialis',10:'Duramater',11:'Arachnoid',12:'Spatium subarachnoid',13:'Piamater',14:'A. cerebri',15:'Hemispherium cerebri',16:'Arachnoid–dura interface (spatium subdural)',17:'Epidural hematoma',18:'V. cerebri superior',19:'Falx cerebri',20:'Sinus sagittalis superior'},'Lapisan pembungkus otak (nomor pada gambar)'],
['myo',11,'m6',{1:'M. brachioradialis',2:'M. extensor carpi radialis longus',3:'M. extensor carpi radialis brevis',4:'M. abductor pollicis longus',5:'M. extensor pollicis brevis',6:'M. extensor pollicis longus',7:'M. extensor digiti minimi',8:'M. extensor digiti V proprius',9:'M. extensor digitorum communis',10:'M. extensor carpi ulnaris',11:'M. anconeus',12:'M. triceps brachii'},'Otot extensor lengan bawah (nomor pada gambar)']
];

/* ====== FOTO PREPARAT (dari Jory; kunci sesuai nama file) ====== */
window.PREP = [
{f:'p1',n:'Fibrokartilago',a:'Fibrokartilago',al:['fibrokartilago','fibrocartilage','kartilago fibrosa'],x:'Kondrosit berderet di antara berkas kolagen tipe I yang tebal dan bergelombang. Tidak ada perikondrium.'},
{f:'p2',n:'Kartilago elastis (perbesaran lemah)',a:'Kartilago elastis',al:['kartilago elastis','elastis','elastic cartilage'],x:'Lempeng kartilago di bawah epitel dan jaringan ikat (contohnya epiglotis). Kondrosit di dalam lakuna dan matriks berisi serat elastin.'},
{f:'p3',n:'Kartilago elastis',a:'Kartilago elastis',al:['kartilago elastis','elastis','elastic cartilage'],x:'Kondrosit di dalam lakuna, sering berpasangan atau berkelompok. Matriks tampak berserabut karena serat elastin, berbeda dari hialin yang homogen.'},
{f:'p4',n:'Kartilago hialin',a:'Kartilago hialin',al:['kartilago hialin','hialin','hyaline'],x:'Matriks homogen dan pucat (kolagen tipe II), kondrosit di dalam lakuna dan berkelompok (isogenous group), dibungkus perikondrium. Di atasnya ada mukosa berkelenjar (contohnya trakea).'},
{f:'p5',n:'Otot jantung',a:'Otot jantung',al:['otot jantung','jantung','cardiac','miokardium'],x:'Serabut bercabang, inti 1–2 di tengah, lurik, dan ada diskus interkalaris.'},
{f:'p6',n:'Otot lurik (potongan memanjang)',a:'Otot lurik / otot rangka',al:['otot lurik','otot rangka','otot skelet','skeletal','lurik'],x:'Serat panjang silindris dengan garis melintang, inti banyak di tepi serat.'},
{f:'p7',n:'Otot rangka (potongan melintang)',a:'Otot rangka (potongan melintang)',al:['otot rangka','otot lurik','otot skelet','skeletal'],x:'Serat poligonal dengan inti di tepi (perifer). Di antara serat ada endomysium.'},
{f:'p8',n:'Tulang (sediaan gosok, memanjang)',a:'Tulang kompakta (sediaan gosok)',al:['tulang kompakta','tulang','compact bone','tulang keras','osteon'],x:'Potongan memanjang: kanal Havers berjalan memanjang, dihubungkan kanal Volkmann yang melintang, dikelilingi lamela.'},
{f:'p9',n:'Tulang kompakta & spongiosa',a:'Tulang kompakta dan tulang spongiosa',k:[['kompakta','compact','padat'],['spongiosa','spongy','kanselosa','trabekula']],x:'Satu sisi tulang kompakta (lamela/osteon). Sisi lain spongiosa: trabekula tulang dengan sumsum tulang di antaranya.'},
{f:'p10',n:'Tulang dan bone marrow',a:'Tulang dan sumsum tulang (bone marrow)',k:[['tulang','bone','osteon','trabekula'],['sumsum','marrow']],x:'Tulang berupa matriks merah muda dengan osteosit di dalam lakuna. Sumsum tulang berisi sel hematopoietik yang padat dan sel lemak yang tampak sebagai bulatan kosong.'},
{f:'p11',n:'Tulang dan bone marrow',a:'Tulang dan sumsum tulang (bone marrow)',k:[['tulang','bone','osteon','trabekula'],['sumsum','marrow']],x:'Kiri: tulang dengan lakuna, kanal vaskular, dan endosteum. Kanan: sumsum tulang (sel hematopoietik + adiposit). Mirip soal UTS 2025 no. 20.'},
{f:'p12',n:'Tulang (sediaan gosok)',a:'Tulang kompakta (sediaan gosok)',al:['tulang kompakta','tulang','compact bone','osteon','tulang keras'],x:'Sediaan gosok tanpa pewarnaan: kanal tampak sebagai garis gelap. Lakuna dan kanalikuli tampak sebagai titik dan garis halus.'},
{f:'p13',n:'Anus: otot lurik',a:'Otot lurik (m. sphincter ani externus) regio anus',al:['otot lurik','otot rangka','sphincter ani externus','sfingter ani eksterna','anus'],x:'Kulit (epitel berlapis gepeng) di atas, berkas otot lurik di bawahnya (m. sphincter ani externus).'},
{f:'p14',n:'Kartilago hialin & elastis',a:'Kartilago hialin dan kartilago elastis',k:[['hialin','hyaline'],['elastis','elastic']],x:'Dua jenis kartilago dalam satu potongan (contohnya laring/epiglotis). Hialin homogen pucat, elastis berserabut gelap.'},
{f:'p15',n:'Otot jantung',a:'Otot jantung',al:['otot jantung','jantung','cardiac','miokardium'],x:'Serabut bercabang dan saling beranastomosis, inti di tengah, lurik halus.'},
{f:'p16',n:'Otot lurik',a:'Otot lurik / otot rangka',al:['otot lurik','otot rangka','otot skelet','skeletal','lurik'],x:'Serat otot rangka potongan memanjang hingga miring: serat besar, inti di tepi, jaringan ikat di antaranya.'},
{f:'p17',n:'Otot polos',a:'Otot polos',al:['otot polos','polos','smooth'],x:'Sel fusiform (gelendong), inti satu di tengah, tanpa garis melintang.'},
{f:'p18',n:'Otot rangka (potongan melintang)',a:'Otot rangka (potongan melintang)',al:['otot rangka','otot lurik','otot skelet','skeletal'],x:'Banyak fasikel dipisahkan perimysium. Tiap serat poligonal dengan inti di tepi.'},
{f:'p19',n:'Rectoanal junction',a:'Rectoanal junction',al:['rectoanal junction','anorectal junction','rektoanal','peralihan rektum anus','anorektal'],x:'Peralihan epitel rektum (selapis silindris dengan kripta) ke anus (berlapis gepeng), dengan lapisan otot di bawahnya.'},
{f:'p20',n:'Tulang (sediaan gosok, melintang)',a:'Tulang kompakta: osteon (sistem Havers)',al:['osteon','sistem havers','tulang kompakta','tulang','haversian'],x:'Potongan melintang: kanal Havers gelap di tengah, lamela konsentris, lakuna berisi osteosit, dan kanalikuli yang memancar.'}
];

/* ====== Gambar per subbab ringkasan (slide praktikum, slide kuliah dr. Wan, foto preparat) ====== */
window.WANCAP = {
 'wan/neuro-6':'Kuliah Neuroanatomi (dr. Wan) · lapisan scalp', 'wan/neuro-86':'Kuliah Neuroanatomi · sinus duramatris', 'wan/neuro-88':'Kuliah Neuroanatomi · arachnoid mater & granulatio', 'wan/neuro-89':'Kuliah Neuroanatomi · perdarahan epidural, subdural, subarachnoid',
 'wan/neuro-90':'Kuliah Neuroanatomi · CT scan perdarahan intrakranial', 'wan/neuro-91':'Kuliah Neuroanatomi · cisterna', 'wan/neuro-93':'Kuliah Neuroanatomi · sistem ventrikel & hidrosefalus',
 'wan/neuro-100':'Kuliah Neuroanatomi · plexus brachialis & lumbosacralis', 'wan/neuro-101':'Kuliah Neuroanatomi · plexus brachialis', 'wan/neuro-102':'Kuliah Neuroanatomi · plexus lumbalis', 'wan/neuro-125':'Kuliah Neuroanatomi · circulus Willisi & arteri otak',
 'wan/musc-19':'Kuliah Muskuloskeletal (dr. Wan) · os sternum', 'wan/musc-20':'Kuliah Muskuloskeletal · costa & thoracic cage', 'wan/musc-30':'Kuliah Muskuloskeletal · ossa manus', 'wan/musc-74':'Kuliah Muskuloskeletal · rotator cuff', 'wan/musc-96':'Kuliah Muskuloskeletal · trigonum femorale & paha', 'wan/musc-97':'Kuliah Muskuloskeletal · daerah gluteal'
};
window.SECIMG = {
 m1: [
  ['Lapisan kulit kepala', ['cranial-2','cranial-3','cranial-6','wan/neuro-6']],
  ['Meninges', ['cranial-5','wan/neuro-86','wan/neuro-88','wan/neuro-89']],
  ['Ossa cranii', ['cranial-7','cranial-8','cranial-9','cranial-11','cranial-12','cranial-13']],
  ['Sutura', ['cranial-14','osteo-58']],
  ['Fossa cranii', ['cranial-15','cranial-16','cranial-17','cranial-18','cranial-19','cranial-20','cranial-21','cranial-25','cranial-26']],
  ['Mandibula', ['cranial-36','cranial-39']],
  ['Rongga cranium', ['cranial-22','cranial-23','cranial-24','cranial-49','cranial-61','cranial-63']],
  ['Vaskularisasi', ['wan/neuro-125']]
 ],
 m2: [
  ['Pembagian SSP', ['saraf2-2','saraf2-4']],
  ['Cerebrum', ['saraf2-5','saraf2-6']],
  ['Diencephalon', ['saraf2-7','saraf2-8','saraf2-9']],
  ['Batang otak', ['saraf2-11','saraf2-12','saraf2-14','saraf2-15','saraf2-16','saraf2-17','saraf2-18','saraf2-21','saraf2-22']],
  ['Cerebellum', ['saraf2-10']],
  ['Ventrikel', ['saraf2-19','saraf2-20','saraf2-28','saraf2-29','saraf2-30','wan/neuro-91','wan/neuro-93']],
  ['Ganglia basalis', ['saraf2-32','saraf2-33','saraf2-34']],
  ['Sistem limbik', ['saraf2-36']],
  ['Medulla spinalis', ['saraf2-25','saraf2-26','saraf2-27','saraf2-37','saraf2-38','saraf2-39','saraf2-40','saraf2-41','saraf2-42','saraf2-43','saraf2-44','wan/neuro-100','wan/neuro-101','wan/neuro-102']]
 ],
 m4: [
  ['Neuron', ['histosaraf-3','histosaraf-4','histosaraf-5','histosaraf-6']],
  ['Sel glia', ['histosaraf-7','histosaraf-8','histosaraf-9','histosaraf-10']],
  ['Cerebrum: 6', ['histosaraf-14','histosaraf-15','histosaraf-16']],
  ['Cerebellum: 3', ['histosaraf-19','histosaraf-20','histosaraf-21','histosaraf-22']],
  ['Medula spinalis', ['histosaraf-26','histosaraf-27','histosaraf-28','histosaraf-29']],
  ['Saraf tepi', ['histosaraf-31']],
  ['Histopatologi: trauma', ['histopato-2','histopato-3','histopato-4','histopato-5','wan/neuro-89','wan/neuro-90']],
  ['Histopatologi: infeksi', ['histopato-7','histopato-8','histopato-9','histopato-10','histopato-11','histopato-12','histopato-13','histopato-14','histopato-15','histopato-16']],
  ['Histopatologi: tumor', ['histopato-18','histopato-19','histopato-20','histopato-21','histopato-22','histopato-23','histopato-24','histopato-25','histopato-26','histopato-27']]
 ],
 m5: [
  ['Penggolongan tulang', ['osteo-3','osteo-8']],
  ['Vertebra', ['osteo-10','osteo-11','osteo-14','osteo-15','osteo-16','osteo-17','osteo-18','osteo-19']],
  ['Sternum', ['osteo-21','osteo-23','osteo-24','wan/musc-19','wan/musc-20']],
  ['Ekstremitas superior', ['osteo-26','osteo-28','osteo-30','osteo-32','osteo-33','osteo-34','osteo-36','osteo-38','osteo-39','osteo-40','osteo-41','wan/musc-30']],
  ['Ekstremitas inferior', ['osteo-43','osteo-45','osteo-46','osteo-48','osteo-50','osteo-53','osteo-54','osteo-55']],
  ['Arthrologi', ['osteo-58','osteo-59','osteo-61','osteo-62','osteo-63','osteo-66','osteo-67','osteo-68','osteo-69','osteo-70','osteo-71','osteo-72']]
 ],
 m6: [
  ['Prinsip', ['myo-3']],
  ['Ekstremitas superior', ['myo-6','myo-7','myo-8','myo-9','myo-11','myo-13','myo-14','myo-16','myo-19','myo-21','wan/musc-74']],
  ['Ekstremitas inferior', ['myo-23','myo-24','myo-26','myo-27','myo-28','myo-30','myo-31','myo-32','myo-34','myo-35','myo-36','myo-39','myo-40','myo-41','myo-42','wan/musc-96','wan/musc-97']]
 ],
 m7: [
  ['Sel-sel tulang', ['histomusculo-4','histomusculo-5','histomusculo-6','histomusculo-7','histomusculo-8','histomusculo-9','histomusculo-10','histomusculo-11','histomusculo-12','prep/p8','prep/p9','prep/p10','prep/p20']],
  ['Kartilago', ['histomusculo-13','histomusculo-14','histomusculo-15','histomusculo-16','prep/p1','prep/p3','prep/p4','prep/p14']],
  ['Otot', ['histomusculo-17','histomusculo-18','histomusculo-19','histomusculo-20','histomusculo-21','histomusculo-22','histomusculo-23','histomusculo-24','histomusculo-25','histomusculo-26','histomusculo-27','histomusculo-28','prep/p5','prep/p7','prep/p17']]
 ]
};

/* ====== UTS 2026 (Prak '23): soal ujian praktikum angkatan 2023, kunci dari file "UTS Practical Test '23" ====== */
window.PAST = window.PAST.concat([
{set:"UTS 2026 (Prak '23)",no:1,m:'m1',img:'past/u26-1.jpg',q:'a. Sebutkan bagian yang ditunjuk tanda panah (lingkaran) pada gambar! b. Sebutkan nervus yang melewati bagian tersebut!',a:'a. Foramen ovale; b. N. mandibularis (N. V3)',k:[['ovale'],['mandibularis','v3']]},
{set:"UTS 2026 (Prak '23)",no:2,m:'m1',img:'past/u26-2.jpg',q:'a. Sebutkan bagian yang ditunjuk tanda panah! b. Bagian tersebut memisahkan tulang apa saja?',a:'a. Sutura coronalis; b. Os frontale dan os parietale',k:[['coronalis','coronal'],['frontale','frontal'],['parietale','parietal']],x:'Mirip UTS 21 no. 24.'},
{set:"UTS 2026 (Prak '23)",no:3,m:'m2',img:'past/u26-3.jpg',q:'Sebutkan saraf yang ditunjuk tanda panah (lingkaran)!',a:'N. maxillaris (N. V2)',al:['n maxillaris','maxillaris','maksilaris','v2','n v2','maxillary nerve']},
{set:"UTS 2026 (Prak '23)",no:4,m:'m2',img:'past/u26-4.jpg',q:'Apakah yang ditunjuk tanda panah (lingkaran)?',a:'Brain stem (batang otak / truncus encephali)',al:['brain stem','brainstem','batang otak','truncus encephali','truncus encephalicus']},
{set:"UTS 2026 (Prak '23)",no:5,m:'m2',img:'past/u26-5.jpg',q:'Sebutkan bagian yang ditunjuk tanda panah! a. Kotak b. Lingkaran',a:'a. Cerebellum; b. Medulla spinalis',k:[['cerebellum','serebelum'],['spinalis','spinal cord']]},
{set:"UTS 2026 (Prak '23)",no:6,m:'m2',q:'CSF dihasilkan plexus choroideus di ventrikel lateral, mengalir lewat foramen interventriculare (Monro) ke ventrikel III, lalu ke ventrikel IV, kemudian keluar ke spatium subarachnoideum. Saluran CSF dari ventrikel III ke ventrikel IV melalui foramen apa?',a:'Aquaeductus cerebri (Sylvii)',al:['aquaeductus cerebri','aqueductus cerebri','aquaductus','akuaduktus','sylvii','sylvius'],x:'Aquaeductus sebenarnya saluran, bukan foramen. Tetap tulis aquaeductus cerebri (Sylvii).'},
{set:"UTS 2026 (Prak '23)",no:7,m:'m3',img:'past/u26-7.jpg',q:'Gambar di samping adalah hasil pemeriksaan cairan serebrospinal (CSF) secara kimia kualitatif. Sebutkan nama tes tersebut!',a:'Tes Pandy',al:['pandy','tes pandy','test pandy']},
{set:"UTS 2026 (Prak '23)",no:8,m:'m3',q:'Seorang pasien menjalani pemeriksaan CSF secara kimia kualitatif dan hasilnya menunjukkan kadar albumin dan globulin meningkat. Pemeriksaan apakah yang dilakukan?',a:'Tes Pandy',al:['pandy','tes pandy','test pandy'],x:'Pandy mendeteksi albumin + globulin, sedangkan Nonne hanya globulin.'},
{set:"UTS 2026 (Prak '23)",no:9,m:'m3',q:'Pada pemeriksaan CSF, setelah reagen ditambahkan tampak kekeruhan pada tabung reaksi no. 2, 3, 4, dan 5. Tes apakah yang dilakukan?',a:'Tes Pandy (kunci file)',al:['pandy','tes pandy','test pandy'],x:'Catatan: gambar 5 tabung di slide dosen ada di bagian Nonne (positif = cincin), dan UTS 2025 no. 11 menyebut "cincin" sehingga jawabannya Nonne. Patokannya: soal menyebut "kekeruhan" saja → Pandy, menyebut "cincin" di antara dua lapisan → Nonne.'},
{set:"UTS 2026 (Prak '23)",no:10,m:'m3',q:'Apakah tujuan dilakukannya tes Pandy?',a:'Memeriksa (mendeteksi) kadar albumin dan globulin dalam CSF',k:[['albumin'],['globulin']]},
{set:"UTS 2026 (Prak '23)",no:11,m:'m4',img:'past/u26-11.jpg',q:'Sel apakah yang membentuk selubung mielin pada saraf tepi?',a:'Sel Schwann',al:['schwann','sel schwann','neurolemmocyte','neurolemosit'],x:'Sama dengan UTS 21 no. 10.'},
{set:"UTS 2026 (Prak '23)",no:12,m:'m4',q:'Anak laki-laki 7 tahun: sakit kepala makin berat, muntah (terutama pagi hari), sulit berjalan (gangguan keseimbangan). Histopatologi massa di fossa posterior: sel-sel kecil, bulat, biru (small round blue cell). Apakah diagnosisnya?',a:'Medulloblastoma',al:['medulloblastoma','meduloblastoma','medulablastoma'],x:'Petunjuknya: anak + fossa posterior (cerebellum) + small round blue cell. Mirip UTS 2025 no. 9.'},
{set:"UTS 2026 (Prak '23)",no:13,m:'m7',img:'past/u26-13.jpg',q:'Sebutkan bagian yang berada di dalam lingkaran pada gambar histologi tulang!',a:'Kanalis Volkmann (Volkmann canals)',al:['volkmann','kanal volkmann','kanalis volkmann','volkmann canal','perforating canal']},
{set:"UTS 2026 (Prak '23)",no:14,m:'m7',img:'past/u26-14.jpg',q:'Histologi jaringan: sebutkan bagian yang ditunjuk tanda panah!',a:'Perikondrium',al:['perikondrium','perichondrium'],x:'Mirip UTS 21 no. 29.'},
{set:"UTS 2026 (Prak '23)",no:15,m:'m4',img:'past/u26-15.jpg',q:'Gambar di samping adalah gambaran histopatologi meningioma. Sebutkan struktur bulat yang ditunjuk tanda panah!',a:'Psammoma body (badan psammoma)',al:['psammoma','psammoma body','badan psammoma','psamoma'],x:'Badan psammoma adalah struktur bulat berlapis konsentris yang mengalami kalsifikasi, khas meningioma (bersama pola whorl).'},
{set:"UTS 2026 (Prak '23)",no:16,m:'m7',img:'past/u26-16.jpg',q:'Jaringan apakah yang tampak pada gambar histologi di samping?',a:'Fibrokartilago',al:['fibrokartilago','fibrocartilage','kartilago fibrosa']},
{set:"UTS 2026 (Prak '23)",no:17,m:'m5',img:'past/u26-17.jpg',q:'a. Cavum apakah yang tampak pada gambar? b. Sebutkan tulang apa saja yang membentuk cavum tersebut!',a:'a. Cavum pelvis; b. Os coxae (ilium, ischium, pubis), os sacrum, dan os coccygis',k:[['pelvis','panggul'],['coxae','ilium'],['sacrum'],['coccy','koksigis','coccyx']]},
{set:"UTS 2026 (Prak '23)",no:18,m:'m5',img:'past/u26-18.jpg',q:'a. Sebutkan nama tulang pada gambar! b. Sebutkan bagian yang ditunjuk tanda panah!',a:'a. Vertebra thoracalis; b. Processus spinosus',k:[['thoracalis','thoracal','torakal','thoracic'],['spinosus','spinous']]},
{set:"UTS 2026 (Prak '23)",no:19,m:'m5',q:'Tulang apakah yang membentuk rangka aksial posterior tubuh (batang tubuh)?',a:'Columna vertebralis',al:['columna vertebralis','kolumna vertebralis','vertebra','tulang belakang','vertebral column']},
{set:"UTS 2026 (Prak '23)",no:20,m:'m8',q:'Alat apakah yang digunakan untuk mencatat kontraksi otot pada percobaan dengan rangsangan listrik?',a:'Kimograf (kymograph)',al:['kimograf','kymograph','kymograf']},
{set:"UTS 2026 (Prak '23)",no:21,m:'m8',q:'Larutan apakah yang diteteskan pada katak saat pembedahan katak?',a:'Ringer laktat (larutan Ringer)',al:['ringer laktat','ringer','larutan ringer','ringer lactate'],x:'Slide dosen menulis "larutan Ringer", kunci file menulis "Ringer laktat". Keduanya diterima.'},
{set:"UTS 2026 (Prak '23)",no:22,m:'m6',img:'past/u26-22.jpg',q:'Sebutkan nama otot yang berwarna hijau pada gambar!',a:'M. flexor digitorum superficialis',al:['flexor digitorum superficialis','m flexor digitorum superficialis','fds']},
{set:"UTS 2026 (Prak '23)",no:23,m:'m6',q:'Sebutkan otot-otot penyusun M. quadriceps femoris!',a:'M. rectus femoris, M. vastus lateralis, M. vastus medialis, M. vastus intermedius',k:[['rectus femoris'],['vastus lateralis'],['vastus medialis'],['vastus intermedius']]},
{set:"UTS 2026 (Prak '23)",no:24,m:'m5',img:'past/u26-24.jpg',q:'Tulang apakah yang berwarna hijau pada gambar?',a:'Os calcaneus',al:['calcaneus','os calcaneus','kalkaneus','tulang tumit']},
{set:"UTS 2026 (Prak '23)",no:25,m:'m6',q:'Otot apakah yang membentuk angka 7 pada telapak kaki bagian ventral?',a:'M. adductor hallucis',al:['adductor hallucis','m adductor hallucis','adductor'],x:'Sama dengan UTS 21 no. 27.'}
]);
