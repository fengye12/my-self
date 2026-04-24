import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: '关于我', href: '#about' },
  { label: '我的事业', href: '#business' },
  { label: '资源优势', href: '#resources' },
  { label: '方法论', href: '#methodology' },
  { label: '联系我', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
        scrolled
          ? 'w-[92%] max-w-[720px] rounded-2xl bg-white/70 backdrop-blur-xl shadow-[var(--shadow-soft)] border border-pink-200/40'
          : 'w-[92%] max-w-[720px] rounded-2xl bg-white/40 backdrop-blur-md border border-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <a href="#" className="font-script text-2xl font-bold text-pink-600 no-underline">
          My Life
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-xl text-sm font-medium text-pink-800/70 hover:text-pink-600 hover:bg-pink-100/50 transition-all duration-200 no-underline"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl hover:bg-pink-100/50 transition-colors text-pink-700 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pb-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-pink-800/70 hover:text-pink-600 hover:bg-pink-100/50 transition-all no-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
