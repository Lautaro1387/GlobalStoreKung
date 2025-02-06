// context/CartContext.tsx
import { createContext, useContext, useState } from "react";

export type CartItem = {
  product_id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  notification: string | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (product_id: number) => void;
  updateQuantity: (product_id: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find((ci) => ci.product_id === item.product_id);
      let newCart;
      if (exists) {
        newCart = prev.map((ci) =>
          ci.product_id === item.product_id
            ? { ...ci, quantity: ci.quantity + item.quantity }
            : ci
        );
      } else {
        newCart = [...prev, item];
      }
      const totalQuantity = newCart.reduce((acc, curr) => acc + curr.quantity, 0);
      setNotification(`Carrito: ${totalQuantity} artículo${totalQuantity > 1 ? "s" : ""}`);
      setTimeout(() => setNotification(null), 3000);
      return newCart;
    });
  };

  const removeFromCart = (product_id: number) => {
    setCart((prev) => prev.filter((ci) => ci.product_id !== product_id));
  };

  const updateQuantity = (product_id: number, quantity: number) => {
    setCart((prev) =>
      prev.map((ci) =>
        ci.product_id === product_id ? { ...ci, quantity } : ci
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, notification, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};
