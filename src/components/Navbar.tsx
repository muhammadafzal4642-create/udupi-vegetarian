import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { DEFAULT_LOCATION } from '../data/restaurantData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Special Offers', href: '#offers' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#0B1F15]/95 border-b border-[#C8A24E]/20 backdrop-blur-md'
          : 'bg-gradient-to-b from-[#07140D]/80 to-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#FAF7F0] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E] rounded-sm"
        >
          Udupi Grand Al-Khuwair
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#FAF7F0]/85"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#E5CA87] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-center after:scale-x-0 after:bg-[#C8A24E] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + Mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={DEFAULT_LOCATION.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 border border-[#C8A24E] bg-[#C8A24E] px-4 py-2 text-xs font-semibold tracking-wide text-[#0B1F15] transition-colors duration-150 hover:bg-[#D4B263] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5CA87] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F15]"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Call Now</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#C8A24E]/35 text-[#FAF7F0] transition-colors hover:border-[#C8A24E] hover:text-[#E5CA87] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#C8A24E]/15 bg-[#0B1F15] px-4 pb-6 pt-4 lg:hidden"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center border-b border-[#FAF7F0]/10 px-2 text-base font-medium text-[#FAF7F0]/90 transition-colors hover:text-[#E5CA87]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href={DEFAULT_LOCATION.phoneHref}
                onClick={handleLinkClick}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 bg-[#C8A24E] px-4 py-3 text-sm font-semibold text-[#0B1F15] transition-colors hover:bg-[#D4B263]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call {DEFAULT_LOCATION.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
