// 🟣 Kullanıcıdan bilgi alma
let isim = prompt("Adın ne?");
let yas = Number(prompt("Yaşın kaç?"));
let sehir = prompt("Nerede yaşıyorsun?");
let notDegeri = Number(prompt("Not değerini gir:"));

// 🟣 Yaş kontrolü (if - else)
if (yas > 18) {
  console.log("Yetişkinsin.");
} else {
  console.log("Yetişkin değilsin.");
}

// 🟣 Şehir kontrolü (if - else if - else)
let sehirKucuk = sehir.toLowerCase();

if (sehirKucuk === "ankara") {
  console.log("Başkenttesin.");
} else if (sehirKucuk === "istanbul") {
  console.log("Mega şehirdesin.");
} else {
  console.log("Güzel bir şehirdesin.");
}

// 🟣 Not değerlendirme (switch-case yapısıyla)
let harfNotu;

switch (true) {
  case (notDegeri >= 90):
    harfNotu = "AA";
    break;
  case (notDegeri >= 70):
    harfNotu = "BB";
    break;
  case (notDegeri >= 50):
    harfNotu = "CC";
    break;
  default:
    harfNotu = "FF";
}

console.log("Notun: " + harfNotu);
