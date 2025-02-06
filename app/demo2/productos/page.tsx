"use client";

import { useState, FormEvent } from "react";

type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export default function AddProductPage() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price: parseFloat(price),
          stock: parseInt(stock),
          imageUrl,
        }),
      });

      if (!res.ok) throw new Error("Error al crear producto");

      // Reset form
      [setName, setDescription, setPrice, setStock, setImageUrl].forEach((fn) => fn(""));
      alert("Producto creado exitosamente");
    } catch (err) {
      console.error("Error en la petición:", err);
      alert("Error al crear el producto");
    }
  };

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => (e: InputEvent) => setter(e.target.value);

  return (
    <>
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4 py-20">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">
            Administración de Productos
          </h1>
          <p className="text-gray-600 text-lg">Registro de nuevos productos en el sistema</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre del Producto */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre del producto
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleInputChange(setName)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="Ejemplo: Camiseta roja..."
              required
            />
          </div>

          {/* Descripción */}
          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción detallada
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleInputChange(setDescription)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 resize-none outline-none transition-all"
              placeholder="Ejemplo: Camiseta de manga larga..."
              required
            />
          </div>

          {/* Precio y Stock */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Precio unitario (USD)
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                value={price}
                onChange={handleInputChange(setPrice)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Ejemplo: $30"
                required
                />
            </div>

            <div className="space-y-2">
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                Unidades disponibles
              </label>
              <input
                id="stock"
                type="number"
                value={stock}
                onChange={handleInputChange(setStock)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Ejemplo: 50"
                required
                />
            </div>
          </div>

          {/* URL de Imagen */}
          <div className="space-y-2">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
              URL de la Imagen
            </label>
            <input
              id="imageUrl"
              type="url"
              value={imageUrl}
              onChange={handleInputChange(setImageUrl)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              placeholder="https://example.com/image.png"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Registrar Producto
          </button>
        </form>
      </div>
    </main>
              </>
  );
}
