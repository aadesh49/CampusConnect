import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Faqs from "@/components/Faqs";
import {FeaturedSection} from "@/components/FeaturedSection";
import HowItWorks from "@/components/HowItWorks";


export default function Home() {
  return (
    <>
      <main>
        <Hero/>
        <FeaturedSection />
        <HowItWorks />
        <Faqs />
        <Footer />
      </main>
    </>
  );
}
