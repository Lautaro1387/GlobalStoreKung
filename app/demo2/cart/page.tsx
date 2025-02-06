// app/demo2/cart/page.tsx
"use client";
import { useCart } from "../../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">
            Agrega productos y consigue envío gratis
          </h2>
          <p className="text-gray-600 mb-4">
            Para obtener envío gratis suma productos de un mismo vendedor.
          </p>
          <Link href="/demo2" className="px-4 py-2 bg-blue-600 text-white rounded">
            Ir a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Tu Carrito</h1>
        <ul className="space-y-4">
          {cart.map((item) => (
            <li
              key={item.product_id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600">
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    updateQuantity(item.product_id, item.quantity - 1)
                  }
                  disabled={item.quantity === 1}
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                  -
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.product_id, item.quantity + 1)
                  }
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.product_id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-yellow-500 text-black rounded"
          >
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
