import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { RESTAURANT_IMAGES } from '../data/restaurantData';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#07140D]"
    >
      {/* Full-bleed high-resolution photography */}
      <div className="absolute inset-0">
        <ResilientImage
          src={RESTAURANT_IMAGES.heroFeast}
          alt="Authentic South Indian banana leaf meal with steamed white rice, sambar, coconut chutney, papad, and golden poori"
          loading="eager"
          className="h-full w-full object-cover object-center"
          fallbackTitle="Udupi Grand Al-Khuwair"
        />
        {/* Measured contrast scrims for WCAG AA legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#07140D]/95 via-[#0B1F15]/75 to-[#0B1F15]/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#07140D] via-transparent to-[#07140D]/60"
        />
      </div>

      {/* Subtle gold architectural frame inset */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 sm:inset-8 border border-[#C8A24E]/20"
      />

      {/* Hero Editorial Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-28 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Quiet unboxed location metadata */}
          <p className="mb-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-[#E5CA87]">
            <span>Al Khuwair, Oman</span>
            <span aria-hidden="true" className="text-[#C8A24E]/60">
              ·
            </span>
            <span>Traditional Banana Leaf Dining</span>
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-[#FAF7F0] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Udupi Grand Al-Khuwair
          </h1>

          <p className="mt-4 font-serif text-xl italic font-normal text-[#E5CA87] sm:text-2xl md:text-[1.75rem]">
            Experience the Authentic Taste of South India
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#FAF7F0]/85 sm:text-lg">
            Discover the richness of traditional South Indian cuisine, served with authentic flavors,
            warm hospitality, and the timeless tradition of banana leaf dining.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="inline-flex min-h-[48px] items-center gap-3 border border-[#C8A24E] bg-[#C8A24E] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#0B1F15] transition-all duration-150 hover:bg-[#D4B263] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5CA87] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07140D]"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-[48px] items-center gap-2 border border-[#FAF7F0]/40 bg-[#0B1F15]/45 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#FAF7F0] backdrop-blur-sm transition-colors duration-150 hover:border-[#C8A24E] hover:text-[#E5CA87] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E]"
            >
              <span>Contact Us</span>
            </a>
          </div>

          {/* Unboxed quiet details strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#FAF7F0]/15 pt-6 text-xs sm:text-sm text-[#FAF7F0]/75">
            <span>Near Zawai Masjid, Al Khuwair</span>
            <span aria-hidden="true" className="text-[#C8A24E]/60">
              ·
            </span>
            <span className="tabular-nums text-[#E5CA87]">Signature Feast 1.5 OMR</span>
            <span aria-hidden="true" className="text-[#C8A24E]/60">
              ·
            </span>
            <span className="tabular-nums">+968 76321883</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[#E5CA87]/80 transition-colors hover:text-[#E5CA87] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E] rounded-sm p-1"
      >
        <span className="text-[11px] font-medium tracking-[0.22em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
