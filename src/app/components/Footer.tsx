import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { fadeUp, staggerContainer } from '@/app/utils/animations';

// ✅ Import your logo
import footerLogo from '@/assets/kheti.png'; // update path if needed

export function Footer() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <footer
      ref={ref as any}
      className="relative bg-[#390805] text-white pt-16 sm:pt-20 lg:pt-14 pb-8 overflow-hidden"
    >
      {/* Decorative Top Area */}
      <div className="absolute top-0 left-0 right-0 h-24" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={staggerContainer}
        >
          {/* Column 1: Logo and About */}
          <motion.div variants={fadeUp}>
            <div className="mb-4">
              <img
                src={footerLogo}
                alt="KhetiBharat Logo"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Let us harness the power of many and together empower our farmers.
            </p>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="hover:text-white transition-colors">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">
                  News & Media
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-white transition-colors">
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Buy Products
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover:text-white transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Farmer Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Social Media */}
          <motion.div variants={fadeUp}>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#facebook" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <Facebook className="w-4 h-4" />
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#twitter" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <Twitter className="w-4 h-4" />
                  </span>
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="#linkedin" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#instagram" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </span>
                  Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20 pt-6 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center text-xs sm:text-sm text-white/60"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p>© 2026 KhetiBharat. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
