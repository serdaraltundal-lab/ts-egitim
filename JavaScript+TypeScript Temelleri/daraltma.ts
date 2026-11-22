export {};

// 1. typeof ile daraltma
const barkodYaz = (barkod: string | number) => {
  if (typeof barkod === "string") {
    console.log(`Metin barkod: ${barkod.toUpperCase()}`);
  } else {
    console.log(`Sayı barkod: ${barkod.toFixed(0)}`);
  }
};

barkodYaz("abc123");
barkodYaz(8690001);

// 2. undefined kontrolü ile daraltma
const stokYaz = (stok?: number) => {
  if (stok === undefined) {
    console.log("Stok bilgisi yok");
    return;
  }
  console.log(`Stok: ${stok * 2}`);
};

stokYaz();
stokYaz(20);