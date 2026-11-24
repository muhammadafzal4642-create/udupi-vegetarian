import { DEFAULT_LOCATION } from '../data/restaurantData';
import { GoldHairlineDivider } from './OrnamentMotif';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Special Offers', href: '#offers' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-[#C8A24E]/30 bg-[#07140D] text-[#FAF7F0]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-serif text-2xl font-semibold tracking-[0.14em] uppercase text-[#FAF7F0] sm:text-3xl">
            UDUPI GRAND AL-KHUWAIR
          </p>
          <p className="mt-2 font-serif text-lg italic text-[#E5CA87]">
            Authentic Flavors. Traditional Hospitality.
          </p>

          <GoldHairlineDivider className="mt-6 text-[#C8A24E]" />

          {/* Quick Navigation Links */}
          <nav
            aria-label="Footer navigation"
            className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-[#FAF7F0]/80"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-[#E5CA87] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E] rounded-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact & Location */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#FAF7F0]/75">
            <span>{DEFAULT_LOCATION.address}</span>
            <span aria-hidden="true" className="text-[#C8A24E]/60">
              ·
            </span>
            <a
              href={DEFAULT_LOCATION.phoneHref}
              className="tabular-nums text-[#E5CA87] transition-colors hover:text-[#FAF7F0]"
            >
              {DEFAULT_LOCATION.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-[#FAF7F0]/12 pt-8 text-center text-xs text-[#FAF7F0]/55">
          <p>
            © {new Date().getFullYear()} Udupi Grand Al-Khuwair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
