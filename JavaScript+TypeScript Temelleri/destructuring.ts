const urun = {
    id: 1,
    ad: "Latte",
    fiyat: 95,
    stok: 40
};

// Klasik yol
const ad1 = urun.ad;
const fiyat1 = urun.fiyat;
console.log(ad1, fiyat1);

// Destructuring ile aynı iş
const { ad, fiyat } = urun;
console.log(ad, fiyat);