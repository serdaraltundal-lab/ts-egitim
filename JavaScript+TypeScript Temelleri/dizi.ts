export { };

const urunler = [
    { ad: "Latte", fiyat: 95, aktif: true },
    { ad: "Mocha", fiyat: 105, aktif: false },
    { ad: "Espresso", fiyat: 70, aktif: true },
];

// filter = Where
const aktifler = urunler.filter((u) => u.aktif);

// map = Select
const adlar = urunler.map((u) => u.ad);

// reduce = Sum / Aggregate
const toplam = urunler.reduce((acc, u) => acc + u.fiyat, 0);

console.log(aktifler);

console.log(adlar);

console.log(toplam);