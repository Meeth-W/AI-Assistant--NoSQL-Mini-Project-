import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center space-y-6 px-4 sm:px-6 lg:px-8 pt-16">
        <h1 className="text-4xl md:text-6xl font-bold">
          Your Private AI Assistant
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          An intelligent assistant powered by cutting-edge LLaMA models running locally via Ollama, with smart memory stored using MongoDB.
        </p>
        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl transition duration-300 shadow-lg">
            Try it Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto mt-24 px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">LLaMA Models</h2>
          <p className="text-gray-300">
            LLaMA (Large Language Model Meta AI) is a powerful open-weight family of foundational models, optimized for performance and customization in private environments.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Ollama Integration</h2>
          <p className="text-gray-300">
            Ollama allows you to run and manage LLaMA and other large language models locally with minimal setup — enabling fast, secure, and offline AI experiences.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">MongoDB Memory</h2>
          <p className="text-gray-300">
            User queries, session context, and assistant memory are persistently managed using MongoDB, ensuring data structure flexibility and performance at scale.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-24 pb-16 px-4">
        <p className="text-gray-400">Secure. Private. Locally Tuned.</p>
        <h2 className="text-3xl font-bold mt-2 mb-4">Ready to experience the future of AI?</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl transition duration-300 shadow-lg">
          Launch Assistant
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
