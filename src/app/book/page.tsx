import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site";

export default function BookPage() {
  const url = siteConfig.ovatu.bookUrl;
  if (url.startsWith("http")) {
    redirect(url);
  }
  redirect("/parties");
}
