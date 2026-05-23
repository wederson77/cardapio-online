import { Header } from "@/components/layout/Header";
import { ProductCard } from "@/components/menu/ProductCard";
import { CartSidebar } from "@/components/cart/CartSidebar";
import { products } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="bg-[#F7F4EF] min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-8 p-8">
        <section className="space-y-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        <CartSidebar />
      </div>
    </main>
  );
}
