import Image from "next/image";

type CafeDrinkCardProps = {
  name: string;
  description: string;
  image: string;
  hotPrice?: number;
  coldPrice?: number;
  price?: number;
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
        Hot {formatPrice(hotPrice)} · Cold {formatPrice(coldPrice)}
      </p>
    );
  }

  if (hotPrice !== undefined) {
    return <p className="mt-3 text-sm font-bold text-charcoal">Hot {formatPrice(hotPrice)}</p>;
  }

  if (coldPrice !== undefined) {
    return <p className="mt-3 text-sm font-bold text-charcoal">Cold {formatPrice(coldPrice)}</p>;
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
}: CafeDrinkCardProps) {
  return (
    <article className="card overflow-hidden border-t-4 border-t-lavender/60">
      <div className="relative aspect-[4/5] overflow-hidden bg-peach/10">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>
      <div className="p-5">
        <h2 className="font-bold text-charcoal">{name}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
        <PriceLabel hotPrice={hotPrice} coldPrice={coldPrice} price={price} />
      </div>
    </article>
  );
}
