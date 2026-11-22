// 1. Klasik fonksiyon
function kdvHesapla(tutar: number, oran: number): number {
    return tutar * oran / 100
}

// 2. Arrow function, aynı işi yapar
const kdvHesapla2 = (tutar: number, oran: number): number => {
    return tutar * oran / 100
};

// 3. Kısa arrow function, tek satırsa return ve süslü parantez yazılmaz
const kdvHesapla3 = (tutar:number, oran:number) => tutar * oran / 100;

console.log(kdvHesapla(100,20));
console.log(kdvHesapla2(100,20));
console.log(kdvHesapla3(100,20));
