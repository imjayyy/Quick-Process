import "./globals.css";
import Header from "./component/Header";
import localFont from 'next/font/local';

const pogonia = localFont({
  src: [
    {
      path: '/fonts/pogonia/pogonia-medium.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-pogonia',
});

const harmonie = localFont({
  src: [
    {
      path: '/fonts/Harmonie/Harmonie.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-harmonie',
});

export const metadata = {
  title: "Quick Process App",
  description: "A sleek and modern landing page for QuickProcess, a cutting-edge workflow automation tool designed to streamline your business processes and boost productivity. With a clean and intuitive design, our landing page highlights the key features and benefits of QuickProcess, showcasing how it can revolutionize the way you work. From seamless integrations to powerful automation capabilities, our landing page is the perfect introduction to the future of workflow management.",
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