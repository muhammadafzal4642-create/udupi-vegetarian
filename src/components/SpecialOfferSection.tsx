import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MessageCircle, Pencil, Phone, RotateCcw, Check } from 'lucide-react';
import {
  DEFAULT_LOCATION,
  DEFAULT_OFFER,
  OfferConfig,
  RESTAURANT_IMAGES,
} from '../data/restaurantData';
import { ResilientImage } from './ResilientImage';

const STORAGE_KEY = 'ugak_special_offer_v1';

export function SpecialOfferSection() {
  const [offer, setOffer] = useState<OfferConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_OFFER, ...JSON.parse(saved) };
      }
    } catch {
      // Ignore storage read errors
    }
    return DEFAULT_OFFER;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<OfferConfig>(offer);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(offer));
    } catch {
      // Ignore storage write errors
    }
  }, [offer]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setOffer({
      title: draft.title.trim() || DEFAULT_OFFER.title,
      price: draft.price.trim() || DEFAULT_OFFER.price,
      date: draft.date.trim() || DEFAULT_OFFER.date,
      time: draft.time.trim() || DEFAULT_OFFER.time,
      note: draft.note.trim() || DEFAULT_OFFER.note,
    });
    setIsEditing(false);
  };

  const handleReset = () => {
    setOffer(DEFAULT_OFFER);
    setDraft(DEFAULT_OFFER);
    setIsEditing(false);
  };

  const whatsappUrl = `https://wa.me/${DEFAULT_LOCATION.whatsappDigits}?text=${encodeURIComponent(
    `Hello Udupi Grand Al-Khuwair, I would like to inquire about the ${offer.title} (${offer.price}) on ${offer.date}, ${offer.time}.`
  )}`;

  return (
    <section id="offers" className="bg-[#F3EDE0] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border border-[#8E6B23]/35 bg-[#0B1F15] p-3 sm:p-5"
        >
          <div className="grid grid-cols-1 items-stretch border border-[#C8A24E]/45 lg:grid-cols-12">
            {/* Left Promotional Visual */}
            <div className="relative min-h-[320px] lg:col-span-6">
              <ResilientImage
                src={RESTAURANT_IMAGES.heroFeast}
                alt="Special Banana Leaf Meal promotion at Udupi Grand Al-Khuwair"
                className="h-full w-full object-cover"
                fallbackTitle="Banana Leaf Meal Special"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#07140D]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0B1F15]/45"
              />
            </div>

            {/* Right Promotional Details */}
            <div className="flex flex-col justify-between bg-[#0B1F15] p-7 text-[#FAF7F0] sm:p-10 lg:col-span-6 lg:p-12">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#E5CA87]">
                    Featured Invitation
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setDraft(offer);
                      setIsEditing((prev) => !prev);
                    }}
                    className="inline-flex min-h-[36px] items-center gap-1.5 border border-[#C8A24E]/35 px-3 py-1.5 text-xs font-medium text-[#E5CA87] transition-colors hover:border-[#C8A24E] hover:bg-[#112D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E]"
                  >
                    <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{isEditing ? 'Close Editor' : 'Edit Offer Schedule'}</span>
                  </button>
                </div>

                <h2 className="mt-5 font-serif text-3xl font-semibold tracking-wide text-[#FAF7F0] sm:text-4xl lg:text-[2.75rem]">
                  {offer.title}
                </h2>

                <p className="mt-2 font-serif text-3xl font-semibold text-[#D4B263] tabular-nums sm:text-4xl">
                  {offer.price}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#FAF7F0]/80 sm:text-base">
                  {offer.note}
                </p>

                {/* Date and Time Block */}
                <div className="mt-8 grid grid-cols-1 gap-4 border-y border-[#C8A24E]/25 py-6 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A24E]" aria-hidden="true" />
                    <div>
                      <p className="text-xs tracking-[0.16em] uppercase text-[#E5CA87]/80">Date</p>
                      <p className="mt-1 font-serif text-xl font-medium text-[#FAF7F0]">
                        {offer.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A24E]" aria-hidden="true" />
                    <div>
                      <p className="text-xs tracking-[0.16em] uppercase text-[#E5CA87]/80">Time</p>
                      <p className="mt-1 font-serif text-xl font-medium text-[#FAF7F0] tabular-nums">
                        {offer.time}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Editable Offer Panel for Future Offers */}
                {isEditing && (
                  <form
                    onSubmit={handleSave}
                    className="mt-6 space-y-4 border border-[#C8A24E]/35 bg-[#112D1F] p-5"
                  >
                    <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#E5CA87]">
                      Update Promotional Schedule
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <label className="block text-xs text-[#FAF7F0]/80">
                        Offer Title
                        <input
                          type="text"
                          value={draft.title}
                          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                          className="mt-1 w-full border border-[#C8A24E]/35 bg-[#0B1F15] px-3 py-2 text-sm text-[#FAF7F0] focus:border-[#C8A24E] focus:outline-none"
                        />
                      </label>
                      <label className="block text-xs text-[#FAF7F0]/80">
                        Price Display
                        <input
                          type="text"
                          value={draft.price}
                          onChange={(e) => setDraft({ ...draft, price: e.target.value })}
                          className="mt-1 w-full border border-[#C8A24E]/35 bg-[#0B1F15] px-3 py-2 text-sm text-[#FAF7F0] focus:border-[#C8A24E] focus:outline-none"
                        />
                      </label>
                      <label className="block text-xs text-[#FAF7F0]/80">
                        Date
                        <input
                          type="text"
                          value={draft.date}
                          onChange={(e) => setDraft({ ...draft, date: e.target.value })}
                          className="mt-1 w-full border border-[#C8A24E]/35 bg-[#0B1F15] px-3 py-2 text-sm text-[#FAF7F0] focus:border-[#C8A24E] focus:outline-none"
                        />
                      </label>
                      <label className="block text-xs text-[#FAF7F0]/80">
                        Time
                        <input
                          type="text"
                          value={draft.time}
                          onChange={(e) => setDraft({ ...draft, time: e.target.value })}
                          className="mt-1 w-full border border-[#C8A24E]/35 bg-[#0B1F15] px-3 py-2 text-sm text-[#FAF7F0] focus:border-[#C8A24E] focus:outline-none"
                        />
                      </label>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-1.5 bg-[#C8A24E] px-4 py-2 text-xs font-semibold text-[#0B1F15] transition-colors hover:bg-[#D4B263]"
                      >
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Save Changes</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1.5 border border-[#FAF7F0]/25 px-3 py-2 text-xs font-medium text-[#FAF7F0]/80 transition-colors hover:border-[#C8A24E] hover:text-[#E5CA87]"
                      >
                        <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Reset Default</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Prominent Contact CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2.5 bg-[#C8A24E] px-6 py-3 text-sm font-semibold text-[#0B1F15] transition-colors hover:bg-[#D4B263] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5CA87]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Book via WhatsApp</span>
                </a>
                <a
                  href={DEFAULT_LOCATION.phoneHref}
                  className="inline-flex min-h-[48px] items-center gap-2 border border-[#FAF7F0]/35 px-6 py-3 text-sm font-semibold text-[#FAF7F0] transition-colors hover:border-[#C8A24E] hover:text-[#E5CA87] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span className="tabular-nums">{DEFAULT_LOCATION.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
