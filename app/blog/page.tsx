import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, User, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const metadata = {
  title: "Blog - Printing & Packaging Tips | Fast Printing",
  description: "Expert advice, industry insights, and tips on printing, packaging, and branding. Learn from the professionals at Fast Printing & Packaging.",
  keywords: "printing blog, packaging tips, design advice, printing industry, branding tips",
};

// This data will be imported from lib/blog.ts
const featuredPost = {
  slug: "complete-guide-to-custom-packaging",
  title: "The Complete Guide to Custom Packaging for E-commerce",
  excerpt: "Everything you need to know about creating packaging that protects your products and delights your customers",
  author: "Ayesha Khan",
  date: "December 10, 2024",
  readTime: "8 min read",
  category: "Packaging Tips",
  image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1200&h=600&fit=crop",
};

const blogPosts = [
  {
    slug: "eco-friendly-printing-options",
    title: "Sustainable Printing: Eco-Friendly Options for Your Business",
    excerpt: "Discover environmentally responsible printing choices that don't compromise on quality",
    author: "Hassan Ahmed",
    date: "December 8, 2024",
    readTime: "5 min read",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
  },
  {
    slug: "business-card-design-tips",
    title: "10 Business Card Design Tips That Get You Noticed",
    excerpt: "Make a lasting first impression with these proven business card design strategies",
    author: "Fatima Malik",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Design Tips",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop",
  },
  {
    slug: "choosing-right-paper-stock",
    title: "Choosing the Right Paper Stock for Your Print Project",
    excerpt: "Understanding paper weights, finishes, and textures to make informed printing decisions",
    author: "Ahmed Raza",
    date: "December 3, 2024",
    readTime: "7 min read",
    category: "Printing Guide",
    image: "https://images.unsplash.com/photo-1612538498456-e861df91b2ce?w=600&h=400&fit=crop",
  },
  {
    slug: "packaging-unboxing-experience",
    title: "Creating an Unforgettable Unboxing Experience",
    excerpt: "How to design packaging that turns customers into brand advocates",
    author: "Sarah Ali",
    date: "November 30, 2024",
    readTime: "6 min read",
    category: "Packaging Tips",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop",
  },
  {
    slug: "offset-vs-digital-printing",
    title: "Offset vs Digital Printing: Which is Right for You?",
    excerpt: "Compare printing methods to choose the best option for your project and budget",
    author: "Hassan Ahmed",
    date: "November 28, 2024",
    readTime: "8 min read",
    category: "Printing Guide",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  },
  {
    slug: "color-psychology-in-branding",
    title: "Color Psychology: Choosing the Right Colors for Your Brand",
    excerpt: "Understand how colors influence perception and purchasing decisions",
    author: "Ayesha Khan",
    date: "November 25, 2024",
    readTime: "7 min read",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    slug: "print-file-preparation-guide",
    title: "Print File Preparation: A Designer's Checklist",
    excerpt: "Essential tips for preparing print-ready files that produce perfect results",
    author: "Fatima Malik",
    date: "November 22, 2024",
    readTime: "9 min read",
    category: "Design Tips",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=600&h=400&fit=crop",
  },
  {
    slug: "label-design-best-practices",
    title: "Product Label Design: Best Practices and Regulations",
    excerpt: "Create compliant, eye-catching labels that sell your products",
    author: "Ahmed Raza",
    date: "November 20, 2024",
    readTime: "10 min read",
    category: "Design Tips",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Printing Guide", "Packaging Tips", "Design Tips", "Branding", "Sustainability"];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Printing & Packaging Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert advice, industry trends, and practical tips to help you make better printing and packaging decisions
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 h-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
            
            <Link href={`/blog/${featuredPost.slug}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="text-sm text-primary font-medium mb-3">
                      {featuredPost.category}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <span className="text-primary font-medium inline-flex items-center group-hover:gap-2 transition-all">
                      Read Full Article
                      <ArrowRight className="ml-1 h-5 w-5" />
                    </span>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 border-y sticky top-16 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all group overflow-hidden">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-background text-foreground rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-primary font-medium text-sm inline-flex items-center group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest printing tips, industry insights, and exclusive offers delivered to your inbox
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
