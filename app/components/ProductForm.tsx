"use client"
// components/ProductForm.tsx

import { useState } from "react";

export default function ProductForm({ product, onSubmit }: any) {
  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [price, setPrice] = useState(product?.price || "");
  const [stock, setStock] = useState(product?.stock || "");
  const [imageUrl, setImageUrl] = useState(product?.imageUrl || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, price, stock, imageUrl });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        placeholder="URL de la imagen"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {product ? "Editar Producto" : "Agregar Producto"}
      </button>
    </form>
  );
}
