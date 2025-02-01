'use client'; // si usas app router y quieres acciones en el cliente

import { useState } from 'react';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ name, price: Number(price) }),
    });
    // Manejo de la respuesta o redirección
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre del producto</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Precio</label>
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Crear Producto</button>
    </form>
  );
}
