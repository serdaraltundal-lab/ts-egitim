export {};

// 1. Generic fonksiyon: her tiple çalışır
const ilkEleman = <T>(liste: T[]): T => {
  return liste[0];
};

console.log(ilkEleman([95, 105, 70]));          // number
console.log(ilkEleman(["Latte", "Mocha"]));     // string

// 2. Generic tip: API cevabı için kalıp
interface ApiCevap<T> {
  basarili: boolean;
  veri: T;
  mesaj?: string;
}

interface Urun {
  id: number;
  ad: string;
  fiyat: number;
}

const cevap: ApiCevap<Urun> = {
  basarili: true,
  veri: { id: 1, ad: "Latte", fiyat: 95 },
};

const listeCevap: ApiCevap<Urun[]> = {
  basarili: true,
  veri: [
    { id: 1, ad: "Latte", fiyat: 95 },
    { id: 2, ad: "Mocha", fiyat: 105 },
  ],
};

console.log(cevap.veri.ad);
console.log(listeCevap.veri.length);