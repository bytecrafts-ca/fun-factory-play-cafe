// Submits every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver).
// Run after a deploy: npm run indexnow
const SITE = "https://funfactoryplay.ca";
const KEY = "ff13145129bd434e3737bf8b9569b890";

const sitemap = await fetch(`${SITE}/sitemap.xml`).then((res) => {
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  return res.text();
});

const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
if (urlList.length === 0) throw new Error("No URLs found in sitemap");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs, status ${res.status}`);
if (!res.ok && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
