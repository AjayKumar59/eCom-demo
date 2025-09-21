import { Truck, Percent, Tag } from "lucide-react";

export function PromoBanners() {
  return (
    <section className="py-8" data-testid="promo-banners">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-accent text-accent-foreground rounded-lg p-6 text-center" data-testid="promo-free-delivery">
            <Truck className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">Free Delivery</h3>
            <p className="text-sm opacity-90">On orders above Rs 2000</p>
          </div>
          <div className="bg-secondary text-secondary-foreground rounded-lg p-6 text-center" data-testid="promo-15-off">
            <Percent className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">15% Off</h3>
            <p className="text-sm opacity-90">On orders above Rs 6000</p>
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center" data-testid="promo-20-off">
            <Tag className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-1">20% Off</h3>
            <p className="text-sm opacity-90">On orders above Rs 15000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
