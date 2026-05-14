"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function revealPage() {
  document.documentElement.classList.remove("lymar-loading");
}

export default function Loader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const already = sessionStorage.getItem("lymar_loaded");
    if (!already) {
      sessionStorage.setItem("lymar_loaded", "1");
      setVisible(true);
      const t = setTimeout(() => {
        setVisible(false);
        revealPage();
      }, 3000);
      return () => clearTimeout(t);
    } else {
      revealPage();
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="lymar-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-200 bg-black flex flex-col items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.55em" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-(family-name:--font-playfair) text-white text-4xl md:text-5xl font-light tracking-[0.55em] uppercase mb-3 not-italic"
          >
            Lymar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="font-(family-name:--font-inter) text-white text-xs tracking-[0.35em] uppercase"
          >
            Dermo-Esthetic
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
