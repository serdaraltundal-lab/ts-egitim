export{};

interface Urun {
    id: number;
    ad: string;
    fiyat: number;
    stok?: number;
    aktif: boolean;
}

const urun: Urun = {
    id: 1,
    ad: "Latte",
    fiyat: 95,
    stok: 10,
    aktif: true
};

console.log(`${urun.ad} - ${urun.fiyat} TL - Stok:${urun.stok ?? 0}`);