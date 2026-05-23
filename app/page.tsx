import { Header } from "@/components/layout/header";
import { ProductCard } from "@/components/menu/productcard";
import { CartSidebar } from "@/components/cart/cartsidebar";
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
