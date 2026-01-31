import { useState } from "react";
import { UserPlus, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="absolute top-0 left-0 w-full z-30 text-gray-900"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >

      {/* Orange top border */}
      <div className="h-[5px] bg-[#fd4d02]" />

      {/* Main Header */}
      <div className="bg-gradient-to-b from-white/70 via-white/40 to-transparent backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

          {/* LOGO */}
          <div className="flex items-center">
            <Link to="/"><img
              src="/images/Logo.jpg.png"
              alt="KhetiBharat Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            /></Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-800">
            <Link to="/mission" className="hover:text-[#0B6B3A] transition">
              Our Mission
            </Link>
            <Link to="/initiatives" className="hover:text-[#0B6B3A] transition">
              Our Initiatives
            </Link>
            <Link to="/news" className="hover:text-[#0B6B3A] transition">
              News & Media
            </Link>
            <Link to="/awards" className="hover:text-[#0B6B3A] transition">
              Awards & Recognition
            </Link>
            <Link to="/partners" className="hover:text-[#0B6B3A] transition">
              Partners
            </Link>
          </nav>


          {/* Right Section */}
          <div className="flex items-center gap-4 sm:gap-6">

            {/* Support / Contact */}
            <div className="hidden md:flex items-center gap-2 text-m text-gray-700">
              <Link to="/contact" className="hover:text-[#0B6B3A] transition">
                Support
              </Link>
              <span className="text-gray-400">/</span>
              <Link to="/contact" className="hover:text-[#0B6B3A] transition">
                Contact Us
              </Link>
            </div>

            {/* Farmer Registration - merged with top orange bar */}
            <motion.a
              href="https://www.agrivalah.in/farmer-login.html"
              target="_blank"
              rel="noopener noreferrer"
              // className="hidden sm:inline-flex items-center gap-2 bg-[#FF6A00] text-white px-8 py-2.5 rounded-full font-semibold shadow-md -mt-3 btn-premium relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="
                hidden sm:inline-flex items-center gap-2
                bg-[#fd4d02] text-white
                px-8 py-2.5 rounded-full font-semibold
                shadow-md
                transition-all duration-300
                -mt-3
                hover:bg-[#fd4d02]
                hover:shadow-[0_0_0_4px_rgba(255,106,0,0.25),0_10px_30px_rgba(255,106,0,0.35)]
                hover:-translate-y-[1px]
              "
            >
              <UserPlus className="w-4 h-4" />
              Farmer Registration
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              className="inline-flex items-center justify-center lg:hidden w-9 h-9 rounded-full bg-white/80 shadow-sm border border-black/5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="max-w-[1440px] mx-auto px-4 py-4 flex flex-col gap-3 text-sm text-gray-800">
              {[
                { label: "Mission", path: "/mission" },
                { label: "Initiatives", path: "/initiatives" },
                { label: "News", path: "/news" },
                { label: "Awards", path: "/awards" },
                { label: "Partners", path: "/partners" },
                { label: "Contact Us / Support", path: "/contact" },
              ].map((item, index) => (
                <motion.div key={item.label}>
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#0B6B3A] transition block"
                  >
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="block"
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="https://www.agrivalah.in/farmer-login.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-[#FF6A00] text-white px-4 py-2 rounded-full font-semibold shadow-md btn-premium relative overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                whileTap={{ scale: 0.96 }}
              >
                <UserPlus className="w-4 h-4" />
                Farmer Registration
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
