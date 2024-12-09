import { useForm } from "react-hook-form";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import ReCAPTCHA from "react-google-recaptcha";
import LandingFooter from "../landing/LandingFooter";
import LandingNavBar from "../landing/LandingNavBar";

type FormData = {
  name: string;
  email: string;
  empresa: string;
  country: string;
  subject: string;
};

type CountryOption = {
  value: string;
  label: string;
  emoji: string;
};

const countries: CountryOption[] = [
  { value: "Argentina", label: "Argentina", emoji: "🇦🇷" },
  { value: "Uruguay", label: "Uruguay", emoji: "🇺🇾" },
  { value: "Brazil", label: "Brazil", emoji: "🇧🇷" },
  { value: "United States", label: "United States", emoji: "🇺🇸" },
  { value: "Chile", label: "Chile", emoji: "🇨🇱" },
];

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormData>();
  const [message, setMessage] = useState<{ type: string; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    console.log("Datos enviados al servidor:", { ...data, token: recaptchaToken });

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
    } catch (error: any) {
      console.error("Error de conexión:", error.message);
      setMessage({ type: "error", text: "Error de conexión al enviar el correo" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecaptcha = (token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(false);
  };

  const closeModal = () => setMessage(null);

  return (
    <>
      <LandingNavBar />
      <div className="py-10 p-4">
        <h1 className="text-4xl font-serif text-gray-800 text-center pb-10">Contacta con nuestro equipo</h1>
        <div className="max-w-md mx-auto pb-20">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md border-4 border-teal-700">
            <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">Contáctanos</h2>
            <div className="space-y-4">
              <input {...register("name", { required: "El nombre es obligatorio" })} placeholder="Nombre" className="input" />
              {errors.name && <p className="text-red-600">{errors.name.message}</p>}

              <input {...register("email", { required: "El email es obligatorio" })} placeholder="Email" type="email" className="input" />
              {errors.email && <p className="text-red-600">{errors.email.message}</p>}

              <input {...register("empresa", { required: "La empresa es obligatoria" })} placeholder="Empresa" className="input" />
              {errors.empresa && <p className="text-red-600">{errors.empresa.message}</p>}

              <Select options={countries} placeholder="Selecciona un país" onChange={(option) => setValue("country", option?.value || "")} />
              {errors.country && <p className="text-red-600">{errors.country.message}</p>}

              <textarea {...register("subject", { required: "El asunto es obligatorio" })} placeholder="Asunto" className="input h-32" />
              {errors.subject && <p className="text-red-600">{errors.subject.message}</p>}

              <ReCAPTCHA sitekey="6LcCdpMqAAAAAAgRg03GPsNMU31nLsX0RFznjD7p" onChange={handleRecaptcha} />
              {recaptchaError && <p className="text-red-600">Por favor completa el reCAPTCHA</p>}
            </div>

            <button type="submit" disabled={isLoading} className="btn mt-6">
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </form>
          {message && (
            <div className="modal">
              <h3 className={`text-2xl ${message.type === "success" ? "text-green-700" : "text-red-700"}`}>
                {message.text}
              </h3>
              <button onClick={closeModal} className="btn">{message.type === "success" ? "Aceptar" : "Cerrar"}</button>
            </div>
          )}
        </div>
      </div>
      <LandingFooter />
    </>
  );
}
