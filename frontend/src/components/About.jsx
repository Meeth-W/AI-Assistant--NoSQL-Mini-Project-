import React from "react";
import { FaReact, FaPython, FaDatabase, FaRocket, FaRobot, FaServer } from "react-icons/fa";
import { SiFastapi, SiTailwindcss, SiJavascript, SiOpenai } from "react-icons/si";

const tech = [
  {
    name: "React.js",
    icon: <FaReact className="text-sky-400 text-4xl animate-spin-slow" />,
    description: "Built with a dynamic, component-based structure using React.js for fast, interactive UI.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-300 text-4xl" />,
    description: "Styled beautifully using utility-first Tailwind CSS—clean, responsive, and mobile-ready.",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi className="text-green-400 text-4xl" />,
    description: "Powered by FastAPI—modern, lightning-fast Python web framework for our backend APIs.",
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-400 text-4xl" />,
    description: "Core backend logic and AI interactions handled by Python, the heart of intelligence.",
  },
  {
    name: "MongoDB",
    icon: <FaDatabase className="text-purple-400 text-4xl" />,
    description: "Data stored securely in MongoDB, ensuring fast access and flexible data structures.",
  },
  {
    name: "AI Chatbot",
    icon: <FaRobot className="text-pink-400 text-4xl" />,
    description: "A responsive and smart AI chatbot that handles conversations, powered by modern AI APIs.",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-300 text-4xl" />,
    description: "Sprinkled with modern JavaScript logic to handle events, inputs, and async flows.",
  },
  {
    name: "LocalStorage",
    icon: <FaRocket className="text-red-400 text-4xl" />,
    description: "Saves user sessions & credentials securely using browser LocalStorage.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="text-center text-4xl font-bold mb-8 text-blue-400">🚀 About This Project</div>
      <p className="max-w-4xl mx-auto text-gray-300 text-lg text-center mb-12">
        This full-stack chatbot web app was crafted with love and some serious tech muscle.
        Below is a breakdown of the technologies that power this responsive, intelligent, and sleek experience.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {tech.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform"
          >
            <div className="mb-4">{item.icon}</div>
            <div className="text-xl font-semibold text-blue-300 mb-2">{item.name}</div>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-12">
        ✨ Designed with speed, flexibility, and user experience in mind.
      </p>
    </div>
  );
};

export default About;
