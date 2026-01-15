import { notFound } from "next/navigation";
import { getPortfolioBySlug, getAllPortfolio } from "@/lib/sanity.queries";
import PortfolioDetailSanity from "@/components/PortfolioDetailSanity";

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);

  if (!portfolio) {
    return {
      title: "Portfolio Item Not Found",
    };
  }

  return {
    title: `${portfolio.title} - ${portfolio.clientName} | Portfolio`,
    description: portfolio.shortDescription,
    keywords: `${portfolio.title}, ${portfolio.clientName}, printing portfolio, ${slug}`,
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  return <PortfolioDetailSanity portfolio={portfolio} />;
}

// Generate static params for all portfolio items
export async function generateStaticParams() {
  const portfolios = await getAllPortfolio();
  return portfolios.map((portfolio) => ({
    slug: portfolio.slug.current,
  }));
}
