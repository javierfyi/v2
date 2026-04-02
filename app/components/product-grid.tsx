import { products } from "@/app/data/products";
import { ProductCard } from "@/app/components/product-card";

export function ProductGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-gray-200">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
