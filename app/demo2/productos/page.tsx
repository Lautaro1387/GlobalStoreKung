'use client';

import { useState } from 'react';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          price,
          stock,
          imageUrl,
        }),
      });

      if (!res.ok) {
        // Manejo de error
        console.error('Error al crear producto');
        return;
      }

      // Si todo bien, reseteamos formulario (o redireccionas)
      setName('');
      setDescription('');
      setPrice('');
      setStock('');
      setImageUrl('');
      alert('Producto creado exitosamente');
    } catch (err) {
      console.error('Error en la petición:', err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Añadir Producto</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Nombre</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Camiseta Deportiva"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Descripción</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ej: Camiseta de poliéster ligera..."
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Precio</label>
            <input
              type="number"
              step="0.01"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Ej: 19.99"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Stock</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Ej: 50"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">URL de la imagen (opcional)</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/imagen.png"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Crear Producto
          </button>
        </form>
      </div>
    </main>
  );
}
