import React from "react";

const FormScore = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      {/* Wrapper to center align */}
      <div className="max-w-6xl w-full">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-12">
          <h1 className="text-6xl font-bold text-blue-600 mb-6 text-center">
            Welcome to LearnAbility
          </h1>
          <p className="text-2xl text-gray-700 text-center leading-relaxed mb-8">
            Your journey to better reading starts here!
          </p>
          <div className="flex justify-center">
            <button
              className="bg-green-500 text-white text-2xl py-4 px-10 rounded-full
                hover:bg-green-600 transform hover:scale-105 transition-all duration-200
                shadow-lg"
            >
              Start Practice Now
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-12">
          <h1 className="text-6xl font-bold text-blue-600 mb-6 text-center">
            Your Score
          </h1>
          <p className="text-2xl text-gray-700 text-center leading-relaxed mb-8">
            40
          </p>
          
          </div>
        </div>

        {/* Stats Section */}
       
      </div>

  );
};

export default FormScore;
