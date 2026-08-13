import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoConfig.siteName,
    short_name: seoConfig.shortName,
    description: seoConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fff6f4",
    theme_color: "#ffc1d6",
    lang: "en-CA",
    categories: ["entertainment", "kids", "food"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/logo.webp",
        sizes: "466x258",
        type: "image/webp",
      },
    ],
  };
}
