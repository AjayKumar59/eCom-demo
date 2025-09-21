import { useState } from "react";
import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, itemCount, totalPrice, updateQuantity, removeItem, clearCart, isLoading } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40" 
        onClick={onClose}
        data-testid="cart-overlay"
      />
      
      {/* Sidebar */}
      <div className={`cart-slide fixed top-0 right-0 w-full max-w-md h-full bg-white z-50 shadow-xl ${isOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-lg font-serif font-semibold text-foreground" data-testid="cart-title">
            Your Cart
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            data-testid="button-close-cart"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading cart...</p>
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 px-6">
              <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2" data-testid="text-empty-cart">
                Your cart is empty
              </h3>
              <p className="text-muted-foreground mb-6">
                Add some beautiful bedsheets to get started!
              </p>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-terracotta-600" 
                onClick={onClose}
                data-testid="button-continue-shopping"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className="p-6 space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-border pb-4" data-testid={`cart-item-${item.id}`}>
                    {item.product && (
                      <>
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                          data-testid={`img-product-${item.id}`}
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-foreground" data-testid={`text-product-name-${item.id}`}>
                            {item.product.name}
                          </h4>
                          {item.size && (
                            <p className="text-xs text-muted-foreground" data-testid={`text-size-${item.id}`}>
                              Size: {item.size}
                            </p>
                          )}
                          {item.color && (
                            <p className="text-xs text-muted-foreground" data-testid={`text-color-${item.id}`}>
                              Color: {item.color}
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                data-testid={`button-decrease-${item.id}`}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center" data-testid={`text-quantity-${item.id}`}>
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                data-testid={`button-increase-${item.id}`}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 text-destructive hover:text-destructive"
                              onClick={() => removeItem(item.id)}
                              data-testid={`button-remove-${item.id}`}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                          <p className="text-sm font-semibold text-foreground mt-1" data-testid={`text-price-${item.id}`}>
                            Rs {(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span data-testid="text-subtotal-label">Subtotal</span>
                  <span data-testid="text-subtotal-amount">Rs {totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tax included. Shipping calculated at checkout.
                </p>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-terracotta-600"
                  data-testid="button-checkout"
                >
                  Check out
                </Button>
                {items.length > 0 && (
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearCart}
                    data-testid="button-clear-cart"
                  >
                    Clear Cart
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
