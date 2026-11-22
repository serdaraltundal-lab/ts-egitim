
export{};
const urun = { ad: "Latte", fiyat: 95, stok: 40 };

// 1. Nesneyi kopyala, bir alanı değiştir
const zamliUrun = { ...urun, fiyat: 110 };

// 2. Nesneye yeni alan ekle
const kategorili = { ...urun, kategori: "Kahve" };

// 3. Diziye eleman ekle
const urunler = ["Latte", "Mocha"];
const yeniListe = [...urunler, "Espresso"];

// 4. İki diziyi birleştir
const sicaklar = ["Latte", "Mocha"];
const soguklar = ["Ice Latte", "Frappe"];
const hepsi = [...sicaklar, ...soguklar];



console.log(urun);
console.log(zamliUrun);
console.log(kategorili);
console.log(yeniListe);
console.log(hepsi);


// const noktasiz = [urunler, "Espresso"];
// const noktali = [...urunler, "Espresso"];
// console.log(noktasiz);
// console.log(noktali);