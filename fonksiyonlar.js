// 🟣 Klasik Named Function (İsimli Fonksiyon)
function hesapla(not) {
  if (not > 90) return "AA";
  else if (not > 50) return "BC";
  else return "Kaldın";
}
console.log(hesapla(67));  // BC

// 🟣 Değişkene Atanan Anonim Fonksiyon
const hesapla2 = function(not) {
  if (not > 90) return "AA";
  else if (not > 50) return "BC";
  else return "Kaldın";
};
console.log(hesapla2(67)); // BC

// 🟣 Arrow Function (ok fonksiyonu)
const hesapla3 = (not) => {
  if (not > 90) return "AA";
  else if (not > 50) return "BC";
  else return "Kaldın";
};
console.log(hesapla3(67)); // BC

// 🟣 Tek satır arrow function (tek parametre, tek ifade)
const hesapla4 = not => not > 90 ? "AA" : "FF";
console.log(hesapla4(67)); // FF

// 🟣 Return ve Console.log arasındaki fark
function yazdir(sayi) {
  console.log(sayi * sayi);
}

let sonuc = yazdir(5);  // Konsola 25 yazar ama return etmez
console.log(sonuc);     // undefined döner çünkü fonksiyon return etmez

// 🟣 Varsayılan Değerli Fonksiyonlar
function selamVer(isim = "Ziyaretçi") {
  return "Merhaba, " + isim;
}
console.log(selamVer());           // Merhaba, Ziyaretçi
console.log(selamVer("Nurdan"));   // Merhaba, Nurdan

const carp = (a = 2, b = 3) => a * b;
console.log(carp());       // 6  (2*3)
console.log(carp(4));      // 12 (4*3)
console.log(carp(4, 5));   // 20 (4*5)

// 🟣 İç İçe Fonksiyonlar
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

// Not: harfNotu dışarıdan çağrılamaz (gizlidir)

// 🟣 İç Fonksiyonlu İndirim Hesaplama
function indirimliFiyat(indirim, fiyat) {
  function indir(indirim, fiyat) {
    return fiyat - (fiyat * indirim / 100);
  }
  return "İndirimli fiyat: " + indir(indirim, fiyat);
}

console.log(indirimliFiyat(20, 549));  // İndirimli fiyat: 439.2

// 🟣 Callback Fonksiyonlar (Fonksiyonu parametre olarak yollamak)
function islemYap(sayi, islem) {
  return islem(sayi);
}

function kareAl(sayi) {
  return sayi * sayi;
}

console.log(islemYap(5, kareAl));         // 25
console.log(islemYap(6, x => x + 10));    // 16

// 🕒 setTimeout() - Belirli süre sonra çalıştırma
setTimeout(() => {
  console.log("3 saniye sonra bu yazı çıktı");
}, 3000);

console.log("1");
setTimeout(() => console.log("2"), 2000);
console.log("3");

// Ekran çıktısı:
// 1
// 3
// 2 (2 saniye sonra)

// 🔁 setInterval() - Belirli aralıklarla tekrar çalıştırma
let i = 0;
let id = setInterval(() => {
  i++;
  console.log("Sayı: " + i);
  if (i === 3) {
    clearInterval(id);  // Döngüyü durdurur
    console.log("Bitti!");
  }
}, 1500);

// setInterval, clearInterval ve sayfa kapanana kadar devam eder
