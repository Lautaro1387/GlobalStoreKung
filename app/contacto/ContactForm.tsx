import { useForm } from "react-hook-form";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import LandingFooter from "../landing/LandingFooter";
import LandingNavBar from "../landing/LandingNavBar";
import ReCAPTCHA from "react-google-recaptcha";

// Definimos el tipo para las opciones de país
type CountryOption = {
  value: string;
  label: string;
  emoji: string;
};

// Lista de países con emojis de banderas
const countries: CountryOption[] = [
  { value: "Argentina", label: "Argentina", emoji: "🇦🇷" },
  { value: "Uruguay", label: "Uruguay", emoji: "🇺🇾" },
  { value: "Brazil", label: "Brazil", emoji: "🇧🇷" },
  { value: "United States", label: "United States", emoji: "🇺🇸" },
  { value: "Canada", label: "Canada", emoji: "🇨🇦" },
  { value: "Mexico", label: "Mexico", emoji: "🇲🇽" },
  { value: "United Kingdom", label: "United Kingdom", emoji: "🇬🇧" },
  { value: "France", label: "France", emoji: "🇫🇷" },
  { value: "Germany", label: "Germany", emoji: "🇩🇪" },
  { value: "Spain", label: "Spain", emoji: "🇪🇸" },
  { value: "Italy", label: "Italy", emoji: "🇮🇹" },
  { value: "Australia", label: "Australia", emoji: "🇦🇺" },
  { value: "China", label: "China", emoji: "🇨🇳" },
  { value: "India", label: "India", emoji: "🇮🇳" },
  { value: "Japan", label: "Japan", emoji: "🇯🇵" },
  { value: "South Korea", label: "South Korea", emoji: "🇰🇷" },
  { value: "South Africa", label: "South Africa", emoji: "🇿🇦" },
  { value: "Russia", label: "Russia", emoji: "🇷🇺" },
  { value: "Saudi Arabia", label: "Saudi Arabia", emoji: "🇸🇦" },
];

// Tipo de datos del formulario
type FormData = {
  name: string;
  email: string;
  empresa: string;
  country: string;
  subject: string;
};

// Componente principal
export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>();
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<boolean>(false);

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
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      if (response.ok) {
        setMessage({ type: "success", text: "¡Enviado con éxito!" });
        reset();
        setRecaptchaToken(null);
      } else {
        setMessage({ type: "error", text: "Hubo un error al enviar el correo" });
      }
    } catch {
      setMessage({ type: "error", text: "Error de conexión al enviar el correo" });
    }
    setIsLoading(false);
  };

  const handleRecaptcha = (token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(false);
  };

  const closeModal = () => {
    setMessage(null);
  };

  return (
    <>
      <LandingNavBar />
      <h1 className="pt-40 hidden md:flex justify-center items-center pb-10 text-4xl font-serif text-gray-800 font-bold">
        Contacta con nuestro equipo
      </h1>
      <div className="max-w-md mx-auto pb-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-purple-100 p-8 rounded-lg shadow-md border-4 border-teal-700"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">Contáctanos</h2>
          <div className="space-y-4">
            <input
              {...register("name", { required: "El nombre es obligatorio" })}
              placeholder="Nombre"
              className={`w-full p-3 border rounded-md focus:outline-none text-gray-700 ${
                errors.name ? "border-yellow-500" : "border-purple-300"
              }`}
            />
            {errors.name && <p className="text-yellow-600 text-sm">{errors.name.message}</p>}

            <input
              {...register("email", { required: "El email es obligatorio" })}
              placeholder="Email"
              type="email"
              className={`w-full p-3 border rounded-md focus:outline-none text-gray-700 ${
                errors.email ? "border-yellow-500" : "border-purple-300"
              }`}
            />
            {errors.email && <p className="text-yellow-600 text-sm">{errors.email.message}</p>}

            <input
              {...register("empresa", { required: "La empresa es obligatoria" })}
              placeholder="Empresa"
              className={`w-full p-3 border rounded-md focus:outline-none text-gray-700 ${
                errors.empresa ? "border-yellow-500" : "border-purple-300"
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
                errors.subject ? "border-yellow-500" : "border-purple-300"
              }`}
            />
            {errors.subject && <p className="text-yellow-600 text-sm">{errors.subject.message}</p>}

            <ReCAPTCHA
              sitekey="TU_CLAVE_DEL_SITIO"
              onChange={handleRecaptcha}
            />
            {recaptchaError && (
              <p className="text-red-600 text-sm">Por favor completa el reCAPTCHA</p>
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
      <LandingFooter />
    </>
  );
}
