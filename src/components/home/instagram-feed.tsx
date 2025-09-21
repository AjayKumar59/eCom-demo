import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Traditional bedsheet styling"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Bedroom decor inspiration"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Product flatlay"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Table setting with covers"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Traditional quilt styling"
  },
];

export function InstagramFeed() {
  return (
    <section className="py-12" data-testid="instagram-feed">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-center text-foreground mb-12" data-testid="instagram-title">
          Check out our Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {instagramPosts.map((post) => (
            <div 
              key={post.id} 
              className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              data-testid={`instagram-post-${post.id}`}
            >
              <img 
                src={post.image} 
                alt={post.alt} 
                className="w-full h-full object-cover"
                data-testid={`img-instagram-${post.id}`}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-colors"
            data-testid="button-follow-instagram"
          >
            <Instagram className="h-5 w-5 mr-2" />
            Follow @namyaliving
          </Button>
        </div>
      </div>
    </section>
  );
}
