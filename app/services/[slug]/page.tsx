import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServices } from "@/lib/sanity.queries";
import ServiceDetailSanity from "@/components/ServiceDetailSanity";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} - Professional Services | Fast Printing`,
    description: service.shortDescription,
    keywords: `${service.name}, printing services, ${slug}`,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailSanity service={service} />;
}

// Generate static params for all services
export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug.current,
  }));
}
