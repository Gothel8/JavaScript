// ===============================
// 📌 DÖNGÜLER
// ===============================

// 🔹 for döngüsü
for (let i = 0; i < 5; i++) {
  console.log("for döngüsü:", i);
}

//------------------------------------------------------------

// 🔹 while döngüsü
let j = 0;
while (j < 3) {
  console.log("while döngüsü:", j);
  j++;
}

//------------------------------------------------------------

// 🔹 do while döngüsü
let k = 0;
do {
  console.log("do while döngüsü:", k);
  k++;
} while (k < 3);

//------------------------------------------------------------

// 🔹 for...of (dizilerde elemanları alır)
let meyveler = ["elma", "armut", "muz"];
for (let meyve of meyveler) {
  console.log("for...of:", meyve);
}

//------------------------------------------------------------

// 🔹 for...in (nesnelerde keyleri alır)
let insan = {
  isim: "Nurdan",
  yas: 20,
  sehir: "Ankara"
};

for (let key in insan) {
  console.log("for...in:", key, insan[key]);
}

//------------------------------------------------------------

// 🔎 Özet:
// for → sayaç
// while → koşula bağlı
// do while → koşula bağlı ama en az bir kez çalışır
// for...of → dizilerde
// for...in → nesnelerde keyleri döner

//------------------------------------------------------------
