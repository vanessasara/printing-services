import { notFound } from "next/navigation";
import { getProductBySlug, getAllProducts } from "@/lib/sanity.queries";
import ProductDetailSanity from "@/components/ProductDetailSanity";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - Custom Printing | Fast Printing & Packaging`,
    description: product.shortDescription,
    keywords: `${product.name}, custom ${product.name}, printing, ${slug}`,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailSanity product={product} />;
}

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((product) => ({
    slug: product.slug.current,
  }));
}
