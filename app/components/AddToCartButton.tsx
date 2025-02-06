// app/components/AddToCartButton.tsx
"use client";
import { useCart } from "../../context/CartContext";

type Props = {
  product: {
    product_id: number;
    name: string;
    price: number;
    stock: number;
    imageUrl?: string;
  };
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToCart({ product_id: product.product_id, name: product.name, price: product.price, quantity: 1 });
  };

  return (
    <button onClick={handleAdd} className="px-4 py-2 bg-blue-600 text-white rounded">
      Agregar al carrito
    </button>
  );
}
