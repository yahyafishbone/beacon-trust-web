import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center p-6">
      <h1 className="text-5xl font-extrabold mb-4">🚧 Coming Soon</h1>
      <p className="text-lg text-blue-100 max-w-lg mb-8">
        Our website is currently under construction. We’re working hard to bring
        you an amazing experience. Please check back soon!
      </p>

      <div className="mt-4 space-x-4">
        <a
          href="mailto:contact@beacontrust.co.ke"
          className="inline-block bg-white text-blue-900 font-semibold px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default App;
