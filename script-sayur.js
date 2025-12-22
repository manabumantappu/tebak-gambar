let score = 0;
let indexSoal = 0;

/* =====================
   DATA SOAL SAYUR (15)
===================== */
const soal = [
  {
    gambar: "images/sayur/wortel.png",
    nama: "Wortel",
    opsi: ["Wortel", "Tomat", "Cabai"],
    info: "🥕 Wortel baik untuk kesehatan mata."
  },
  {
    gambar: "images/sayur/brokoli.png",
    nama: "Brokoli",
    opsi: ["Brokoli", "Selada", "Bayam"],
    info: "🥦 Brokoli kaya vitamin dan serat."
  },
  {
    gambar: "images/sayur/tomat.png",
    nama: "Tomat",
    opsi: ["Tomat", "Apel", "Paprika"],
    info: "🍅 Tomat sering dipakai dalam masakan."
  },
  {
    gambar: "images/sayur/bayam.png",
    nama: "Bayam",
    opsi: ["Bayam", "Kangkung", "Selada"],
    info: "🥬 Bayam membuat tubuh jadi kuat."
  },
  {
    gambar: "images/sayur/kentang.png",
    nama: "Kentang",
    opsi: ["Kentang", "Singkong", "Ubi"],
    info: "🥔 Kentang bisa digoreng atau direbus."
  },
  {
    gambar: "images/sayur/jagung.png",
    nama: "Jagung",
    opsi: ["Jagung", "Pisang", "Labu"],
    info: "🌽 Jagung rasanya manis dan lezat."
  },
  {
    gambar: "images/sayur/timun.png",
    nama: "Timun",
    opsi: ["Timun", "Pare", "Terong"],
    info: "🥒 Timun segar dan banyak air."
  },
  {
    gambar: "images/sayur/terong.png",
    nama: "Terong",
    opsi: ["Terong", "Tomat", "Paprika"],
    info: "🍆 Terong sering dimasak dengan sambal."
  },
  {
    gambar: "images/sayur/kubis.png",
    nama: "Kubis",
    opsi: ["Kubis", "Selada", "Bayam"],
    info: "🥬 Kubis sering dipakai untuk sayur sop."
  },
  {
    gambar: "images/sayur/bawang.png",
    nama: "Bawang",
    opsi: ["Bawang", "Jahe", "Kentang"],
    info: "🧅 Bawang membuat masakan jadi harum."
  },
  {
    gambar: "images/sayur/cabai.png",
    nama: "Cabai",
    opsi: ["Cabai", "Paprika", "Tomat"],
    info: "🌶️ Cabai rasanya pedas."
  },
  {
    gambar: "images/sayur/selada.png",
    nama: "Selada",
    opsi: ["Selada", "Kubis", "Bayam"],
    info: "🥗 Selada sering ada di salad."
  },
  {
    gambar: "images/sayur/kangkung.png",
    nama: "Kangkung",
    opsi: ["Kangkung", "Bayam", "Brokoli"],
    info: "🥬 Kangkung enak ditumis."
  },
  {
    gambar: "images/sayur/labu.png",
    nama: "Labu",
    opsi: ["Labu", "Jagung", "Kentang"],
    info: "🎃 Labu rasanya manis dan lembut."
  },
  {
    gambar: "images/sayur/jahe.png",
    nama: "Jahe",
    opsi: ["Jahe", "Kunyit", "Bawang"],
    info: "🫚 Jahe menghangatkan tubuh."
  }
];

/* =====================
   CATATAN PENTING
===================== */
/*
📂 Folder gambar:
images/
└── sayur/
    ├── wortel.png
    ├── brokoli.png
    ├── tomat.png
    ├── bayam.png
    ├── kentang.png
    ├── jagung.png
    ├── timun.png
    ├── terong.png
    ├── kubis.png
    ├── bawang.png
    ├── cabai.png
    ├── selada.png
    ├── kangkung.png
    ├── labu.png
    └── jahe.png
*/
