import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { createPageMetadata } from "@/lib/seo";
import { getAllGuideSlugs, guidesBySlug } from "@/lib/guides";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = guidesBySlug[slug];
  if (!guide) return {};
  return createPageMetadata(guide.seo);
}

export default async function GuideSlugPage({ params }: Props) {
  const { slug } = await params;
  const guide = guidesBySlug[slug];
  if (!guide) notFound();
  return <GuideArticle guide={guide} />;
}
