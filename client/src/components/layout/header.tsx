import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Link } from "wouter";

interface HeaderProps {
  onCartOpen: () => void;
}

export function Header({ onCartOpen }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const navigationItems = [
    {
      name: "Bedding",
      href: "/collections/bedding",
      submenu: [
        { name: "Bedsheets", href: "/collections/hand-block-printed-bedsheets" },
        { name: "Fitted Bedsheets", href: "/collections/fitted-bedsheet" },
        { name: "Jaipuri Razais", href: "/collections/jaipuri-razai" },
        { name: "Dohars", href: "/collections/dohars" },
      ]
    },
    {
      name: "Dining",
      href: "/collections/dining",
      submenu: [
        { name: "Table Covers", href: "/collections/table-covers" },
        { name: "Round Table Covers", href: "/collections/round-table-covers" },
        { name: "Table Mats", href: "/collections/table-mats-napkins" },
        { name: "Table Runner", href: "/collections/table-runner" },
      ]
    },
    { name: "Sale", href: "/collections/sale" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 bg-white z-30 border-b border-border">
      {/* Promotional Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        <div className="container mx-auto px-4" data-testid="promo-banner">
          🎁 Free delivery on orders above Rs 2000 | Get 15% off on orders above Rs 6000
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
          onClick={() => setIsMobileMenuOpen(false)}
          data-testid="mobile-menu-overlay"
        />
      )}
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg lg:hidden animate-in slide-in-from-top duration-300">
          <div className="flex justify-between items-center p-4 border-b border-border">
            <h2 className="text-lg font-serif font-semibold text-foreground" data-testid="mobile-menu-title">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="button-close-mobile-menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="p-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link 
                  href={item.href} 
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`link-mobile-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            data-testid="button-open-mobile-menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* Logo */}
          <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
            <Link href="/" data-testid="link-logo">
              <h1 className="text-2xl lg:text-3xl font-serif font-bold text-primary">Namya Living</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href} 
                  className="text-foreground hover:text-primary transition-colors py-2"
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm text-foreground hover:text-primary"
                        data-testid={`link-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              data-testid="button-search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              data-testid="button-user"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartOpen}
              className="relative"
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span 
                  className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  data-testid="cart-item-count"
                >
                  {itemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
