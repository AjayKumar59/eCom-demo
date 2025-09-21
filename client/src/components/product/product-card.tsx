import { Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { Link } from "wouter";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const rating = parseFloat(product.rating);
  const hasDiscount = product.originalPrice && parseFloat(product.originalPrice) > parseFloat(product.price);
  
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm product-hover" data-testid={`card-product-${product.id}`}>
      <Link href={`/products/${product.slug}`}>
        <div className="aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            data-testid={`img-product-${product.id}`}
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium text-foreground mb-2 hover:text-primary transition-colors line-clamp-2" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
        </Link>
        
        {rating > 0 && (
          <div className="flex items-center mb-2">
            <div className="flex mr-2" data-testid={`rating-${product.id}`}>
              {renderStars(rating)}
            </div>
            <span className="text-sm text-muted-foreground" data-testid={`text-review-count-${product.id}`}>
              ({product.reviewCount} {product.reviewCount === 1 ? 'review' : 'reviews'})
            </span>
          </div>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-foreground" data-testid={`text-price-${product.id}`}>
              Rs {parseFloat(product.price).toLocaleString()}
            </span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through" data-testid={`text-original-price-${product.id}`}>
                Rs {parseFloat(product.originalPrice!).toLocaleString()}
              </span>
            )}
          </div>
        </div>
        
        <Button
          className="w-full bg-primary text-primary-foreground hover:bg-terracotta-600 transition-colors"
          onClick={() => onAddToCart?.(product.id)}
          disabled={!product.inStock}
          data-testid={`button-add-to-cart-${product.id}`}
        >
          {product.inStock ? 'Choose Options' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
}
