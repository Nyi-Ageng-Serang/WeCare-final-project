import ArtikelSection from "./ArtikelSection";
import CeritaSuksesSection from "./CeritaSuksesSection";
import CommunityCTA from "./CTAkomunitas";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import NewsSection from "./NewsSection";

function BlogPage() {
  return (
    <>
      <HeroSection/>
      <ArtikelSection/>
      <CommunityCTA/>
      <NewsSection/>
      <FAQSection/>
      <CeritaSuksesSection/>
    </>
  );
}

export default BlogPage;
