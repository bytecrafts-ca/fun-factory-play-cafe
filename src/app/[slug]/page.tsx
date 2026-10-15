import { notFound } from "next/navigation";
import { LocalLandingPage } from "@/components/LocalLandingPage";
import { createPageMetadata } from "@/lib/seo";
import { getAllLandingSlugs, landingPagesBySlug } from "@/lib/landing-pages";

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = landingPagesBySlug[slug];
  if (!page) return {};
  return createPageMetadata(page.seo);
}

export default async function LandingSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = landingPagesBySlug[slug];
  if (!page) notFound();
  return <LocalLandingPage page={page} />;
}
