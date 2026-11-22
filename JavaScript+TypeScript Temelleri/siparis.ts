export { };

interface Urun {
    id: number;
    ad: string;
    fiyat: number;
    stok: number;
    aktif: boolean;
}

type SiparisDurumu = "beklemede" | "hazirlaniyor" | "teslim";

interface SiparisSatiri {
    urunId: number;
    adet: number;
}

interface Siparis {
    id: number;
    masaNo: number;
    durum: SiparisDurumu;
    satirlar: SiparisSatiri[];
}

const urunler: Urun[] = [
    { id: 1, ad: "Çay", fiyat: 20, stok: 100, aktif: true },
    { id: 2, ad: "Su", fiyat: 10, stok: 50, aktif: true },
    { id: 3, ad: "Latte", fiyat: 95, stok: 40, aktif: true },
    { id: 4, ad: "Mocha", fiyat: 105, stok: 30, aktif: false },
];

const aktifUrunler = () => urunler.filter((u) => u.aktif);

// const siparisToplami = (siparis: Siparis, liste: Urun[]): number => {
//     return siparis.satirlar.reduce((toplam, satir) => {
//         const urun = liste.find((u) => u.id === satir.urunId);

//         if (!urun) {
//             return toplam;
//         }

//         return toplam + urun.fiyat * satir.adet;
//     }, 0);
// };

//for ile yapıldı
const siparisToplami = (siparis: Siparis, liste: Urun[]): number => {
    let toplam = 0;

    for (const satir of siparis.satirlar) {
        const urun = liste.find((u) => u.id === satir.urunId);
        if (urun) {
            toplam += urun.fiyat * satir.adet;
        }
    }

    return toplam;
};

const siparis: Siparis = {
    id: 1,
    masaNo: 5,
    durum: "beklemede",
    satirlar: [
        { urunId: 1, adet: 2 },
        { urunId: 3, adet: 1 },
    ],
};

console.log(aktifUrunler());
console.log(`Masa ${siparis.masaNo} toplam: ${siparisToplami(siparis, urunler)} TL`);