// ===============================
// 📌 NESNELER (Objects)
// ===============================

// 🔹 Tanımlama (key-value yapısı)
let insan = {
  isim: "Nurdan",
  yas: 20,
  sehir: "Ankara"
};

console.log(insan.isim); // Nurdan
console.log(insan["yas"]); // 20

//------------------------------------------------------------

// 🔹 İç içe nesneler
let ogrenci = {
  ad: "Ayşe",
  adres: {
    sehir: "İstanbul",
    mahalle: "Kadıköy"
  },
  dersler: ["Matematik", "Fizik"]
};

console.log(ogrenci.adres.mahalle); // Kadıköy
console.log(ogrenci.dersler[1]); // Fizik

//------------------------------------------------------------

// 🔹 Object.keys() → keyleri dizi olarak verir
console.log(Object.keys(insan)); // ["isim", "yas", "sehir"]

// 🔹 Object.values() → değerleri dizi olarak verir
console.log(Object.values(insan)); // ["Nurdan", 20, "Ankara"]

// 🔹 Object.entries() → [key, value] çiftlerini verir
console.log(Object.entries(insan)); 
// [["isim", "Nurdan"], ["yas", 20], ["sehir", "Ankara"]]

//------------------------------------------------------------

// 🔹 Nesne içinde fonksiyon tanımlamak (this kullanımı)
let araba = {
  marka: "Toyota",
  model: "Corolla",
  bilgi: function() {
    console.log(this.marka + " " + this.model);
  }
};

araba.bilgi(); // Toyota Corolla

//------------------------------------------------------------
