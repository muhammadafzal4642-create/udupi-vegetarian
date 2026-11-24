import { motion } from 'motion/react';
import { Flame, Leaf, Sparkles, Utensils } from 'lucide-react';
import { WHY_CHOOSE_FEATURES } from '../data/restaurantData';

function FeatureIcon({ type }: { type: (typeof WHY_CHOOSE_FEATURES)[number]['icon'] }) {
  const iconClass = 'h-6 w-6 text-[#8E6B23]';
  switch (type) {
    case 'flame':
      return <Flame className={iconClass} strokeWidth={1.5} aria-hidden="true" />;
    case 'leaf':
      return <Leaf className={iconClass} strokeWidth={1.5} aria-hidden="true" />;
    case 'utensils':
      return <Utensils className={iconClass} strokeWidth={1.5} aria-hidden="true" />;
    case 'sparkles':
      return <Sparkles className={iconClass} strokeWidth={1.5} aria-hidden="true" />;
  }
}

export function WhyChooseUsSection() {
  return (
    <section className="border-y border-[#17231C]/10 bg-[#F3EDE0] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-[#17231C]/12 pb-10 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#8E6B23]">
              The Udupi Grand Standard
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-[#17231C] sm:text-4xl">
              Why Dine With Us
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#4C5C52] sm:text-base">
            Every detail of our dining room and kitchen reflects South Indian warmth, culinary
            integrity, and everyday generosity.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between border border-[#17231C]/12 bg-[#FAF7F0] p-7 transition-colors duration-200 hover:border-[#8E6B23]/60"
            >
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center border border-[#8E6B23]/30 bg-[#F3EDE0]">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold leading-snug text-[#17231C]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4C5C52]">
                  {feature.description}
                </p>
              </div>
              <p className="mt-6 border-t border-[#17231C]/10 pt-4 font-serif text-xs font-semibold tracking-[0.18em] uppercase text-[#8E6B23] tabular-nums">
                0{idx + 1}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
