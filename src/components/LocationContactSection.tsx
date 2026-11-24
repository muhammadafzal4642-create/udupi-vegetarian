import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Check, MapPin, MessageCircle, Navigation, Phone, RotateCcw, Settings2 } from 'lucide-react';
import { DEFAULT_LOCATION } from '../data/restaurantData';
import { GoldHairlineDivider } from './OrnamentMotif';

const MAP_STORAGE_KEY = 'ugak_location_config_v1';

interface StoredLocationState {
  mapQuery: string;
  customMapsUrl: string;
}

export function LocationContactSection() {
  const [locationPrefs, setLocationPrefs] = useState<StoredLocationState>(() => {
    try {
      const saved = localStorage.getItem(MAP_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          mapQuery: parsed.mapQuery || DEFAULT_LOCATION.mapQuery,
          customMapsUrl: parsed.customMapsUrl || DEFAULT_LOCATION.customMapsUrl,
        };
      }
    } catch {
      // Ignore storage errors
    }
    return {
      mapQuery: DEFAULT_LOCATION.mapQuery,
      customMapsUrl: DEFAULT_LOCATION.customMapsUrl,
    };
  });

  const [showConfig, setShowConfig] = useState(false);
  const [draftQuery, setDraftQuery] = useState(locationPrefs.mapQuery);
  const [draftUrl, setDraftUrl] = useState(locationPrefs.customMapsUrl);

  useEffect(() => {
    try {
      localStorage.setItem(MAP_STORAGE_KEY, JSON.stringify(locationPrefs));
    } catch {
      // Ignore storage errors
    }
  }, [locationPrefs]);

  const handleSaveLocation = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = draftQuery.trim() || DEFAULT_LOCATION.mapQuery;
    const cleanUrl =
      draftUrl.trim() ||
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleanQuery)}`;
    setLocationPrefs({ mapQuery: cleanQuery, customMapsUrl: cleanUrl });
    setShowConfig(false);
  };

  const handleResetLocation = () => {
    const defaults = {
      mapQuery: DEFAULT_LOCATION.mapQuery,
      customMapsUrl: DEFAULT_LOCATION.customMapsUrl,
    };
    setLocationPrefs(defaults);
    setDraftQuery(defaults.mapQuery);
    setDraftUrl(defaults.customMapsUrl);
    setShowConfig(false);
  };

  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    locationPrefs.mapQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const whatsappUrl = `https://wa.me/${DEFAULT_LOCATION.whatsappDigits}?text=${encodeURIComponent(
    'Hello Udupi Grand Al-Khuwair! I would like to inquire about dining and the Banana Leaf Meal.'
  )}`;

  return (
    <section id="location" className="bg-[#FAF7F0] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#8E6B23]">
            Location & Hospitality
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-[#17231C] sm:text-4xl lg:text-5xl">
            Visit Us & Enjoy Authentic Flavors
          </h2>
          <GoldHairlineDivider className="mt-5 text-[#8E6B23]" />
        </div>

        <div
          id="contact"
          className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12"
        >
          {/* Left Column: Contact Card & Direct Conversion CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between border border-[#17231C]/12 bg-[#0B1F15] p-8 text-[#FAF7F0] sm:p-10 lg:col-span-5"
          >
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#E5CA87]">
                Restaurant Details
              </p>
              <h3 className="mt-3 font-serif text-3xl font-semibold text-[#FAF7F0]">
                {DEFAULT_LOCATION.restaurantName}
              </h3>

              <div className="mt-8 space-y-6 border-t border-[#C8A24E]/25 pt-8">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#C8A24E]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#E5CA87]/80">
                      Address
                    </p>
                    <p className="mt-1 text-base leading-relaxed text-[#FAF7F0]">
                      {DEFAULT_LOCATION.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[#C8A24E]" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium tracking-[0.16em] uppercase text-[#E5CA87]/80">
                      Mobile & WhatsApp
                    </p>
                    <a
                      href={DEFAULT_LOCATION.phoneHref}
                      className="mt-1 inline-block font-serif text-2xl font-semibold text-[#FAF7F0] tabular-nums transition-colors hover:text-[#E5CA87]"
                    >
                      {DEFAULT_LOCATION.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-10 space-y-3 border-t border-[#C8A24E]/25 pt-8">
              <a
                href={DEFAULT_LOCATION.phoneHref}
                className="flex min-h-[48px] w-full items-center justify-center gap-2.5 bg-[#C8A24E] px-6 py-3 text-sm font-semibold text-[#0B1F15] transition-colors hover:bg-[#D4B263] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5CA87]"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call Now · {DEFAULT_LOCATION.phoneDisplay}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] w-full items-center justify-center gap-2.5 border border-[#C8A24E]/60 bg-[#112D1F] px-6 py-3 text-sm font-semibold text-[#E5CA87] transition-colors hover:border-[#C8A24E] hover:bg-[#193E2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={locationPrefs.customMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] w-full items-center justify-center gap-2.5 border border-[#FAF7F0]/25 px-6 py-3 text-sm font-medium text-[#FAF7F0] transition-colors hover:border-[#C8A24E] hover:text-[#E5CA87] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A24E]"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Configurable Embedded Map */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col border border-[#17231C]/15 bg-[#F3EDE0] p-3 sm:p-4 lg:col-span-7"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2 text-xs font-medium text-[#4C5C52]">
                <MapPin className="h-4 w-4 text-[#8E6B23]" aria-hidden="true" />
                <span>Map Preview · {locationPrefs.mapQuery}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setDraftQuery(locationPrefs.mapQuery);
                  setDraftUrl(locationPrefs.customMapsUrl);
                  setShowConfig((prev) => !prev);
                }}
                className="inline-flex min-h-[36px] items-center gap-1.5 border border-[#8E6B23]/35 bg-[#FAF7F0] px-3 py-1.5 text-xs font-medium text-[#17231C] transition-colors hover:border-[#8E6B23] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E6B23]"
              >
                <Settings2 className="h-3.5 w-3.5 text-[#8E6B23]" aria-hidden="true" />
                <span>{showConfig ? 'Hide Map Setup' : 'Configure Verified Location'}</span>
              </button>
            </div>

            {showConfig && (
              <form
                onSubmit={handleSaveLocation}
                className="mb-4 space-y-3 border border-[#8E6B23]/35 bg-[#FAF7F0] p-4"
              >
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#8E6B23]">
                  Configure Exact Restaurant Pin
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="block text-xs text-[#4C5C52]">
                    Map Search Query or Coordinates (lat, lng)
                    <input
                      type="text"
                      value={draftQuery}
                      onChange={(e) => setDraftQuery(e.target.value)}
                      placeholder="e.g. 23.5917, 58.4095 or Near Zawai Masjid"
                      className="mt-1 w-full border border-[#17231C]/20 bg-white px-3 py-2 text-sm text-[#17231C] focus:border-[#8E6B23] focus:outline-none"
                    />
                  </label>
                  <label className="block text-xs text-[#4C5C52]">
                    Verified Google Maps Directions URL
                    <input
                      type="url"
                      value={draftUrl}
                      onChange={(e) => setDraftUrl(e.target.value)}
                      placeholder="https://maps.google.com/..."
                      className="mt-1 w-full border border-[#17231C]/20 bg-white px-3 py-2 text-sm text-[#17231C] focus:border-[#8E6B23] focus:outline-none"
                    />
                  </label>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 bg-[#0B1F15] px-4 py-2 text-xs font-semibold text-[#FAF7F0] transition-colors hover:bg-[#193E2B]"
                  >
                    <Check className="h-3.5 w-3.5 text-[#E5CA87]" aria-hidden="true" />
                    <span>Apply Location</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleResetLocation}
                    className="inline-flex items-center gap-1.5 border border-[#17231C]/20 px-3 py-2 text-xs font-medium text-[#4C5C52] transition-colors hover:border-[#8E6B23] hover:text-[#17231C]"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Reset</span>
                  </button>
                </div>
              </form>
            )}

            <div className="relative flex-1 min-h-[360px] overflow-hidden border border-[#17231C]/12 bg-[#E6DCC7]">
              <iframe
                title="Udupi Grand Al-Khuwair Location Map"
                src={embedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[360px] w-full border-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
