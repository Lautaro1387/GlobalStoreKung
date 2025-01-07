import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select"; // Asegúrate de importar react-select correctamente
import ReCAPTCHA from "react-google-recaptcha";
import LandingFooter from "../landing/LandingFooter";
import LandingNavBar from "../landing/LandingNavBar";
import { countries, CountryOption } from "./CountryList"; // Importamos la lista de países

type FormData = {
  name: string;
  email: string;
  empresa: string;
  country: string;
  subject: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>();
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<boolean>(false);

  // Enviar formulario
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
      console.log("Respuesta del servidor:", result);

      if (response.ok) {
        setMessage({ type: "success", text: "¡Enviado con éxito!" });
        reset();
        setRecaptchaToken(null);
      } else {
        setMessage({ type: "error", text: result.message || "Error al enviar el correo" });
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setMessage({ type: "error", text: "Error de conexión al enviar el correo" });
    } finally {
      setIsLoading(false);
    }
  };

  // Manejo de reCAPTCHA
  const handleRecaptcha = (token: string | null) => {
    console.log("Token de reCAPTCHA generado:", token);
    setRecaptchaToken(token);
    setRecaptchaError(false);
  };

  const closeModal = () => setMessage(null);

  return (
    <>
      <LandingNavBar />
      <div className="py-10 p-4">
        <h1 className="pt-20 text-4xl font-bold font-serif text-gray-800 text-center pb-10">
          Contacta con nuestro equipo
        </h1>
        <div className="max-w-md mx-auto pb-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-lg shadow-md border-4 border-teal-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">
              Contáctanos
            </h2>

            {/* Campos del formulario */}
            <div className="space-y-4">
              <input
                {...register("name", { required: "El nombre es obligatorio" })}
                placeholder="Nombre"
                className="w-full p-2 border rounded-md"
              />
              {errors.name && <p className="text-red-600">{errors.name.message}</p>}

              <input
                {...register("email", { required: "El email es obligatorio" })}
                placeholder="Email"
                type="email"
                className="w-full p-2 border rounded-md"
              />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}

              <input
                {...register("empresa", { required: "La empresa es obligatoria" })}
                placeholder="Empresa"
                className="w-full p-2 border rounded-md"
              />
              {errors.empresa && <p className="text-red-600">{errors.empresa.message}</p>}

              <Select
  options={countries}
  placeholder="Selecciona un país"
  onChange={(option) => setValue("country", option?.value || "")}
  formatOptionLabel={(option: CountryOption) => (
    <div className="flex items-center">
      <span className={`flag-icon flag-icon-${option.value.toLowerCase()}`} style={{ marginRight: 8 }} />
      {option.label}
    </div>
  )}
/>

              {errors.country && <p className="text-red-600">{errors.country.message}</p>}

              <textarea
                {...register("subject", { required: "El asunto es obligatorio" })}
                placeholder="Asunto"
                className="w-full p-2 border rounded-md h-32"
              />
              {errors.subject && <p className="text-red-600">{errors.subject.message}</p>}

              {/* reCAPTCHA */}
              <ReCAPTCHA
                sitekey="6LcCdpMqAAAAAAgRg03GPsNMU31nLsX0RFznjD7p" // Inserta tu sitekey aquí
                onChange={handleRecaptcha}
              />
              {recaptchaError && (
                <p className="text-red-600">Por favor completa el reCAPTCHA</p>
              )}
            </div>

            {/* Botón de enviar */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </form>

          {/* Modal de mensaje */}
          {message && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3
                  className={`text-2xl ${
                    message.type === "success" ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {message.text}
                </h3>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
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
