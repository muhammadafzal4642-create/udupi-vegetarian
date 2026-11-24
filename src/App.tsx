/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AboutSection } from './components/AboutSection';
import { BananaLeafFeastSection } from './components/BananaLeafFeastSection';
import { FoodGallerySection } from './components/FoodGallerySection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Navbar } from './components/Navbar';
import { SpecialOfferSection } from './components/SpecialOfferSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#17231C]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BananaLeafFeastSection />
        <SpecialOfferSection />
        <FoodGallerySection />
        <WhyChooseUsSection />
        <LocationContactSection />
      </main>
      <Footer />
    </div>
  );
}
