// components/Cart.tsx
"use client"

import { useState } from 'react';

// Define la interfaz para los productos
interface Product {
  id: number;
  name: string;
  price: number;
}

const Cart: React.FC = () => {
  // Define el estado con el tipo Product[]
  const [items, setItems] = useState<Product[]>([]);

  // Función para agregar productos al carrito
  const addToCart = (product: Product) => {
    setItems([...items, product]);
  };

  // Función para eliminar productos del carrito
  const removeFromCart = (productId: number) => {
    setItems(items.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => console.log('Finalizar compra')}>
        Finalizar Compra
      </button>
    </div>
  );
};

export default Cart;
