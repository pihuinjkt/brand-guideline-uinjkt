export type Section = {
  to: string;
  title: string;
  number: string;
  blurb: string;
};

export const SECTIONS: Section[] = [
  { to: "/pusat-unduhan", number: "01", title: "Pusat Unduhan", blurb: "Logo, panduan, templat, dan font siap pakai." },
  { to: "/segel-akademik", number: "02", title: "Segel Akademik", blurb: "Lambang resmi untuk dokumen akademik dan ijazah." },
  { to: "/signature-logo", number: "03", title: "Signature Logo", blurb: "Identitas utama UIN Jakarta dan variasinya." },
  { to: "/lambang-fakultas", number: "04", title: "Lambang Fakultas", blurb: "Sistem lambang untuk seluruh fakultas." },
  { to: "/tipografi-logo", number: "05", title: "Tipografi Logo", blurb: "Konstruksi wordmark dan ruang aman." },
  { to: "/warna", number: "06", title: "Warna", blurb: "Palet primer, sekunder, dan rasio penggunaan." },
  { to: "/tipografi", number: "07", title: "Tipografi", blurb: "Typeface, skala, dan pasangan tipe." },
];
