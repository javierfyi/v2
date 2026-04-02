import { Header } from "@/app/components/header";
import { ProductGrid } from "@/app/components/product-grid";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ProductGrid />
      </main>
    </>
  );
}
