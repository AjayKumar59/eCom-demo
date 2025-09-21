import { Facebook, Instagram, BookmarkPlus, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4" data-testid="footer-brand">Namya Living</h3>
            <p className="text-secondary-foreground opacity-80 mb-4" data-testid="footer-description">
              Handcrafted home textiles made with love. 100% cotton, hand-block printed bedsheets and home decor.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-secondary-foreground hover:text-white transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-secondary-foreground hover:text-white transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-secondary-foreground hover:text-white transition-colors"
                data-testid="link-pinterest"
              >
                <BookmarkPlus className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-secondary-foreground hover:text-white transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-quick-links-title">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/shipping-policy" 
                  className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-shipping-policy"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/return-policy" 
                  className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-return-policy"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/size-guide" 
                  className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-size-guide"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-categories-title">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/collections/hand-block-printed-bedsheets" 
                  className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-bedsheets"
                >
                  Bedsheets
                </Link>
              </li>
              <li>
                <Link 
                  href="/collections/fitted-bedsheet" 
                  className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-fitted-bedsheets"
                >
                  Fitted Bedsheets
                </Link>
              </li>
              <li>
                <Link 
                  href="/collections/jaipuri-razai" 
                  className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-jaipuri-razais"
                >
                  Jaipuri Razais
                </Link>
              </li>
              <li>
                <Link 
                  href="/collections/table-covers" 
                  className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-table-covers"
                >
                  Table Covers
                </Link>
              </li>
              <li>
                <Link 
                  href="/collections/sale" 
                  className="text-secondary-foreground opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-clearance-sale"
                >
                  Clearance Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-contact-title">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-secondary-foreground opacity-80 flex items-center" data-testid="contact-address">
                <MapPin className="h-4 w-4 mr-2" />
                Jaipur, Rajasthan, India
              </li>
              <li className="text-secondary-foreground opacity-80 flex items-center" data-testid="contact-phone">
                <Phone className="h-4 w-4 mr-2" />
                +91 xxxxxxxxxx
              </li>
              <li className="text-secondary-foreground opacity-80 flex items-center" data-testid="contact-email">
                <Mail className="h-4 w-4 mr-2" />
                hello@namyaliving.com
              </li>
              <li className="text-secondary-foreground opacity-80 flex items-center" data-testid="contact-hours">
                <Clock className="h-4 w-4 mr-2" />
                Mon-Sat: 10AM-7PM IST
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground opacity-80" data-testid="footer-copyright">
            &copy; 2025 Namya Living. All rights reserved. | Made with ❤️ in India | Developed ❤️ by Ajay Bhardwaj | <a href="https://github.com/ajaykumar59" className="text-secondary-foreground hover:text-white transition-colors">Github </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
