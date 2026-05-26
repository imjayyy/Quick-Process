"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaCircleCheck } from "react-icons/fa6";
import { useContactModal } from "../context/ContactModalContext";
import AnimatedButton from "./AnimatedButton";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-[#1e1c1b] text-sm placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all duration-200";

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const[status, setStatus] = useState("idle"); 
  const [errorMsg, setErrorMsg] = useState("");

  
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  function handleClose() {
    closeModal();
    setTimeout(() => setStatus("idle"), 400);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm"/>

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className="fixed inset-0 z-101 flex items-center justify-center px-4"
            aria-modal="true"
            role="dialog">
            <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-(--color-text-secondary) px-8 py-6 flex items-center justify-between">
                <div>
                  <h2 className="text-white text-2xl font-harmonie tracking-wide">Get In Touch</h2>
                  <p className="text-(--color-primary) text-sm mt-0.5">We&apos;ll get back to you shortly.</p>
                </div>
                <button
                  onClick={handleClose}
                  className="cursor-pointer flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                  aria-label="Close modal">
                  <FaXmark className="text-base" />
                </button>
              </div>
              <div className="px-8 py-7">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                    <FaCircleCheck className="text-(--color-primary) text-5xl" />
                    <h3 className="text-[#1e1c1b] text-xl font-semibold">Message Sent!</h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Thanks for reaching out. Our team will contact you within 24 hours.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-3 bg-(--color-primary) text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex gap-3">
                      <div className="flex-1 flex flex-col gap-1">
                        <label className="text-xs font-semibold text-[#1e1c1b] uppercase tracking-wide">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className={inputClass}
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-1">
                        <label className="text-xs font-semibold text-[#1e1c1b] uppercase tracking-wide">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-[#1e1c1b] uppercase tracking-wide">
                        Phone <span className="text-gray-400 normal-case font-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-[#1e1c1b] uppercase tracking-wide">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        rows={4}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    {status === "error" && (
                      <p className="text-red-500 text-sm">{errorMsg}</p>
                    )}
                    
                    <AnimatedButton
                      text={status === "loading" ? "Sending..." : "Send Message"}
                      onClick={handleSubmit}
                      className="mt-1"
                      disabled={status === "loading"}
                    />

                  </form>
                )}
              </div>


            </div>
          </motion.div>
        </>
      )}

    </AnimatePresence>
  );
}
