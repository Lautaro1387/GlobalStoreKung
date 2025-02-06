// app/components/Cart.tsx
"use client";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito se encuentra vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.product_id} className="flex justify-between items-center my-2">
              <div>
                <p>{item.name}</p>
                <p>
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <div>
                <button
                  onClick={() =>
                    updateQuantity(item.product_id, item.quantity - 1)
                  }
                  disabled={item.quantity === 1}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <button
                  onClick={() =>
                    updateQuantity(item.product_id, item.quantity + 1)
                  }
                  className="px-2 py-1 bg-gray-200 rounded ml-2"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.product_id)}
                  className="px-2 py-1 bg-red-500 text-white rounded ml-2"
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 font-bold">Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
}
