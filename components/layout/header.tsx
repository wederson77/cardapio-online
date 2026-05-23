import Image from "next/image";
import { Clock3, MessageCircle } from "lucide-react";

export function Header() {
  return (
    <header className="relative w-full overflow-hidden bg-[#7B0000] text-white">
      {/* TEXTURA SUAVE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:14px_14px]" />

      {/* ESCURECIMENTO LATERAIS */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

      <div className="relative mx-auto flex h-[95px] w-full max-w-[1400px] items-center justify-between px-3 sm:px-5">
        {/* LADO ESQUERDO */}
        <div className="flex items-center min-w-0">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo-esquerda.png"
              alt="Acarajé da Bahia"
              width={78}
              height={78}
              priority
              className="object-contain"
            />
          </div>

          {/* TEXTO */}
          <div className="ml-3 leading-none">
            <h1 className="text-[22px] sm:text-[24px] font-black tracking-[1px] text-white">
              Acarajé
            </h1>

            <h2 className="mt-[2px] text-[18px] sm:text-[20px] font-black text-[#F2B100]">
              da Bahia
            </h2>
          </div>

          {/* SLOGAN */}
          <div className="hidden md:block ml-7">
            <p className="text-[12px] font-extrabold leading-[1.2] tracking-[0.5px]">
              O verdadeiro
            </p>

            <p className="text-[12px] font-extrabold leading-[1.2] tracking-[0.5px]">
              sabor da Bahia
            </p>

            <p className="text-[12px] font-extrabold leading-[1.2] tracking-[0.5px]">
              no seu pedido!
            </p>
          </div>

          {/* HORÁRIO */}
          <div className="hidden lg:flex items-center gap-2 ml-8">
            <Clock3 size={15} className="text-[#F2B100] stroke-[2.5]" />

            <div className="leading-none">
              <p className="text-[11px] font-bold tracking-[0.3px]">
                10:00 - 22:00
              </p>

              <p className="mt-[3px] text-[11px] font-extrabold text-[#F5D9BA]">
                Todos os dias
              </p>
            </div>
          </div>

          {/* WHATSAPP */}
          <div className="hidden lg:flex items-center gap-2 ml-7">
            <MessageCircle size={15} className="text-[#F2B100] stroke-[2.5]" />

            <div className="leading-none">
              <p className="text-[11px] font-bold tracking-[0.3px]">
                Fale conosco
              </p>

              <p className="mt-[3px] text-[11px] font-extrabold text-[#F5D9BA]">
                no WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* IMAGEM DIREITA */}
        <div className="relative hidden md:flex h-full items-end">
          <Image
            src="/images/logo-direita.png"
            alt="Acarajé"
            width={230}
            height={110}
            priority
            className="object-contain translate-y-[2px]"
          />
        </div>
      </div>
    </header>
  );
}
