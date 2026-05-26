"use client";
import { ContactModalProvider } from "../context/ContactModalContext";
import Header from "../component/Header";
import ContactModal from "../component/ContactModal";

export default function Providers({ children }) {
  return (
    <ContactModalProvider>
      <Header />
      <main className="grow pt-12">
        {children}
      </main>
      <ContactModal />
    </ContactModalProvider>
  );
}
