import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product";
import { ProductGrid } from "@/components/product/product-grid";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import axios from "axios";

export function Bestsellers() {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products", { featured: true }],
    queryFn: async () => {
      const res = await axios.get("https://raw.githubusercontent.com/AjayKumar59/eCom-demo/main/apis/products.json"); // static API call
      // console.log('res=---',res)
      return res.data;
    },
    // queryFn: () => fetch("/api/products?featured=true").then(res => res.json()),
  });

  if (isLoading) {
    return (
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-foreground mb-12">
            BESTSELLING BEDSHEETS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm animate-pulse">
                <div className="w-full h-64 bg-muted"></div>
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                  <div className="h-8 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-muted" data-testid="bestsellers-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-foreground mb-12" data-testid="bestsellers-title">
          BESTSELLING BEDSHEETS
        </h2>
        <ProductGrid products={products} columns={4} />
        <div className="text-center mt-8">
          <Link href="/collections/hand-block-printed-bedsheets">
            <Button 
              className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium hover:bg-teal-600 transition-colors"
              data-testid="button-view-all-bedsheets"
            >
              View All Bedsheets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
