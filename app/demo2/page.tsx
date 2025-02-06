// app/demo2/page.tsx
import ProductPage from "../components/ProductPage";
import CarouselComponent from "@components/Carousel";

export default async function Demo2Page() {
  // Fetch de los productos
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/products`, {
    cache: 'no-store',
  });
  const products = await res.json();

  // Array de imágenes para el carrusel
  const carouselImages = [
    { src: "/img/carousel_1.webp", alt: "Banner 1", width: 1600, height: 600 },
    { src: "/img/carousel_2.webp", alt: "Banner 2", width: 1600, height: 600 },
    { src: "/img/carousel_3.webp", alt: "Banner 3", width: 1600, height: 600 },
  ];

  return (
    <>
      <CarouselComponent
        images={carouselImages}
        infiniteLoop={true}
        emulateTouch={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        carouselWidth={1200}
      />
      <div className="min-h-screen bg-gray-100 py-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mt-6">
            Bienvenido a mi E-commerce
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            ¡Compra tus productos favoritos desde la comodidad de tu hogar!
          </p>
        </header>
        <main className="container mx-auto px-4 space-y-10">
          {/* Carrito */}
          {/* Página de productos */}
          <ProductPage products={products} />
        </main>
      </div>
    </>
  );
}
