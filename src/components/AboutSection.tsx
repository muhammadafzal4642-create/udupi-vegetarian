import { motion } from 'motion/react';
import { RESTAURANT_IMAGES } from '../data/restaurantData';
import { GoldHairlineDivider } from './OrnamentMotif';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section id="about" className="bg-[#FAF7F0] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Vertical Editorial Photography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[380px] sm:min-h-[480px] overflow-hidden border border-[#8E6B23]/25 bg-[#F3EDE0] p-2.5 sm:p-3.5">
              <ResilientImage
                src={RESTAURANT_IMAGES.aboutThali}
                alt="Traditional South Indian vegetarian dishes served in brass bowls beside fresh banana leaf"
                className="h-full w-full object-cover"
                fallbackTitle="Traditional Udupi Preparation"
              />
            </div>
          </motion.div>

          {/* Right Column: Editorial Prose */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6 lg:py-6"
          >
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#8E6B23]">
              Our Culinary Heritage
            </p>

            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.12] text-[#17231C] sm:text-4xl lg:text-5xl">
              A Taste of Tradition, Served with Love
            </h2>

            <div className="mt-6 flex justify-start">
              <GoldHairlineDivider className="text-[#8E6B23]" />
            </div>

            <p className="mt-6 text-base leading-relaxed text-[#4C5C52] sm:text-lg">
              Discover the authentic flavors of South Indian cuisine at Udupi Grand Al-Khuwair. From
              traditional vegetarian delicacies to comforting rice dishes and delicious curries,
              experience the joy of Indian dining.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#4C5C52]">
              Rooted in the time-honored culinary traditions of coastal Karnataka and South India,
              every meal is prepared fresh each day—honoring balanced spices, slow-simmered lentils,
              and the warmth of shared hospitality on every banana leaf.
            </p>

            {/* Editorial Highlights Row */}
            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-[#17231C]/12 pt-8 sm:grid-cols-3">
              <div>
                <p className="font-serif text-2xl font-semibold text-[#17231C] tabular-nums">20 Dishes</p>
                <p className="mt-1 text-xs leading-relaxed text-[#4C5C52]">
                  Complete banana leaf feast served in traditional sequence
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#17231C]">100% Vegetarian</p>
                <p className="mt-1 text-xs leading-relaxed text-[#4C5C52]">
                  Authentic Udupi kitchen honoring classic regional recipes
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-[#17231C]">Al Khuwair</p>
                <p className="mt-1 text-xs leading-relaxed text-[#4C5C52]">
                  Welcoming family dining near Zawai Masjid, Oman
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
