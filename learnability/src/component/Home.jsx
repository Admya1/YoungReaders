import React from "react";

const Home = () => {
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

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-3xl font-semibold text-purple-600 mb-4">Your Progress</h3>
            <p className="text-5xl font-bold text-gray-800">85%</p>
            <p className="text-lg text-gray-600">Overall Accuracy</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-3xl font-semibold text-orange-600 mb-4">Daily Streak</h3>
            <p className="text-5xl font-bold text-gray-800">7 Days</p>
            <p className="text-lg text-gray-600">Keep it up!</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">Words Mastered</h3>
            <p className="text-5xl font-bold text-gray-800">124</p>
            <p className="text-lg text-gray-600">And counting!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
