import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">숫자 야구 게임</h1>
      <div className="flex space-x-4">
        <Link to="/game/3" className="no-underline">
          <div className="border-2 border-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer">
            <p className="text-xl font-semibold text-black">3자리 맞추기</p>
          </div>
        </Link>
        <Link to="/game/4" className="no-underline">
          <div className="border-2 border-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer">
            <p className="text-xl font-semibold text-black">4자리 맞추기</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
