export { };

// 1. type: interface'e benzer, nesne tanımlar
type Urun = {
    id: number;
    ad: string;
    fiyat: number;
};

// 2. Union: "ya bu ya şu" tipi
type SiparisDurumu = "beklemede" | "hazirlaniyor" | "teslim";

let durum: SiparisDurumu = "beklemede";
durum = "teslim";
// durum = "iptal"; // Hata verir, listede yok

// 3. Union farklı tiplerle
let barkod: string | number = "8690001";
barkod = 8690001;

const urun: Urun = { id: 1, ad: "Latte", fiyat: 95 };
console.log(urun, durum, barkod);