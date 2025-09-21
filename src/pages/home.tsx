import { HeroSection } from "@/components/home/hero-section";
import { PromoBanners } from "@/components/home/promo-banners";
import { CategoryGrid } from "@/components/home/category-grid";
import { Bestsellers } from "@/components/home/bestsellers";
import { InstagramFeed } from "@/components/home/instagram-feed";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <PromoBanners />
      <CategoryGrid />
      <Bestsellers />
      <InstagramFeed />
      <Newsletter />
    </div>
  );
}
