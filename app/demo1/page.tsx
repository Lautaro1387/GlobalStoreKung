"use client";

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, ChangeEvent, useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function HomePage() {
  // -- COMPONENTES INTERNOS EN EL MISMO ARCHIVO --

  // Navbar
  const Navbar = () => {
    // Estado para controlar si el menú móvil (ventana emergente) está abierto
    const [menuOpen, setMenuOpen] = useState(false);

    // Función para alternar la apertura/cierre del menú móvil
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <nav className="w-full py-4 px-6 bg-black border-b border-gray-800 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/img/logo_demo1_1.png"
              alt="Logo"
              width={160}
              height={100}
            />
          </div>

          {/* Links en pantallas medianas y grandes */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#home">
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Inicio
              </span>
            </Link>
            <Link href="#about">
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Nosotros
              </span>
            </Link>
            <Link href="#team">
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Equipo
              </span>
            </Link>
            <Link href="#services">
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Servicios
              </span>
            </Link>
            <Link href="#testimonials">
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Testimonios
              </span>
            </Link>
            <Link href="#contact">
              <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                Contacto
              </span>
            </Link>
          </div>

          {/* Botón Hamburguesa en pantallas pequeñas */}
          <button
            onClick={toggleMenu}
            // Aumentamos la prioridad del botón sobre el menú emergente
            className="md:hidden flex items-center justify-center z-[9999]"
            aria-label="Menu Button"
          >
            {!menuOpen ? (
              <Image
                src="/icons/hamburger_white.svg"
                alt="Abrir menú"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src="/icons/cross_white.svg"
                alt="Cerrar menú"
                width={30}
                height={30}
              />
            )}
          </button>
        </div>

        {/* Menú emergente en pantallas pequeñas */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center md:hidden">
            <ul className="space-y-6 text-center">
              <li>
                <Link href="#home">
                  <span
                    className="text-white text-xl hover:text-indigo-300 transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Inicio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <span
                    className="text-white text-xl hover:text-indigo-300 transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Nosotros
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#team">
                  <span
                    className="text-white text-xl hover:text-indigo-300 transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Equipo
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#services">
                  <span
                    className="text-white text-xl hover:text-indigo-300 transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Servicios
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#testimonials">
                  <span
                    className="text-white text-xl hover:text-indigo-300 transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Testimonios
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <span
                    className="text-white text-xl hover:text-indigo-300 transition-colors cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contacto
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  };

  // Header / Hero
  const Header = () => {
    return (
      <header
        id="home"
        className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bienvenido a KB Technology
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Una página moderna, oscura y profesional para atraer a tus clientes.
        </p>
        <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">
          Comienza Ahora
        </button>
      </header>
    );
  };

  // About / Nosotros
  const About = () => {
    return (
      <section
        id="about"
        className="py-16 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 text-white space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">¿Quiénes somos?</h2>
            <p className="text-gray-300 leading-relaxed">
              Somos una agencia digital comprometida con brindar soluciones
              innovadoras y efectivas para impulsar la presencia en línea de
              nuestros clientes. Con un enfoque en la calidad y la creatividad,
              ayudamos a todo tipo de negocios a alcanzar sus metas.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nuestro equipo está conformado por expertos en diseño,
              desarrollo, marketing y análisis de datos. Trabajamos en conjunto
              para crear experiencias digitales inolvidables.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-colors">
              Conoce más
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/img/job_demo1.webp"
              alt="Acerca de nosotros"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };

  // Equipo
  const Team = () => {
    return (
      <section
        id="team"
        className="py-16 px-6 bg-black border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Conoce a Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Miembro 1 */}
            <div className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center">
              <Image
                src="/img/man_demo1_1.webp"
                alt="Miembro 1"
                width={150}
                height={150}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Juan Pérez</h3>
              <p className="text-gray-400 text-sm">CEO & Fundador</p>
              <p className="text-gray-400 mt-2">
                Apasionado por la tecnología y la innovación.
              </p>
            </div>

            {/* Miembro 2 */}
            <div className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center">
              <Image
                src="/img/women_test.webp"
                alt="Miembro 2"
                width={150}
                height={150}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">María García</h3>
              <p className="text-gray-400 text-sm">Directora Creativa</p>
              <p className="text-gray-400 mt-2">
                Diseñadora con una visión única para cada proyecto.
              </p>
            </div>

            {/* Miembro 3 */}
            <div className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow flex flex-col items-center">
              <Image
                src="/img/man_demo1_2.webp"
                alt="Miembro 3"
                width={150}
                height={150}
                className="rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">Carlos Ramírez</h3>
              <p className="text-gray-400 text-sm">Lead Developer</p>
              <p className="text-gray-400 mt-2">
                Especialista en crear soluciones a la medida.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Services
  const Services = () => {
    return (
      <section
        id="services"
        className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Diseño Web</h3>
              <p className="text-gray-400">
                Creamos sitios atractivos y funcionales con las últimas
                tecnologías para ayudarte a destacar en línea.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Desarrollo a Medida</h3>
              <p className="text-gray-400">
                Adaptamos las soluciones a las necesidades específicas de tu
                negocio, garantizando un rendimiento óptimo.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Branding & Marketing</h3>
              <p className="text-gray-400">
                Posicionamos tu marca en el mercado con estrategias innovadoras
                y un enfoque en resultados reales.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Testimonios
  const Testimonials = () => {
    return (
      <section
        id="testimonials"
        className="py-16 px-6 bg-black border-t border-gray-800"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <p className="text-gray-300 text-left">
                “Trabajar con esta agencia fue un verdadero placer. Nos guiaron
                en todo el proceso de rediseño de nuestra web y el resultado
                fue espectacular. ¡Muy recomendados!”
              </p>
              <div className="text-gray-400 mt-4 text-left">
                — Ana López, Directora de Marketing en XYZ
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <p className="text-gray-300 text-left">
                “Excelente servicio al cliente y resultados tangibles. Nuestro
                tráfico en línea se duplicó después de su estrategia de SEO.
                ¡Definitivamente seguiremos trabajando con ellos!”
              </p>
              <div className="text-gray-400 mt-4 text-left">
                — Pedro Santos, CEO de Startup ABC
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Contact
  const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      message: '',
    });

    const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Aquí puedes manejar el envío de datos a tu backend o a un servicio de correo
      console.log(formData);
      alert('Mensaje enviado. (Demo)');
    };

    return (
      <section
        id="contact"
        className="py-16 px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contáctanos</h2>
          <p className="text-gray-300 mb-8">
            ¿Listo para impulsar tu presencia en línea? ¡Envíanos un mensaje!
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto space-y-4 text-left"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Mensaje"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    );
  };

  // Footer
  const Footer = () => {
    return (
      <footer className="w-full py-6 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} by Global Store Kung | Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  };

  // -- FIN DE COMPONENTES INTERNOS --

  return (
    <>
      <Head>
        <title>Mi Landing Page Oscura</title>
        <meta
          name="description"
          content="Página de inicio oscura y profesional con Next.js + Tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white font-sans min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Header / Hero */}
        <Header />

        {/* About / Nosotros */}
        <About />

        {/* Equipo */}
        <Team />

        {/* Services */}
        <Services />

        {/* Testimonios */}
        <Testimonials />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
