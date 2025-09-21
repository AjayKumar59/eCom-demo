import { ProductCard } from "./product-card";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

export function ProductGrid({ products, columns = 4 }: ProductGridProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (productId: string) => {
    // For now, add with default values - in a real app, this would open a modal for size/color selection
    addToCart(productId, 1);
    toast({
      title: "Added to cart",
      description: "Product has been added to your cart.",
    });
  };

  const getGridClasses = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
      default:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
    }
  };

  return (
    <div className={`grid ${getGridClasses()} gap-6`} data-testid="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
