// 🟣 Dizi Tanımı
let meyve = ["elma", "armut", "karpuz"];
console.log("Başta:", meyve);

// 🟣 push() → sona eleman ekler
meyve.push("kiraz");
console.log("push:", meyve);

// 🟣 pop() → sondan eleman siler
meyve.pop();
console.log("pop:", meyve);

// 🟣 unshift() → başa eleman ekler
meyve.unshift("limon");
console.log("unshift:", meyve);

// 🟣 shift() → baştan eleman siler
meyve.shift();
console.log("shift:", meyve);

// 🟣 splice() → eleman silip yerine yenisini ekler
// 1. sıradan 1 eleman siler ve yerine 3 yeni meyve ekler
meyve.splice(1, 1, "kayısı", "çilek", "portakal");
console.log("splice:", meyve);

// 🟣 slice() → belli aralıktaki elemanları alır (orijinali değiştirmez)
let yeni = meyve.slice(1, 3);
console.log("slice (yeni dizi):", yeni);

console.log("slice (direkt çağırma):", meyve.slice(1, 4));

// 🟣 indexOf() → elemanın index'ini bulur
console.log("kayısı index:", meyve.indexOf("kayısı"));
console.log("üzüm index (yok):", meyve.indexOf("uzum"));

// 🟣 includes() → eleman var mı kontrol eder (true/false)
console.log("kayısı var mı:", meyve.includes("kayısı"));
console.log("üzüm var mı:", meyve.includes("uzum"));

// 🟣 forEach() → her elemanı döner, sadece işlem yapar (dizi değiştirmez)
meyve.forEach(function (meyve1) {
  console.log(meyve1 + " güzeldir");
});

meyve.forEach(meyve1 => console.log(meyve.indexOf(meyve1)));

// 🟣 map() → her elemanı dönüştürüp yeni dizi oluşturur
let cumle1 = meyve.map(function (meyve1) {
  return meyve1 + " meyvedir";
});

let cumle2 = meyve.map(meyve1 => meyve1 + " ekşidir");

console.log("Orijinal meyve dizisi:", meyve);
console.log("meyvedir dizisi:", cumle1);
console.log("ekşidir dizisi:", cumle2);

// 🟣 filter() → şarta uyan elemanlardan yeni dizi oluşturur
let uzunlar = meyve.filter(meyve1 => meyve1.length > 4);
let uzunlar2 = meyve.filter(meyve1 => meyve1.length > 5);

console.log("4'ten uzun olanlar:", uzunlar);
console.log("5'ten uzun olanlar:", uzunlar2);

// 🟣 find() → şarta uyan ilk elemanı bulur
let ilkK = meyve.find(meyve1 => meyve1.startsWith("k"));
let ilkE = meyve.find(meyve1 => meyve1.startsWith("e"));

console.log("İlk 'k' ile başlayan:", ilkK);
console.log("İlk 'e' ile başlayan:", ilkE);

// 🟣 some() → en az 1 tanesi şartı sağlıyorsa true
let varMi = meyve.some(meyve1 => meyve1.length < 5);
let varMi2 = meyve.some(meyve1 => meyve1.length > 5);

console.log("5 harften kısa var mı:", varMi);
console.log("5 harften uzun var mı:", varMi2);

// 🟣 every() → hepsi şartı sağlıyorsa true
let hepsiUzunMu = meyve.every(meyve1 => meyve1.length > 3);
let hepsiLmi = meyve.every(meyve1 => meyve1.startsWith("l"));

console.log("Hepsi 3'ten uzun mu:", hepsiUzunMu);
console.log("Hepsi 'l' ile mi başlıyor:", hepsiLmi);

// 🟣 reduce() → tüm diziyi bir değere indirger (birleştirme, toplama, vs.)
let meyveCumlesi = meyve.reduce((cumle, meyve1) => cumle + ", " + meyve1);
let meyveCumlesi2 = meyve.reduce((c, m) => c + " meyvedir, " + m);

console.log("reduce ile birleştirilmiş:", meyveCumlesi);
console.log("reduce ile süslü birleştirme:", meyveCumlesi2);
