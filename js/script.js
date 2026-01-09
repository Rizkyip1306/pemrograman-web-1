const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const meetingContent = document.getElementById("meetingContent");
const pageTitle = document.getElementById("pageTitle");

const materiDatabase = {
    1: {
        title: "Pengenalan Web",
        fullText: `<h3>World Wide Web</h3><p>WWW adalah kumpulan web diseluruh dunia yang memberikan layanan informasi melalui halaman web .</p><h3>Client-Server</h3><p>Server menyimpan data, sementara Client (browser) meminta dokumen tersebut.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE",
        pdfUrl: "assets/pdf/TPL0293_01_PENGENALAN WEB.pdf"
    },
    2: {
        title: "Basic Tag HTML",
        fullText: `<h3>Struktur Dasar</h3><p>HTML menggunakan tag berpasangan &lt;..&gt; dan diakhiri &lt;/..&gt; .</p><h3>Format Dokumen</h3><p>Penggunaan Heading (h1-h6), Paragraf (p), dan tag dasar lainnya.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
        pdfUrl: "assets/pdf/TPL0293_02_BASIC TAG HTML.pdf"
    },
    3: {
        title: "Format Teks & Karakter Khusus",
        fullText: `<h3>Formatting</h3><p>Penggunaan tag b, i, u, strong, em, small, big, serta subscript (sub) dan superscript (sup) .</p><h3>Karakter Khusus</h3><p>Penggunaan simbol khusus yang didefinisikan dalam modul.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=pAnV-A9y_V0",
        pdfUrl: "assets/pdf/TPL0293_03_FORMAT TEKS DAN KARAKTER KHUSUS.pdf"
    },
    4: {
        title: "Gambar, Suara, dan Video",
        fullText: `<h3>Multimedia</h3><p>Menampilkan gambar dengan tag img, peta gambar (map), serta video HTML5 menggunakan tag video.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=L9p99vE6-Rk",
        pdfUrl: "assets/pdf/TPL0293_04_MENAMPILKAN GAMBAR, SUARA DAN VIDEO.pdf"
    },
    5: {
        title: "Hyperlink",
        fullText: `<h3>Jenis Link</h3><p>Terdiri dari Link Relative, Link Absolute, Link Anchor (halaman sama), dan Link Email.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=M-vN06_6_w0",
        pdfUrl: "assets/pdf/TPL0293_05_HYPERLINK.pdf"
    },
    6: {
        title: "Bullet Numbering & List",
        fullText: `<h3>List HTML</h3><p>Ordered List (ol) untuk penomoran, Unordered List (ul) untuk simbol bullet, dan Definition List (dl).</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=0pLidLIDv9Y",
        pdfUrl: "assets/pdf/TPL0293_06_BULLET NUMBERING DAN LIST.pdf"
    },
    7: {
        title: "Tabel",
        fullText: `<h3>Struktur Tabel</h3><p>Membuat tabel menggunakan tag table, tr, th, dan td serta atribut colspan dan rowspan.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=Yp69GclY3YI",
        pdfUrl: "assets/pdf/TPL0293_07_TABEL.pdf"
    },
    8: {
        title: "Formulir (FORM)",
        fullText: `<h3>Elemen Form</h3><p>Mendapatkan umpan balik atau biodata melalui input text, radio button, checkbox, dan select.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=680XjU5YvIs",
        pdfUrl: "assets/pdf/TPL0293_08_FORM.pdf"
    },
    9: {
        title: "Frame",
        fullText: `<h3>Frameset</h3><p>Mengatur tata letak layar menjadi beberapa bagian menggunakan baris (rows) dan kolom (cols).</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=w9yY1Y1YF00",
        pdfUrl: "assets/pdf/TPL0293_09_FRAME.pdf"
    },
    10: {
        title: "IFRAME",
        fullText: `<h3>Inline Frames</h3><p>Berfungsi untuk meng-embed dokumen lain atau konten dari web lain ke dalam halaman aktif.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=S01Pz184mE4",
        pdfUrl: "assets/pdf/TPL0293_10_IFRAME.pdf"
    },
    11: {
        title: "Cascading Style Sheet (CSS)",
        fullText: `<h3>Struktur CSS</h3><p>Terdiri dari selector, property, dan value untuk mengatur tampilan web secara konsisten.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=CleFcke3p2w",
        pdfUrl: "assets/pdf/TPL0293_11_CACADING STYLE SHEET (CSS).pdf"
    },
    12: {
        title: "Class dalam CSS",
        fullText: `<h3>Atribut Class</h3><p>Memungkinkan variasi bermacam-macam style dari suatu elemen dengan penamaan sendiri.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=nPhVp7UfSfc",
        pdfUrl: "assets/pdf/TPL0293_12_CLAS DALAM CASCADING STYLE SHEET.pdf"
    },
    13: {
        title: "Division (DIV)",
        fullText: `<h3>Tag DIV</h3><p>Digunakan untuk mengelompokkan elemen HTML menjadi bagian Header, Footer, Content, dan Sidebar.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=mD07vN-mN2A",
        pdfUrl: "assets/pdf/TPL0293_13_DIVISION (DIV).pdf"
    },
    14: {
        title: "Pengenalan JavaScript",
        fullText: `<h3>Client-Side Scripting</h3><p>Instruksi yang diproses langsung oleh browser untuk interaktivitas dokumen HTML.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=RUTV_5m4VeI",
        pdfUrl: "assets/pdf/TPL0293_14_PENGENALAN JAVA SCRIPT.pdf"
    },
    15: {
        title: "Dialog Box",
        fullText: `<h3>Popup Box</h3><p>Penggunaan Alert, Prompt, dan Confirm untuk berinteraksi dengan pengguna.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=2v-pW_L90u8",
        pdfUrl: "assets/pdf/TPL0293_15_DIALOG BOX.pdf"
    },
    16: {
        title: "Tipe Data dan Operator",
        fullText: `<h3>Tipe Data Implisit</h3><p>Mengenal tipe Numerik, String, Boolean, dan Null serta operator aritmatika.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=mY25L_hS47U",
        pdfUrl: "assets/pdf/TPL0293_16_TIPE DATA DAN OPERATOR.pdf"
    },
    17: {
        title: "Struktur Kendali & Looping",
        fullText: `<h3>Control Flow</h3><p>Penggunaan perintah IF untuk percabangan dan perulangan menggunakan For, While, atau Do-While.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=OunH6Hn8X3U",
        pdfUrl: "assets/pdf/TPL0293_17_STRUKTUR KENDALI DAN LOOPING.pdf"
    },
    18: {
        title: "Function dan Array",
        fullText: `<h3>Koleksi Data</h3><p>Menggunakan Function untuk instruksi berulang dan Array untuk menampung banyak nilai.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=nmwM_6_3nS4",
        pdfUrl: "assets/pdf/TPL0293_18_FUNCTION DAN ARRAY.pdf"
    },
    19: {
        title: "DOM Manipulation",
        fullText: `<h3>Manipulasi HTML</h3><p>Teknik JavaScript untuk mengambil dan mengubah elemen HTML secara dinamis.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=37Xf8E-Y_9o",
        pdfUrl: "#"
    },
    20: {
        title: "Web Dinamis Dasar",
        fullText: `<h3>Backend Concept</h3><p>Konsep integrasi frontend dengan server lokal menggunakan lingkungan pengembangan.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=S8L6n0-Qy8c",
        pdfUrl: "#"
    },
    21: {
        title: "Review & Proyek Akhir",
        fullText: `<h3>Evaluasi Materi</h3><p>Persiapan pembuatan proyek website mandiri menggunakan seluruh materi yang dipelajari.</p>`,
        youtubeUrl: "https://www.youtube.com/watch?v=6YtN5E5U2pU",
        pdfUrl: "#"
    }
};
// Memuat data dari localStorage saat aplikasi pertama kali dijalankan
const savedTracker = localStorage.getItem('meetingTracker');
let meetingTracker = savedTracker ? JSON.parse(savedTracker) : {}; 

function generateSidebar() {
    const nav = document.getElementById("sidebarNav");
    nav.innerHTML = "";
    for (let i = 1; i <= 21; i++) {
        const a = document.createElement("a");
        a.href = "#";
        a.id = `nav-item-${i}`;
        a.innerText = `Pertemuan ${i}`;
        
        // Tambahkan class 'completed' jika data sudah ada di tracker
        if (meetingTracker[i] && meetingTracker[i].textOpened && meetingTracker[i].videoOpened) {
            a.classList.add('completed');
        }
        
        a.onclick = (e) => { e.preventDefault(); loadMeeting(i); };
        nav.appendChild(a);
    }
}

function loadMeeting(num) {
    const data = materiDatabase[num] || { title: `Pertemuan ${num}`, fullText: "Materi Belum Tersedia", youtubeUrl: "#", pdfUrl: "#" };
    
    if (!meetingTracker[num]) meetingTracker[num] = { textOpened: false, videoOpened: false };
    
    pageTitle.innerText = `Pertemuan ${num} : ${data.title}`;

    const textBadgeClass = (meetingTracker[num].textOpened) ? "show" : "";
    const videoBadgeClass = (meetingTracker[num].videoOpened) ? "show" : "";

    meetingContent.innerHTML = `
    <div class="card">
      <div class="dropdown-item">
        <div id="badge-text-${num}" class="item-badge ${textBadgeClass}">✓</div>
        <div class="dropdown-header" onclick="markAsOpened(${num}, 'text'); toggleDrop('materiDrop')">
          <span>📖 Materi </span>
        </div>
        <div id="materiDrop" class="dropdown-body">
          <div class="materi-full">${data.fullText}</div>
          <div class="pdf-download-container">
            <span class="pdf-icon">📄</span>
            <a href="${data.pdfUrl}" target="_blank" class="pdf-link"> Buka PDF </a>
          </div>
        </div>
      </div>
      <div class="dropdown-item">
        <div id="badge-video-${num}" class="item-badge ${videoBadgeClass}">✓</div>
        <div class="dropdown-header" onclick="toggleDrop('videoDrop')">
          <span>🎬 Video Pembelajaran</span>
        </div>
        <div id="videoDrop" class="dropdown-body">
          <div class="pdf-download-container" style="background: #fff1f2;">
            <span class="pdf-icon">▶️</span>
            <a href="${data.youtubeUrl}" target="_blank" class="pdf-link" style="color: #e11d48;" onclick="markAsOpened(${num}, 'video')">
              Tonton Video
            </a>
          </div>
        </div>
      </div>
      <div class="nav-controls">
        ${num > 1 ? `<button class="done btn-back" onclick="loadMeeting(${num - 1})">← Kembali</button>` : '<div></div>'}
        ${num < 21 ? `<button class="done" onclick="loadMeeting(${num + 1})">Selanjutnya →</button>` : '<div></div>'}
      </div>
    </div>
    `;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function markAsOpened(num, type) {
    if (type === 'text') {
        meetingTracker[num].textOpened = true;
        const badge = document.getElementById(`badge-text-${num}`);
        if(badge) badge.classList.add('show');
    }
    if (type === 'video') {
        meetingTracker[num].videoOpened = true;
        const badge = document.getElementById(`badge-video-${num}`);
        if(badge) badge.classList.add('show');
    }

    // Simpan ke localStorage setiap ada perubahan
    localStorage.setItem('meetingTracker', JSON.stringify(meetingTracker));

    if (meetingTracker[num].textOpened && meetingTracker[num].videoOpened) {
        const navItem = document.getElementById(`nav-item-${num}`);
        if (navItem) navItem.classList.add('completed');
    }
    updateFinalProgress();
}

function updateFinalProgress() {
    const completedCount = Object.values(meetingTracker).filter(m => m.textOpened && m.videoOpened).length;
    const percent = Math.round((completedCount / 21) * 100);
    progressFill.style.width = percent + "%";
    progressText.innerText = percent + "%";
}

function toggleDrop(id) { document.getElementById(id).classList.toggle("active"); }
function toggleTheme() { 
    document.body.classList.toggle("dark");
    // Opsional: Simpan preferensi tema
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Inisialisasi tampilan awal
generateSidebar();
updateFinalProgress(); // Memastikan progress bar terisi sesuai data tersimpan
loadMeeting(1);

// Opsional: Memuat tema yang tersimpan
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
