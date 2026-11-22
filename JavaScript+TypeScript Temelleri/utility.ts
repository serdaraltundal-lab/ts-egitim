export { };

interface Urun {
    id: number;
    ad: string;
    fiyat: number;
    stok: number;
}

// 1. Partial: bütün alanlar isteğe bağlı olur (güncelleme için)
const guncelleme: Partial<Urun> = { fiyat: 95 };

// 2. Pick: sadece seçtiğin alanları al (liste ekranı için)
type UrunOzet = Pick<Urun, "id" | "ad">;
const ozet: UrunOzet = { id: 1, ad: "Latte" };

// 3. Omit: seçtiğin alanları çıkar (yeni kayıt, id yok)
type YeniUrun = Omit<Urun, "id">;
const yeni: YeniUrun = { ad: "Mocha", fiyat: 105, stok: 30 };

console.log(guncelleme, ozet, yeni);