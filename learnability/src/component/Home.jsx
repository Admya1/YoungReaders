import React from "react";

const Home = (props) => {
  const {total,score,totalOfGame1,scoreOfGame1,totalOfGame2,scoreOfGame2} = props;
  return (
    <center>
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
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-3xl font-semibold text-purple-600 mb-4">Memorization Accuracy</h3>
            <p className="text-5xl font-bold text-gray-800">{totalOfGame1===0?"NA":(((scoreOfGame1/totalOfGame1)*100).toFixed(2)).toString()+'%'}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-3xl font-semibold text-orange-600 mb-4">Overall Accuracy</h3>
            <p className="text-5xl font-bold text-gray-800">{total===0?"NA":(((score/total)*100).toFixed(2)).toString()+'%'}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-3xl font-semibold text-teal-600 mb-4">Spelling Accuracy</h3>
            <p className="text-5xl font-bold text-gray-800">{totalOfGame2===0?"NA":(((scoreOfGame2/totalOfGame2)*100).toFixed(2)).toString()+'%'}</p>
          </div>
        </div>
      </div>
    </div>
    </center>
  );
};

export default Home;
