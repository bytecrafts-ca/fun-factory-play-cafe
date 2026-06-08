import { importantInfo } from "@/lib/site";

const accentBorder = [
  "border-l-bubblegum",
  "border-l-sky",
  "border-l-mint",
  "border-l-peach",
  "border-l-lavender",
];

export function RulesChips() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {importantInfo.map((item, i) => (
        <div
          key={item}
          className={`card border-l-4 p-5 ${accentBorder[i % accentBorder.length]}`}
        >
          <p className="font-medium text-charcoal">{item}</p>
        </div>
      ))}
    </div>
  );
}
