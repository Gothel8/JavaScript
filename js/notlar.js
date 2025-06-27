// 🟣 DEĞİŞKEN TANIMLAMA
let isim = "Nurdan";         // Değiştirilebilir değişken
const yas = 25;              // Sabit, tekrar atanamaz
var sehir = "Ankara";        // Eski yöntem, önerilmez (kullanımı riskli)

// 🟣 KONSOLA YAZDIRMA
console.log(isim);           // Nurdan

// 🟣 TEMEL VERİ TÜRLERİ
// String (metin), Number (sayı), Boolean (true/false)

// 🟣 KOŞULLU İFADELER (if - else if - else)
if (yas >= 18) {
  console.log("Yetişkinsin");
} else {
  console.log("Reşit değilsin");
}

let not = 85;
if (not >= 90) {
  console.log("AA");
} else if (not >= 80) {
  console.log("BA");
} else {
  console.log("Kaldın");
}

// 🟣 KARŞILAŞTIRMA OPERATÖRLERİ
// == : Değer karşılaştırır (tür fark etmez)
// === : Değer ve türü karşılaştırır (daha güvenli)
// != : Eşit değil mi kontrol eder
// !== : Değer ve türü eşit değil mi kontrol eder
// >, <, >=, <= : büyüktür, küçüktür vb.

// 🟣 STRING METODU: toLowerCase()
// Metni küçük harfe çevirir, karşılaştırmalarda işe yarar
let cevap = "EVET";
if (cevap.toLowerCase() === "evet") {
  console.log("Onaylandı");
}

// 🟣 PROMPT İLE KULLANICIDAN GİRİŞ ALMA
let kullaniciAdi = prompt("Adınızı giriniz:");
console.log("Merhaba " + kullaniciAdi);

// 🟣 SWITCH-CASE YAPISI (Aralık kontrolü için switch(true))
let notDegeri = 85;
switch (true) {
  case (notDegeri >= 90):
    console.log("AA");
    break;
  case (notDegeri >= 80):
    console.log("BA");
    break;
  default:
    console.log("Kaldın");
}

// 🟣 DİZİLER (Arrays) TEMEL METOTLARI

let meyveler = ["elma", "armut", "karpuz"];

// push() – sona eleman ekler
meyveler.push("kiraz");

// pop() – sondan eleman siler
meyveler.pop();

// unshift() – başa eleman ekler
meyveler.unshift("limon");

// shift() – baştan eleman siler
meyveler.shift();

// splice(index, kaç tane silinecek, eklenmek istenenler)
meyveler.splice(1, 1, "kayısı", "çilek", "portakal");

// slice(start, end) – yeni dizi döner, orijinali bozmaz
let yeni = meyveler.slice(1, 3);

// indexOf() – elemanın ilk indeksini döner, yoksa -1
meyveler.indexOf("kayısı");

// includes() – eleman var mı? true/false döner
meyveler.includes("çilek");

// 🟣 Dizi Metotları — Callback Fonksiyonlar

// forEach() – her eleman için işlem yapar, dönen değer yoktur
meyveler.forEach(function(meyve) {
  console.log(meyve + " güzeldir");
});

// arrow function ile kısa yazım
meyveler.forEach(meyve => console.log(meyve + " tatlıdır"));

// map() – her elemanı dönüştürür, yeni dizi döner
let cumle1 = meyveler.map(function(m) {
  return m + " meyvedir";
});
let cumle2 = meyveler.map(m => m + " ekşidir");

console.log(cumle1);
console.log(cumle2);

// filter() – şarta uyan elemanlardan yeni dizi döner
let uzunMeyveler1 = meyveler.filter(function(meyve) {
  return meyve.length > 6;
});
let uzunMeyveler2 = meyveler.filter(meyve => meyve.length > 6);

console.log(uzunMeyveler1);
console.log(uzunMeyveler2);

// find() – şarta uyan ilk elemanı döner
let ilkK1 = meyveler.find(function(m) {
  return m.startsWith("k");
});
let ilkK2 = meyveler.find(m => m.startsWith("k"));

console.log(ilkK1);
console.log(ilkK2);

// 🟣 CALLBACK (GERİ ÇAĞIRMA) FONKSİYONU NEDİR?

// forEach, map, filter, find gibi metodlara verdiğimiz fonksiyonlara callback denir.
// Bu fonksiyonlar, metod tarafından her eleman için tekrar tekrar çağrılır.

// Aynı işlemin farklı yazım şekilleri:

// 1. Anonim function
meyveler.forEach(function(m) {
  console.log(m);
});

// 2. Arrow function
meyveler.forEach(m => console.log(m));

// 3. Önceden tanımlanmış fonksiyon
function yazdir(m) {
  console.log(m);
}
meyveler.forEach(yazdir);

// 🟣 FONKSİYON TÜRLERİ VE KULLANIM ALANLARI

/* Tür                         	Nerede Kullanılır?

function isim(...) {}	    Klasik, genel kullanımlar

const x = function(...) 	Fonksiyon değişkene atanacaksa

const x = (...) => {}   	Modern ve kısa yazım, React vb

const x = a => b	        Tek satırlık, kısa fonksiyonlar
*/


// ...önceki notlar aynen kalacak (değişkenler, koşullar, diziler, callback vb.)

// 🟣 FONKSİYONLAR (Functions)

// 1. Klasik Named Function (İsimli Fonksiyon)
function hesapla(not) {
  if (not > 90) return "AA";
  else if (not > 50) return "BC";
  else return "Kaldın";
}
console.log(hesapla(67)); // BC

// 2. Değişkene Atanan Anonim Fonksiyon
const hesapla2 = function(not) {
  if (not > 90) return "AA";
  else if (not > 50) return "BC";
  else return "Kaldın";
};
console.log(hesapla2(67)); // BC

// 3. Arrow Function (ok fonksiyonu)
const hesapla3 = (not) => {
  if (not > 90) return "AA";
  else if (not > 50) return "BC";
  else return "Kaldın";
};
console.log(hesapla3(67)); // BC

// 4. Tek satır Arrow Function (tek parametre, tek ifade)
const hesapla4 = not => not > 90 ? "AA" : "FF";
console.log(hesapla4(67)); // FF

// 5. Return ve console.log arasındaki fark
function yazdir(sayi) {
  console.log(sayi * sayi);
}
let sonuc = yazdir(5); // konsola 25 yazar ama return etmez
console.log(sonuc);    // undefined döner çünkü return yok

// 6. Varsayılan Değerli Fonksiyonlar
function selamVer(isim = "Ziyaretçi") {
  return "Merhaba, " + isim;
}
console.log(selamVer());         // Merhaba, Ziyaretçi
console.log(selamVer("Nurdan")); // Merhaba, Nurdan

const carp = (a = 2, b = 3) => a * b;
console.log(carp());       // 6 (2*3)
console.log(carp(4));      // 12 (4*3)
console.log(carp(4, 5));   // 20 (4*5)

// 7. İç İçe Fonksiyonlar (Nested Functions)
// Bir fonksiyonun içinde başka fonksiyon tanımlanabilir.
// İç fonksiyon sadece dış fonksiyon çağrıldığında çalışır ve dışarıdan erişilemez.
function ogrenciNotu(isim, not) {
  function harfNotu(puan) {
    if (puan >= 90) return "AA";
    else if (puan >= 80) return "BA";
    else return "FF";
  }
  return isim + " adlı öğrencinin harf notu: " + harfNotu(not);
}
console.log(ogrenciNotu("Nurdan", 85)); 
// Nurdan adlı öğrencinin harf notu: BA

// 8. Callback Fonksiyonlar (Fonksiyonu parametre olarak göndermek)
function islemYap(sayi, islem) {
  return islem(sayi);
}
function kareAl(sayi) {
  return sayi * sayi;
}
console.log(islemYap(5, kareAl));         // 25
console.log(islemYap(6, x => x + 10));    // 16

// 9. setTimeout() - Belirli süre sonra fonksiyon çalıştırma
setTimeout(() => {
  console.log("3 saniye sonra bu yazı çıktı");
}, 3000);

// 10. setInterval() - Belirli aralıklarla tekrar tekrar fonksiyon çalıştırma
let i = 0;
let id = setInterval(() => {
  i++;
  console.log("Sayı: " + i);
  if (i === 3) {
    clearInterval(id);  // Döngüyü durdurur
    console.log("Bitti!");
  }
}, 1500);

// clearInterval(id) ile setInterval durdurulur.
// Sayfa kapandığında da otomatik durur.


// 📌  NESNELER (Objects)

// 🔹 Tanımlama, key-value yapısı
let kisi = {
  isim: "Nurdan",
  yas: 20,
  sehir: "Ankara"
};
console.log(kisi.isim); // Nurdan
console.log(kisi["yas"]); // 20

// 🔹 İç içe nesneler
let ogrenci = {
  ad: "Ayşe",
  adres: {
    sehir: "İstanbul",
    mahalle: "Kadıköy"
  }
};
console.log(ogrenci.adres.sehir); // İstanbul

// 🔹 Object.keys() → keyleri dizi olarak verir
console.log(Object.keys(kisi)); // ["isim", "yas", "sehir"]

// 🔹 Object.values() → değerleri dizi olarak verir
console.log(Object.values(kisi)); // ["Nurdan", 20, "Ankara"]

// 🔹 Object.entries() → [key, value] çiftlerini verir
console.log(Object.entries(kisi)); 
// [["isim", "Nurdan"], ["yas", 20], ["sehir", "Ankara"]]

// 🔹 Nesne içinde fonksiyon tanımlama (this kullanımı)
let araba = {
  marka: "Toyota",
  model: "Corolla",
  bilgi: function() {
    console.log(this.marka + " " + this.model);
  }
};
araba.bilgi(); // Toyota Corolla

//------------------------------------------------------------

// 📌  DÖNGÜLER

// 🔹 for
for (let i = 0; i < 3; i++) {
  console.log(i); // 0,1,2
}

// 🔹 while
let j = 0;
while (j < 3) {
  console.log(j);
  j++;
}

// 🔹 do while
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 3);

// 🔹 for...of → dizilerde kullanılır
let meyveler3 = ["elma", "armut", "muz"];
for (let meyve of meyveler3) {
  console.log(meyve);
}

// 🔹 for...in → nesnelerde kullanılır (keyleri döner)
for (let key in kisi) {
  console.log(key + ":", kisi[key]);
}
// isim: Nurdan
// yas: 20
// sehir: Ankara

//------------------------------------------------------------


/*✨ Özet Mantık
✅ Nesne → key-value yapısı
✅ Object.keys/values/entries → nesneyi parçalamak için
✅ Döngüler:

for → klasik sayaç döngüsü

while, do while → koşula bağlı tekrar

for...of → dizilerde elemanları alır

for...in → nesnelerde keyleri alır */