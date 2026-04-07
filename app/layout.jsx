import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Quick Process App",
  description: "A sleek and modern landing page for QuickProcess, a cutting-edge workflow automation tool designed to streamline your business processes and boost productivity. With a clean and intuitive design, our landing page highlights the key features and benefits of QuickProcess, showcasing how it can revolutionize the way you work. From seamless integrations to powerful automation capabilities, our landing page is the perfect introduction to the future of workflow management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Body par overflow-x-hidden lagane se pure page ka daen-baen ka scroll band ho jayega */}
      <body className="min-h-screen flex flex-col bg-[#FFFCF2] overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}