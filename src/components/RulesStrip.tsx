import { IconClipboard, IconEye, IconShield, IconSocks } from "@/components/Icons";

const items = [
  { icon: IconSocks, label: "Socks Only Facility", bg: "bg-bubblegum/40" },
  { icon: IconClipboard, label: "Waiver Required", bg: "bg-sky/40" },
  { icon: IconEye, label: "Parental Supervision Required", bg: "bg-mint/40" },
  { icon: IconShield, label: "Nut-Aware Facility", bg: "bg-lavender/40" },
];

export function RulesStrip() {
  return (
    <section className="border-b border-peach/40 bg-white">
      <div className="container-main">
        <ul className="grid grid-cols-2 divide-x divide-y divide-peach/30 sm:grid-cols-4 sm:divide-y-0">
          {items.map(({ icon: Icon, label, bg }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-2.5 px-3 py-5 text-center sm:px-4 sm:py-6"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full text-charcoal ${bg}`}
              >
                <Icon />
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-charcoal sm:text-[11px]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
