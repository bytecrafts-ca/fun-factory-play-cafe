import Image from "next/image";

type CafeDrinkCardProps = {
  name: string;
  description: string;
  image: string;
  hotPrice?: number;
  coldPrice?: number;
  price?: number;
  compact?: boolean;
};

function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

function PriceLabel({ hotPrice, coldPrice, price }: Pick<CafeDrinkCardProps, "hotPrice" | "coldPrice" | "price">) {
  if (price !== undefined) {
    return <p className="mt-3 text-sm font-bold text-charcoal">{formatPrice(price)}</p>;
  }

  if (hotPrice !== undefined && coldPrice !== undefined) {
    return (
      <p className="mt-3 text-sm font-bold text-charcoal">
        Hot {formatPrice(hotPrice)} · Iced {formatPrice(coldPrice)}
      </p>
    );
  }

  if (hotPrice !== undefined) {
    return <p className="mt-3 text-sm font-bold text-charcoal">Hot {formatPrice(hotPrice)}</p>;
  }

  if (coldPrice !== undefined) {
    return <p className="mt-3 text-sm font-bold text-charcoal">Iced {formatPrice(coldPrice)}</p>;
  }

  return null;
}

export function CafeDrinkCard({
  name,
  description,
  image,
  hotPrice,
  coldPrice,
  price,
  compact = false,
}: CafeDrinkCardProps) {
  return (
    <article className="card overflow-hidden border-t-4 border-t-lavender/60">
      <div className="relative aspect-[4/5] overflow-hidden bg-peach/10">
        <Image
          src={image}
          alt={name}
          fill
          sizes={
            compact
              ? "(max-width: 768px) 100vw, 20vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover object-center"
        />
      </div>
      <div className={compact ? "p-3 xl:p-4" : "p-5"}>
        <h2 className={`font-bold text-charcoal ${compact ? "text-sm leading-tight xl:text-base" : ""}`}>
          {name}
        </h2>
        <p className={`mt-2 leading-relaxed text-muted ${compact ? "text-xs xl:text-sm" : "text-sm"}`}>
          {description}
        </p>
        <PriceLabel hotPrice={hotPrice} coldPrice={coldPrice} price={price} />
      </div>
    </article>
  );
}
