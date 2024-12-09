
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question:
      "¿Si elijo algún servicio que requiera página web, podré manejar mi página en cualquier dispositivo?",
    answer:
      "Sí, podrás manejar tu página tanto por un celular, una tablet, una laptop o computadora.",
  },
  {
    question: "¿Cuáles son los métodos de pago?",
    answer:
      "Los pagos se hacen mediante transferencia bancaria, Prex o PayPal.",
  },
  {
    question: "¿Cuánto tiempo demoran en realizar mi proyecto?",
    answer:
      "Dependerá del tipo de servicio que elijas, pero siempre se indicará antes del pago, el tiempo previsto que llevará hacer el proyecto.",
  },
  {
    question: "¿Ofrecen servicio de mantenimiento después de crear mi proyecto?",
    answer:
      "Sí, ofrecemos mantenimiento continuo para asegurar que su proyecto esté siempre actualizado, seguro y funcionando correctamente.",
  },
];

export default function LandingQuestions(): JSX.Element {
  const [isActive, setIsActive] = useState<boolean[]>(Array(questions.length).fill(false));

  const toggleQuestion = (index: number): void => {
    const newIsActive = [...isActive];
    newIsActive[index] = !newIsActive[index];
    setIsActive(newIsActive);
  };

  return (
    <div
      id="faqs"
      className="flex flex-col justify-center pb-30 md:text-center md:px-40 pt-20"
    >
      <h1 className="md:hidden flex justify-center items-center text-4xl font-serif text-gray-800 pb-10">
        Preguntas <br /> frecuentes
      </h1>
      <h1 className="hidden md:flex justify-center items-center pb-20 text-4xl font-serif text-gray-800">
        Preguntas frecuentes
      </h1>

      {questions.map((item, index) => (
  <div
    key={index}
    className={`w-full ${isActive[index] ? 'bg-gray-100 text-black' : 'bg-gray-100'} transition-colors duration-300 px-2 md:px-20`}
  >
    <div
      className={`flex items-center w-full focus:outline-none cursor-pointer hover:bg-gray-200 ${
        isActive[index] ? 'border-gray-800' : ''
      }`}
      onClick={() => toggleQuestion(index)}
    >
      <h1 className="px-4 py-4 font-bold text-left text-lg w-full">
        {item.question}
      </h1>
      <Image
        className={`${
          isActive[index] ? "rotate-180" : "rotate-0"
        } transform transition-transform duration-300`}
        src="/icons/arrow_down_2.svg"
        alt="Arrow Icon"
        width={40}
        height={10}
      />
    </div>

    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: isActive[index] ? "auto" : 0,
        opacity: isActive[index] ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden bg-gray-50"
    >
      <p className="font-normal px-4 py-4 text-left text-md text-gray-700">
        {item.answer}
      </p>
    </motion.div>
  </div>
))}

      <div className="py-10"></div>
      <p className="text-center text-2xl">¿Te quedan consultas?</p>
      <a
        className="font-bold text-gray-700 text-3xl text-center pb-10 animate-bounce pt-5"
        href="/contacto"
      >
        Contáctanos
      </a>
    </div>
  );
}