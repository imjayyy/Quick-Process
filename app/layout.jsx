import "./globals.css";
import localFont from 'next/font/local';
import Providers from "./providers";

const pogonia = localFont({
  src: [
    {
      path: '../public/fonts/Pogonia/pogonia-medium.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-pogonia',
});

const harmonie = localFont({
  src: [
    {
      path: '../public/fonts/Harmonie/Harmonie.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-harmonie',
});

export const metadata = {
  title: "Quick Process | Printing & Packaging Solutions",
  description:
    "Premium offset printing and packaging services including custom prints, product packaging, brand mockups, logo printing, and creative design solutions. Quick Process specialises in offset printing — not gravure — helping businesses build strong brand identity through high-quality packaging and visual branding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pogonia.variable} ${harmonie.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[var(--color-creme)] overflow-x-hidden">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}