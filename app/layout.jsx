import "./globals.css";
import Header from "./component/Header";
import localFont from 'next/font/local';

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
    "Premium printing and packaging services including custom prints, product packaging, brand mockups, logo printing, and creative design solutions. QuickProcess helps businesses build strong brand identity through high-quality packaging and visual branding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pogonia.variable} ${harmonie.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[var(--color-creme)] overflow-x-hidden">
        <Header  />
        <main className="flex-grow pt-12">
          {children}
        </main>
      </body>
    </html>
  );
}