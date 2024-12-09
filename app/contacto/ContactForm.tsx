import { useForm } from "react-hook-form";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import LandingFooter from "../landing/LandingFooter";
import LandingNavBar from "../landing/LandingNavBar";

// Tipo de datos del formulario
type FormData = {
  name: string;
  email: string;
  empresa: string;
  country: string;
  subject: string;
};

// Tipo de opciones para los países
type CountryOption = {
  value: string;
  label: string;
  emoji: string;
};

// Lista de países
const countries: CountryOption[] = [
  { value: "Argentina", label: "Argentina", emoji: "🇦🇷" },
  { value: "Uruguay", label: "Uruguay", emoji: "🇺🇾" },
  { value: "Brazil", label: "Brazil", emoji: "🇧🇷" },
  { value: "United States", label: "United States", emoji: "🇺🇸" },
  { value: "Chile", label: "Chile", emoji: "🇺🇸" }
  // Agrega más países si es necesario
];

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>();
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<boolean>(false);

  // **1. La función `onSubmit`**
  const onSubmit = async (data: FormData) => {
    if (!recaptchaToken) {
      setRecaptchaError(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token: recaptchaToken }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "¡Enviado con éxito!" });
        reset();
        setRecaptchaToken(null);
      } else {
        setMessage({ type: "error", text: result.message || "Error al enviar el correo" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error de conexión al enviar el correo" });
    } finally {
      setIsLoading(false);
    }
  };

  // **2. Maneja el token generado por reCAPTCHA**
  const handleRecaptcha = (token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(false);
  };

  // **3. Cierra el modal de mensaje**
  const closeModal = () => {
    setMessage(null);
  };

  // **4. Renderiza el formulario**
  return (
    <>
      <LandingNavBar />
    <div className="py-10 p-4">
    <h1 className="md:hidden flex justify-center items-center text-4xl font-serif text-gray-800 pb-10">
        Contacta con <br /> nuestro equipo
      </h1>
      <h1 className="hidden md:flex justify-center items-center pb-20 text-4xl font-serif text-gray-800">
        Preguntas frecuentes
      </h1>
      <div className="max-w-md mx-auto pb-20">
        <form
          onSubmit={handleSubmit(onSubmit)} // Llama a `onSubmit` al enviar el formulario
          className="bg-white p-8 rounded-lg shadow-md border-4 border-teal-700"
          >
          <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">Contáctanos</h2>
          <div className="space-y-4">
            <input
              {...register("name", { required: "El nombre es obligatorio" })}
              placeholder="Nombre"
              className={`w-full p-3 border rounded-md focus:outline-none text-gray-700 ${
                  errors.name ? "border-yellow-500" : "border-teal-300"
                }`}
                />
            {errors.name && <p className="text-yellow-600 text-sm">{errors.name.message}</p>}

            <input
              {...register("email", { required: "El email es obligatorio" })}
              placeholder="Email"
              type="email"
              className={`w-full p-3 border rounded-md focus:outline-none text-gray-700 ${
                  errors.email ? "border-yellow-500" : "border-teal-300"
                }`}
                />
            {errors.email && <p className="text-yellow-600 text-sm">{errors.email.message}</p>}

            <input
              {...register("empresa", { required: "La empresa es obligatoria" })}
              placeholder="Empresa"
              className={`w-full p-3 border rounded-md focus:outline-none text-gray-700 ${
                  errors.empresa ? "border-yellow-500" : "border-teal-300"
                }`}
                />
            {errors.empresa && <p className="text-yellow-600 text-sm">{errors.empresa.message}</p>}

            <Select
              options={countries}
              placeholder="Selecciona un país"
              onChange={(selectedOption: SingleValue<CountryOption>) => {
                  setValue("country", selectedOption?.value || "");
                }}
                className="react-select-container"
              classNamePrefix="react-select"
            />
            {errors.country && <p className="text-yellow-600 text-sm">{errors.country.message}</p>}

            <textarea
              {...register("subject", { required: "El asunto es obligatorio" })}
              placeholder="Asunto"
              className={`w-full p-3 border rounded-md focus:outline-none resize-none h-32 text-gray-700 ${
                  errors.subject ? "border-yellow-500" : "border-teal-300"
                }`}
                />
            {errors.subject && <p className="text-yellow-600 text-sm">{errors.subject.message}</p>}

            <ReCAPTCHA
              sitekey="6LfFf5IqAAAAAPYQX9GEqL3ks1D0kiRzEJE6nKgw" // Reemplaza con tu Site Key
              onChange={handleRecaptcha} // Llama a `handleRecaptcha` para manejar el token
              />
            {recaptchaError && (
                <p className="text-red-600 text-sm">Por favor completa el reCAPTCHA para continuar</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-6 w-full bg-teal-700 text-white font-semibold p-3 rounded-md hover:bg-teal-800 transition-colors"
            >
            {isLoading ? "Enviando..." : "Enviar"}
          </button>
        </form>
        {message && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  message.type === "success" ? "text-green-700" : "text-red-700"
                }`}
                >
                {message.type === "success" ? "¡Enviado con éxito!" : "Error al enviar"}
              </h3>
              <p className="text-gray-700 mb-4">{message.text}</p>
              <button
                onClick={closeModal}
                className={`font-semibold py-2 px-4 rounded-md transition-colors ${
                    message.type === "success"
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-red-600 text-white hover:bg-red-700"
                }`}
                >
                {message.type === "success" ? "Aceptar" : "Cerrar"}
              </button>
            </div>
          </div>
        )}
      </div>
        </div>
      <LandingFooter />
    </>
  );
}
