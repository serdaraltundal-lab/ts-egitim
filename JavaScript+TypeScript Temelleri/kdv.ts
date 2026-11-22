export const KDV_ORANI = 20;

export const kdvHesapla = (tutar : number) => (tutar * KDV_ORANI) / 100;