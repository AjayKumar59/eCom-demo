import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" data-testid="hero-section">
      <div className="relative h-96 lg:h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=800" 
          alt="Beautiful bedroom setup with traditional Indian bedsheets" 
          className="w-full h-full object-cover"
          data-testid="hero-image"
        />
        <div className="absolute inset-0 hero-gradient flex items-center justify-center">
          <div className="text-center text-white max-w-2xl mx-auto px-4">
            <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-4" data-testid="hero-title">
              Handcrafted Beauty
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90" data-testid="hero-description">
              Discover our collection of 100% cotton hand-block printed bedsheets
            </p>
            <Link href="/collections/hand-block-printed-bedsheets">
              <Button 
                className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                data-testid="button-shop-bedsheets"
              >
                Shop Bedsheets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
