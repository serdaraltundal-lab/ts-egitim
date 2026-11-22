export { };

// 1.örnek
// // Veritabanından ürün çekiyormuş gibi 1 saniye bekleyen fonksiyon
// const urunGetir = (): Promise<string> => {
//     return new Promise((rosolve) => {
//         setTimeout(() => rosolve("Latte"), 2000);
//     });
// };

// const calistir = async () => {
//     console.log("Ürün getiriliyor...");
//     const urun = await urunGetir();
//     console.log(`Gelen Ürün:${urun}`);
// };

// calistir();

//2.örnek
const urunGetir = (id: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve("Latte");
            } else {
                reject(new Error("Ürün bulunamadı"));
            }
        }, 1000);
    });
};

// 2. try/catch ile hatayı yakalamak
const calistir = async () => {
    try {
        console.log("Ürün getiriliyor...");
        const urun = await urunGetir(1);
        console.log(`Gelen ürün: ${urun}`);
    } catch (hata) {
        console.log(`Hata: ${(hata as Error).message}`);
    }
};

// 3. fetch ile gerçek bir API'den veri çekmek
const apidenGetir = async () => {
    try {
        const cevap = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const veri = await cevap.json();
        console.log(`API'den gelen: ${veri.name}`);
    } catch (hata) {
        console.log(`API hatası: ${(hata as Error).message}`);
    }
};

calistir();
apidenGetir();