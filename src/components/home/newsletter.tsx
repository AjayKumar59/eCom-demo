import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and special offers.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-12 bg-primary" data-testid="newsletter-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4" data-testid="newsletter-title">
          Stay Updated
        </h2>
        <p className="text-primary-foreground opacity-90 mb-8 max-w-md mx-auto" data-testid="newsletter-description">
          Subscribe to get special offers, new product launches, and home decor inspiration.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white border-none focus:ring-2 focus:ring-white"
            required
            data-testid="input-email"
          />
          <Button 
            type="submit"
            className="bg-white text-primary hover:bg-gray-100 transition-colors"
            disabled={isLoading}
            data-testid="button-subscribe"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
