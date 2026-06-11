import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import VillaHighlightsSection from '@/components/VillaHighlightsSection'
import FeaturesSection from '@/components/FeaturesSection'
import FloorPlansSection from '@/components/FloorPlansSection'
import LocationSection from '@/components/LocationSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VillaHighlightsSection />
      <FeaturesSection />
      <FloorPlansSection />
      <LocationSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactSection />
      <Footer />
    </main>
  )
}

