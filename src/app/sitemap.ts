import type { MetadataRoute } from "next";
import { absoluteUrl, pageSeo } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = Object.values(pageSeo).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency: page.path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: page.path === "/" ? 1 : page.path === "/birthday-parties" || page.path === "/play" ? 0.9 : 0.7,
  }));

  return routes;
}
