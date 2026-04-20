import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Preview from "@/components/sections/ProductPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import Footer from "@/components/layout/Footer";
import GlowBackground from "@/components/shared/GlowBackground";
import PlatformAnswers from "@/components/sections/PlatformAnswers";
export default function Home() {
  return (
    <main>
      <GlowBackground />
      <Navbar />
      <Hero />
      <PlatformAnswers />
      <Features />
      <Preview />
      <HowItWorks />
      <Footer />
    </main>
  );
}