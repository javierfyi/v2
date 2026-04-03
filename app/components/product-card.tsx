import { type Product } from "@/app/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const bgMain = product.variant === "dark" ? "bg-gray-200" : "bg-gray-100";
  const bgThumb = product.variant === "dark" ? "bg-gray-200" : "bg-gray-100";

  return (
    <article className="bg-white p-5 flex flex-col gap-4">
      <h2 className="text-[11px] font-normal tracking-wide text-neutral-800">
        {product.name}
      </h2>

      <div className="flex gap-2 flex-1">
        {/* Main large image */}
        <div
          className={`${bgMain} flex-1 aspect-[4/3] rounded-[2px] min-h-[160px]`}
        />

        {/* Two stacked thumbnails */}
        <div className="flex flex-col gap-2 w-[38%]">
          <div className={`${bgThumb} flex-1 rounded-[2px]`} />
          <div className={`${bgThumb} flex-1 rounded-[2px]`} />
        </div>
      </div>
    </article>
  );
}
