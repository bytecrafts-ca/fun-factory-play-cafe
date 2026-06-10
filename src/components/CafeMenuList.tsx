type MenuItem = {
  name: string;
  hotPrice?: number;
  coldPrice?: number;
  price?: number;
  note?: string;
};

function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

function ItemPrice({ item }: { item: MenuItem }) {
  if (item.price !== undefined) {
    return <span className="shrink-0 font-bold text-charcoal">{formatPrice(item.price)}</span>;
  }

  if (item.hotPrice !== undefined && item.coldPrice !== undefined) {
    return (
      <span className="shrink-0 text-right text-sm font-bold text-charcoal">
        Hot {formatPrice(item.hotPrice)}
        <br />
        Cold {formatPrice(item.coldPrice)}
      </span>
    );
  }

  if (item.hotPrice !== undefined) {
    return <span className="shrink-0 font-bold text-charcoal">{formatPrice(item.hotPrice)}</span>;
  }

  if (item.coldPrice !== undefined) {
    return <span className="shrink-0 font-bold text-charcoal">{formatPrice(item.coldPrice)}</span>;
  }

  return null;
}

export function CafeMenuList({ items }: { items: readonly MenuItem[] }) {
  return (
    <ul className="divide-y divide-border">
      {items.map((item) => (
        <li key={item.name} className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0">
          <div>
            <p className="font-semibold text-charcoal">{item.name}</p>
            {item.note && <p className="mt-0.5 text-xs text-muted">{item.note}</p>}
          </div>
          <ItemPrice item={item} />
        </li>
      ))}
    </ul>
  );
}
