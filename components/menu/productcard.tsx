"use client";

import { useCart } from "@/store/cart-store";

type Product = {
  id: string;
  name: string;
  price: number;
};

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const addItem = useCart((s) => s.addItem);

  return (
    <div className="rounded-2xl bg-white p-4 shadow">
      <h3 className="text-xl font-bold">{product.name}</h3>

      <p className="mt-2 text-lg font-semibold text-red-700">
        R$ {product.price.toFixed(2)}
      </p>

      <button
        onClick={() =>
          addItem({
            ...product,
            quantity: 1,
          })
        }
        className="
          mt-4
          rounded-xl
          bg-yellow-400
          px-4
          py-2
          font-bold
          text-black
          transition
          hover:brightness-95
        "
      >
        Adicionar
      </button>
    </div>
  );
}
