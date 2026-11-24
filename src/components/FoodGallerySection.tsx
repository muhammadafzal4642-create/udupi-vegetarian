import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { GoldHairlineDivider } from './OrnamentMotif';
import { ResilientImage } from './ResilientImage';

export function FoodGallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!selectedItem) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedItem]);

  return (
    <section id="gallery" className="bg-[#FAF7F0] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#8E6B23]">
            Culinary Gallery
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#17231C] sm:text-4xl lg:text-5xl">
            Crafted Fresh Every Day
          </h2>
          <GoldHairlineDivider className="mt-5 text-[#8E6B23]" />
          <p className="mt-5 text-base leading-relaxed text-[#4C5C52]">
            From traditional banana leaf meals and vegetarian thalis to fragrant rice dishes,
            golden pooris, and warm payasa.
          </p>
        </div>

        {/* Responsive 3-column uniform aspect gallery grid */}
        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-[#17231C]/12 bg-[#F3EDE0] transition-colors duration-200 hover:border-[#8E6B23]/55"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E6B23]"
                aria-label={`Inspect ${item.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#112D1F]">
                  <ResilientImage
                    src={item.imageSrc}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    fallbackTitle={item.title}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#07140D]/0 transition-colors duration-200 group-hover:bg-[#07140D]/20"
                  />
                  <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-[#0B1F15]/80 text-[#E5CA87] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <Maximize2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#8E6B23]">
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 font-serif text-2xl font-semibold text-[#17231C]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4C5C52]">{item.caption}</p>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07140D]/90 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full border border-[#C8A24E]/45 bg-[#0B1F15] p-4 sm:p-6 text-[#FAF7F0]"
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              aria-label="Close image preview"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center border border-[#C8A24E]/40 bg-[#0B1F15]/90 text-[#E5CA87] transition-colors hover:border-[#C8A24E] hover:bg-[#112D1F]"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-[4/3] w-full overflow-hidden bg-[#07140D]">
              <ResilientImage
                src={selectedItem.imageSrc}
                alt={selectedItem.alt}
                className="h-full w-full object-cover"
                fallbackTitle={selectedItem.title}
              />
            </div>
            <div className="mt-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#E5CA87]">
                  {selectedItem.category}
                </p>
                <h3 className="mt-1 font-serif text-2xl font-semibold text-[#FAF7F0] sm:text-3xl">
                  {selectedItem.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#FAF7F0]/80">{selectedItem.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
