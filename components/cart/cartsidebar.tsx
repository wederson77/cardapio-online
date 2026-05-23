"use client";

import { Trash2, Plus, Minus, MessageCircle } from "lucide-react";
import { useCart } from "@/store/cart-store";

export function CartSidebar() {
  const {
    items,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    updateObservation,
  } = useCart();

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const deliveryFee = subtotal > 0 ? 5 : 0;

  const total = subtotal + deliveryFee;

  const whatsappMessage = encodeURIComponent(`
🛒 *NOVO PEDIDO*

${items
  .map(
    (item) =>
      `• ${item.name} x${item.quantity}
💰 R$ ${(item.price * item.quantity).toFixed(2)}
📝 ${item.observation || "Sem observações"}`,
  )
  .join("\n\n")}

🚚 Taxa de entrega: R$ ${deliveryFee.toFixed(2)}
💵 Total: R$ ${total.toFixed(2)}
`);

  return (
    <aside className="sticky top-4 overflow-hidden rounded-[28px] bg-[#9E1111] text-white shadow-xl">
      {/* HEADER */}
      <div className="border-b border-white/10 p-5">
        <h2 className="text-[30px] font-black tracking-[0.5px]">Seu pedido</h2>
      </div>

      {/* LISTA */}
      <div className="max-h-[420px] overflow-y-auto px-5 py-4">
        {items.length === 0 ? (
          <div className="py-12 text-center text-white/70">
            Seu carrinho está vazio
          </div>
        ) : (
          <div className="space-y-5">
            {items.map((item) => (
              <div key={item.id} className="rounded-2xl bg-[#870E0E] p-4">
                {/* TOPO */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-[16px] font-extrabold">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-[15px] font-bold text-[#FFD27A]">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-white/60 transition hover:text-red-300"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* CONTROLES */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center overflow-hidden rounded-xl border border-[#D47A2D]">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-8 w-8 items-center justify-center bg-[#A84300]"
                    >
                      <Minus size={14} />
                    </button>

                    <div className="flex h-8 w-10 items-center justify-center text-[14px] font-bold">
                      {item.quantity}
                    </div>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-8 w-8 items-center justify-center bg-[#A84300]"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* OBSERVAÇÃO */}
                <textarea
                  placeholder="Ex: sem pimenta, adicionar molho..."
                  value={item.observation || ""}
                  onChange={(e) => updateObservation(item.id, e.target.value)}
                  className="
                    mt-4
                    min-h-[75px]
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#730909]
                    p-3
                    text-[14px]
                    outline-none
                    placeholder:text-white/40
                    focus:border-[#F2B100]
                  "
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RESUMO */}
      <div className="border-t border-white/10 px-5 py-5">
        <div className="space-y-3 text-[15px]">
          <div className="flex items-center justify-between text-white/80">
            <span>Subtotal</span>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between text-white/80">
            <span>Taxa de entrega</span>
            <span>R$ {deliveryFee.toFixed(2)}</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-[18px] font-black">Total</span>

            <span className="text-[34px] font-black text-[#FFD54A]">
              R$ {total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* BOTÃO */}
        <a
          href={`https://wa.me/5500000000000?text=${whatsappMessage}`}
          target="_blank"
          className="
            mt-6
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-[#16C44F]
            px-5
            py-4
            text-center
            text-[16px]
            font-extrabold
            text-white
            transition
            hover:brightness-110
            active:scale-[0.99]
          "
        >
          <MessageCircle size={20} />
          Enviar pedido pelo WhatsApp
        </a>

        <p className="mt-3 text-center text-[12px] text-white/50">
          Você será redirecionado para o WhatsApp
        </p>
      </div>
    </aside>
  );
}
