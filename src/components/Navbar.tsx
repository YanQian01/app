import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '产品', href: '#features' },
  { label: '功能', href: '#features' },
  { label: '架构', href: '#architecture' },
  { label: '下载', href: '#download' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-xl border-b border-[#1a1a1a]'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-[72px] px-[6vw] lg:px-[8vw]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src="/知产通.png"
            alt="知产通"
            className="w-8 h-8 rounded object-cover"
          />
          <span className="text-white font-extrabold text-base tracking-tight">
            知产通
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[rgba(255,255,255,0.6)] hover:text-white text-sm font-medium transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#download"
            className="inline-flex items-center px-5 py-2.5 border border-[rgba(255,255,255,0.3)] rounded text-white text-sm font-medium hover:border-[#e8f3ff] hover:text-[#e8f3ff] transition-all duration-300 tracking-wide"
          >
            立即体验
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border-t border-[#1a1a1a] px-[6vw] py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[rgba(255,255,255,0.6)] hover:text-white text-base font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 border border-[rgba(255,255,255,0.3)] rounded text-white text-sm font-medium hover:border-[#e8f3ff] hover:text-[#e8f3ff] transition-all duration-300 mt-2"
            >
              立即体验
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
