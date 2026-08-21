import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Every public marketing route. The app domain is deliberately absent — it is
// a signed-in product surface, not something to index.
const routes = [
  "/",
  "/features",
  "/how-it-works",
  "/pricing",
  "/faq",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/refunds",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `https://${site.domain}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
