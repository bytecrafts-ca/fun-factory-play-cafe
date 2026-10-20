import { Button } from "@/components/ui/Button";
import { formatPrice, memberships, siteConfig } from "@/lib/site";

export function MembershipsCard() {
  return (
    <div id="memberships" className="card scroll-mt-28 overflow-hidden">
      <div className="border-b border-peach/40 bg-mint/30 px-5 py-4">
        <h3 className="text-lg font-extrabold text-charcoal">Monthly Memberships</h3>
        <p className="mt-1 text-sm text-muted">Play more, save more. Unlimited visits all month.</p>
      </div>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-5 py-3 font-bold text-charcoal">Age Group</th>
            <th className="px-3 py-3 font-bold text-charcoal">Monthly</th>
            <th className="px-3 py-3 font-bold text-charcoal sm:px-5">3 Months</th>
          </tr>
        </thead>
        <tbody>
          {memberships.plans.map((plan) => (
            <tr key={plan.ageGroup} className="border-b border-border last:border-0">
              <td className="px-5 py-4 font-medium text-charcoal">{plan.ageGroup}</td>
              <td className="px-3 py-4 text-muted">{formatPrice(plan.monthly)}</td>
              <td className="px-3 py-4 text-muted sm:px-5">
                {formatPrice(plan.threeMonth)}
                <span className="block text-xs">per month</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="border-t border-border px-5 py-5">
        <ul className="grid gap-2 text-sm text-muted sm:grid-cols-2">
          {memberships.perks.map((perk) => (
            <li key={perk} className="flex gap-2">
              <span className="text-charcoal" aria-hidden>
                ✓
              </span>
              {perk}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <Button href={siteConfig.ovatu.membershipsUrl} external variant="mint" size="md">
            Get a Membership
          </Button>
        </div>
      </div>
    </div>
  );
}
