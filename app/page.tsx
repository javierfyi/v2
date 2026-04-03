import { Sidebar } from "@/app/components/sidebar";
import { ProductGrid } from "@/app/components/product-grid";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className="ml-16 flex-1 flex flex-col min-h-screen">
        <ProductGrid />
      </main>
    </>
  );
}
