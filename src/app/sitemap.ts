import type { MetadataRoute } from "next";
import { absoluteUrl, getAllSitemapEntries } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getAllSitemapEntries().map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency:
      page.path === "/" || page.path.startsWith("/guides")
        ? ("weekly" as const)
        : ("monthly" as const),
    priority:
      page.path === "/"
        ? 1
        : page.path === "/birthday-parties" ||
            page.path === "/play" ||
            page.path.includes("pickering") ||
            page.path.includes("birthday")
          ? 0.9
          : 0.7,
  }));
}
