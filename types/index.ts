export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  category: "acarajes" | "combos" | "bebidas";
}

export interface CartItem extends Product {
  quantity: number;
}
