import { useState } from "react";
import { UserPlus, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Our Mission", path: "/mission" },
    { label: "Our Initiatives", path: "/initiatives" },
    { label: "Benefits", path: "/benefits" },
    { label: "Partners", path: "/partners" },
    { label: "News & Media", path: "/news" },
  ];

  return (
    <motion.header
      className="absolute top-0 left-0 w-full z-30 text-gray-900"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Orange top border */}
      <div className="h-[5px] bg-[#fd4d02]" />

      {/* Main Header */}
      <div className="bg-gradient-to-b from-white/70 via-white/40 to-transparent backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link to="/">
            <img
              src="/images/Logo.jpg.png"
              alt="KhetiBharat Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-1 transition-colors duration-300
                   ${isActive ? "text-[#0B6B3A]" : "text-gray-800 hover:text-[#0B6B3A]"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {/* Animated Underline */}
                    <span
                      className={`
                        absolute left-0 -bottom-1 h-[2px] w-full
                        bg-[#0B6B3A] transform transition-transform duration-300 origin-left
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6">

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hidden md:block relative pb-1 transition-colors duration-300
                ${isActive ? "text-[#0B6B3A]" : "text-gray-800 hover:text-[#0B6B3A]"}`
              }
            >
              {({ isActive }) => (
                <>
                  Contact Us
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] w-full
                      bg-[#0B6B3A] transform transition-transform duration-300 origin-left
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </>
              )}
            </NavLink>

            {/* Farmer Registration Button */}
            <motion.a
              href="https://www.agrivalah.in/farmer-login.html"
              target="_blank"
              rel="noopener noreferrer"

              className="hidden sm:inline-flex items-center gap-2
                bg-[#fd4d02] text-white px-8 py-2.5 rounded-full
                font-semibold shadow-md  btn-premium
              relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <UserPlus className="w-4 h-4" />
              Farmer Registration
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 flex flex-col gap-4 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `transition-colors duration-300
                     ${isActive ? "text-[#0B6B3A]" : "text-gray-800 hover:text-[#0B6B3A]"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 hover:text-[#0B6B3A]"
              >
                Contact Us
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
