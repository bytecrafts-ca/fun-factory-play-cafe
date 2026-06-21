import Link from "next/link";
import { admissions, admissionNotes, playRatesNote, siteConfig } from "@/lib/site";

export function AdmissionsTable({ showNotes = true }: { showNotes?: boolean }) {
  const isExternalWaiver = siteConfig.waiverUrl.startsWith("http");

  return (
    <div>
      <p className="mb-4 text-sm leading-relaxed text-muted">{playRatesNote}</p>

      <div className="card overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-peach/40 bg-lavender/20">
              <th className="px-5 py-3 font-bold text-charcoal">Age Group</th>
              <th className="px-5 py-3 font-bold text-charcoal">Price</th>
            </tr>
          </thead>
          <tbody>
            {admissions.map((row) => (
              <tr
                key={row.ageGroup}
                className="border-b border-border last:border-0"
              >
                <td className="px-5 py-4 font-medium text-charcoal">{row.ageGroup}</td>
                <td className="px-5 py-4 text-muted">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showNotes && (
        <ul className="mt-6 space-y-2 text-sm text-muted">
          {admissionNotes.map((note) => (
            <li key={note} className="leading-relaxed">
              {note === "A signed waiver is required before entry" ? (
                <>
                  A signed{" "}
                  <Link
                    href={siteConfig.waiverUrl}
                    className="font-semibold text-charcoal hover:underline"
                    {...(isExternalWaiver
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    waiver
                  </Link>{" "}
                  is required before entry
                </>
              ) : (
                note
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
