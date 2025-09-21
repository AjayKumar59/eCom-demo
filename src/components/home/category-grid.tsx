import { useQuery } from "@tanstack/react-query";
import { Category } from "@/types/product";
import { Link } from "wouter";
import axios from "axios";
export function CategoryGrid() {
  const { data: categories = [], isLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
    queryFn: async () => {
      const res = await axios.get("https://raw.githubusercontent.com/AjayKumar59/eCom-demo/main/apis/categories.json"); // static API call
      console.log('res=---',res)
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-foreground mb-12">
            What are you looking for?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden animate-pulse">
                <div className="w-full h-48 lg:h-64 bg-muted"></div>
                <div className="p-4">
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-3 bg-muted rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12" data-testid="category-grid">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-foreground mb-12" data-testid="category-grid-title">
          What are you looking for?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/collections/${category.slug}`}>
              <div className="relative group cursor-pointer product-hover bg-card rounded-lg overflow-hidden" data-testid={`category-card-${category.slug}`}>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-48 lg:h-64 object-cover"
                  data-testid={`img-category-${category.slug}`}
                />
                <div className="absolute inset-0 category-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-4">
                  <h3 className="font-serif font-semibold text-foreground mb-1" data-testid={`text-category-name-${category.slug}`}>
                    {category.name.toUpperCase()}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-category-description-${category.slug}`}>
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
