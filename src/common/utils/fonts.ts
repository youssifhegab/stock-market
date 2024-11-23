import { Archivo, Noto_Sans_Arabic as NotoSansArabic } from 'next/font/google';

export const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
});

export const noto = NotoSansArabic({
  subsets: ['arabic'],
  display: 'swap',
  variable: '--font-noto',
});
