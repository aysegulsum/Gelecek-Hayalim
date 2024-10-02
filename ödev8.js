console.log("---------Maas bilgisine göre kredi hesaplama-------");
var maas = 5000;
if (maas < 15000) {
  console.log("Maasınız 15000 den az olduğu için kredi alamazsınız.");
} else if (maas >= 15000 && maas < 20000) {
  console.log("Kredi alabilirsiniz. Kredi miktarınız 5000 TL dir.");
} else if (maas >= 20000 && maas < 30000) {
  console.log("Kredi alabilirsiniz. Kredi miktarınız 10000 TL dir.");
} else if (maas >= 30000 && maas < 40000) {
  console.log("Kredi alabilirsiniz. Kredi miktarınız 20000 TL dir.");
} else console.log("Kredi alabilirsiniz. Kredi miktarınız 30000 TL dir.");

console.log(
  "----------------------operatör kullanımı---------------------------"
);
console.log(((15000 * 3 + 519) % 100) - 4);

console.log(
  "---------------------for döngüsü ile rakam yazdırma----------------"
);
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
