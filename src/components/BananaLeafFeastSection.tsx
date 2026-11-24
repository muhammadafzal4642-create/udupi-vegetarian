import { useState } from 'react';
import { motion } from 'motion/react';
import {
  BANANA_LEAF_MENU_ITEMS,
  FeastMenuItem,
  RESTAURANT_IMAGES,
} from '../data/restaurantData';
import { BananaLeafBackdropPattern, GoldHairlineDivider } from './OrnamentMotif';
import { ResilientImage } from './ResilientImage';

type CourseFilter = 'All' | FeastMenuItem['course'];

const COURSE_FILTERS: { label: string; value: CourseFilter }[] = [
  { label: 'All 20 Items', value: 'All' },
  { label: 'Accompaniments & Coolers', value: 'Accompaniments & Coolers' },
  { label: 'Starters & Breads', value: 'Starters & Breads' },
  { label: 'Rice & Curries', value: 'Rice & Curries' },
  { label: 'Sweets & Finale', value: 'Sweets & Finale' },
];

export function BananaLeafFeastSection() {
  const [activeFilter, setActiveFilter] = useState<CourseFilter>('All');

  const visibleItems =
    activeFilter === 'All'
      ? BANANA_LEAF_MENU_ITEMS
      : BANANA_LEAF_MENU_ITEMS.filter((item) => item.course === activeFilter);

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-[#0B1F15] py-20 text-[#FAF7F0] sm:py-28"
    >
      <BananaLeafBackdropPattern />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header + Refined Gold Price Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start justify-between gap-8 border-b border-[#C8A24E]/25 pb-10 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E5CA87]">
              Signature Dining Experience
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#FAF7F0] sm:text-4xl lg:text-5xl">
              The Traditional Banana Leaf Feast
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#FAF7F0]/80">
              Twenty carefully curated dishes served in classical South Indian order atop a freshly
              washed banana leaf—crafted to balance cooling, spiced, crisp, and sweet notes.
            </p>
          </div>

          {/* Gold Price Callout */}
          <div className="shrink-0 border border-[#C8A24E]/50 bg-[#112D1F]/80 px-7 py-5 text-left lg:text-right">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#E5CA87]">
              Complete 20-Item Feast
            </p>
            <p className="mt-1 font-serif text-4xl font-semibold text-[#D4B263] tabular-nums sm:text-5xl">
              1.5 OMR
            </p>
          </div>
        </motion.div>

        {/* Feature Photograph + Course Filter Strip */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-24 border border-[#C8A24E]/30 bg-[#112D1F] p-3">
              <div className="aspect-[4/3] overflow-hidden">
                <ResilientImage
                  src={RESTAURANT_IMAGES.signatureFeast}
                  alt="Overhead spread of the 20-item Traditional Banana Leaf Feast at Udupi Grand Al-Khuwair"
                  className="h-full w-full object-cover"
                  fallbackTitle="The Traditional Banana Leaf Feast"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-[#C8A24E]/20 pt-3 text-xs text-[#FAF7F0]/75">
                <span>Served Fresh on Tender Banana Leaf</span>
                <span className="font-semibold text-[#E5CA87] tabular-nums">20 Items · 1.5 OMR</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Interactive Course Filter Bar */}
            <div
              role="tablist"
              aria-label="Filter feast items by course"
              className="mb-8 flex flex-wrap gap-2 border-b border-[#FAF7F0]/12 pb-4"
            >
              {COURSE_FILTERS.map((filter) => {
                const isActive = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`min-h-[40px] px-4 py-2 text-xs font-medium tracking-wide transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E] ${
                      isActive
                        ? 'border border-[#C8A24E] bg-[#C8A24E] text-[#0B1F15] font-semibold'
                        : 'border border-[#FAF7F0]/15 bg-transparent text-[#FAF7F0]/80 hover:border-[#C8A24E]/50 hover:text-[#E5CA87]'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* 20-Item Menu Grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-baseline justify-between gap-4 border-b border-[#FAF7F0]/12 py-3.5 transition-colors duration-150 hover:border-[#C8A24E]/60"
                >
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-sm font-semibold text-[#C8A24E] tabular-nums">
                        {String(item.id).padStart(2, '0')}.
                      </span>
                      <h3 className="font-serif text-xl font-medium text-[#FAF7F0] transition-colors duration-150 group-hover:text-[#E5CA87]">
                        {item.name}
                      </h3>
                    </div>
                    <p className="mt-1 pl-7 text-xs leading-relaxed text-[#FAF7F0]/65">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-[#C8A24E]/25 bg-[#112D1F]/65 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="font-serif text-xl text-[#E5CA87]">
                  Served warm with traditional South Indian hospitality
                </p>
                <p className="mt-1 text-xs text-[#FAF7F0]/75">
                  Reserve your feast or inquire for family and group dining.
                </p>
              </div>
              <a
                href="#offers"
                className="inline-flex min-h-[44px] items-center border border-[#C8A24E] px-5 py-2.5 text-xs font-semibold tracking-wide text-[#E5CA87] transition-colors hover:bg-[#C8A24E] hover:text-[#0B1F15] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E]"
              >
                View Special Offer
              </a>
            </div>
          </div>
        </div>

        <GoldHairlineDivider className="mt-16 text-[#C8A24E]" />
      </div>
    </section>
  );
}
