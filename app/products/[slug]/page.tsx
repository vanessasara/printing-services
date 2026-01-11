import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/components/lib/products";
import ProductDetailClient from "@/components/ProductDetailClient";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Custom Printing | Fast Printing & Packaging`,
    description: product.description,
    keywords: `${product.name}, custom ${product.name}, printing, ${slug}`,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

// Generate static params for all products
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}
