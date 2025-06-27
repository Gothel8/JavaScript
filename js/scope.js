// 🔵 SCOPE (Kapsam) Notları

// Scope: Bir değişkenin nerede tanımlandığına göre nerelerde erişilebilir olduğunu belirler.


// 🔹 1. Global Scope – Her yerden erişilir
let isim = "Nurdan";

function selamla() {
  console.log("Merhaba " + isim); // ✅ erişir
}

selamla();
console.log(isim); // ✅ erişir



// 🔹 2. Function Scope – Sadece fonksiyonun içinde geçerli
function test() {
  let yas = 25;
  console.log("Yaş:", yas); // ✅ erişir
}

test();
// console.log(yas); // ❌ Hata verir – yas sadece fonksiyon içinde tanımlı



// 🔹 3. Block Scope – Sadece süslü parantez {} içinde geçerli (let ve const için)
if (true) {
  let sehir = "Ankara";
  const ulke = "Türkiye";
  console.log(sehir, ulke); // ✅ erişir
}

// console.log(sehir); // ❌ Hata – block dışı
// console.log(ulke);  // ❌ Hata – block dışı



// 🔹 4. var ile tanımlarsan block scope işlemez
if (true) {
  var okul = "Üniversite";
}
console.log(okul); // ✅ erişir – çünkü var, fonksiyon scope’a uyar



// 🔹 5. İç içe scope – İçeriden dışarı erişilir, ama dışarıdan içeri erişilmez
let mesaj = "Merhaba";

function disFonksiyon() {
  let isim = "Ayşe";

  function icFonksiyon() {
    console.log(mesaj); // ✅ global
    console.log(isim);  // ✅ dış fonksiyondan
  }

  icFonksiyon();
}

disFonksiyon();
// console.log(isim); // ❌ erişemez



// 🔹 6. Kural gibi hatırla:
// - Dıştan içeri erişebilirsin ✅
// - İçten dışarı erişemezsin ❌



// 🔹 7. Hoisting ile Scope ilişkisi
function ornek() {
  console.log(a); // undefined
  var a = 10;
}

ornek();

// console.log(b); // ❌ Hata: TDZ (let ve const hoisting edilse bile kilitli)
// let b = 5;

/*🧠 Özet Cümle:
🔹 JS sadece tanımları hoist eder, atamaları değil.
🔹 var hoist edilir ama değeri undefined olur.
🔹 let/const hoist edilir ama tanımsızken kullanılırsa hata verir (TDZ).
🔹 Fonksiyonlar isimliyse hoist edilir, fonksiyon ifadeleri edilmez.*/

