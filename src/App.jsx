import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h1 className="text-3xl font-bold text-gray-900">Your Company</h1>
          </nav>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Welcome to our site
                </h2>
                <p className="text-gray-600">
                  This is a basic landing page template. Customize it to fit
                  your needs.
                </p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
