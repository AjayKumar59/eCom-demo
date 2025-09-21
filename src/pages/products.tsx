import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { Product, Category } from "@/types/product";
import { ProductGrid } from "@/components/product/product-grid";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "wouter";

export default function Products() {
  const [location] = useLocation();
  const categorySlug = location.split('/').pop();

  const { data: category, isLoading: categoryLoading } = useQuery<Category>({
    queryKey: ["/api/categories", categorySlug],
    enabled: !!categorySlug,
  });

  const { data: products = [], isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products", { categoryId: category?.id }],
    queryFn: () => fetch(`/api/products${category?.id ? `?categoryId=${category.id}` : ''}`).then(res => res.json()),
    enabled: !!category?.id,
  });

  if (categoryLoading || productsLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-48 mb-4"></div>
            <div className="h-12 bg-muted rounded w-96 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, i) => (
                <div key={i} className="bg-card rounded-lg overflow-hidden">
                  <div className="w-full h-64 bg-muted"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Category not found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" data-testid="products-page">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="p-0" data-testid="button-back">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4" data-testid="category-title">
            {category.name}
          </h1>
          {category.description && (
            <p className="text-muted-foreground text-lg" data-testid="category-description">
              {category.description}
            </p>
          )}
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <>
            <div className="mb-6">
              <p className="text-muted-foreground" data-testid="product-count">
                {products.length} {products.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            <ProductGrid products={products} columns={3} />
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-foreground mb-2" data-testid="no-products-title">
              No products found
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="no-products-description">
              We don't have any products in this category yet.
            </p>
            <Link href="/">
              <Button data-testid="button-browse-categories">Browse Other Categories</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
