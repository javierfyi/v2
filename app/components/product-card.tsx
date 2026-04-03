import { type Product, formatPrice } from "@/app/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white p-6 md:p-8 flex flex-col">
      <div className="flex items-center gap-3">
        <h2 className="text-sm font-medium tracking-tight text-black">
          {product.name}
        </h2>
        <a
          href={`#${product.slug}`}
          className="text-[11px] text-gray-400 hover:text-gray-600 transition-colors"
          aria-label={`${product.name} details`}
        >
          ——&gt;
        </a>
      </div>

      <span className="text-xs text-gray-500 mt-1">
        {formatPrice(product.price)}
      </span>

      <div
        className={`w-2.5 h-2.5 rounded-full mt-3 ${
          product.colorDotFilled ? "" : "border border-gray-400"
        }`}
        style={
          product.colorDotFilled
            ? { backgroundColor: product.colorDot }
            : undefined
        }
        aria-label={`Color: ${product.colorDot}`}
      />

      <div className="flex items-center justify-center py-10 md:py-16 flex-1">
        <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-100 rounded-sm flex items-center justify-center">
          <span className="text-[10px] text-gray-300 uppercase tracking-widest">
            {product.name}
          </span>
        </div>
      </div>
    </article>
  );
}
