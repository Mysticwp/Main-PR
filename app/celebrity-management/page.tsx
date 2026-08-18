import type { Metadata } from "next";
import { ServiceDetail } from "@/components/service-detail";
import { getServiceBySlug } from "@/lib/site-data";

const service = getServiceBySlug("celebrity-management")!;

export const metadata: Metadata = {
  title: service.seoTitle,
  description: service.seoDescription,
  alternates: { canonical: `https://mysticpr.com${service.href}` }
};

export default function CelebrityManagementPage() {
  return <ServiceDetail service={service} />;
}
