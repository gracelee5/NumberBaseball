import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import player from "../assets/player.png";

const MainPage = () => {
  return (
    <div className="main-bg flex flex-col items-center justify-center min-h-screen p-8 font-dunggeunmo">
      <div className="bg-gray-100/80 p-10 rounded-lg flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          숫자 야구 게임
        </h1>
        <img src={player} alt="야구 선수" className="w-48 h-48 mb-6" />
        <div className="flex space-x-4">
          <Link to="/game/3" className="no-underline">
            <div className="border-2 bg-whi border-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer">
              <p className="text-lg font-semibold text-black">3자리 맞추기</p>
            </div>
          </Link>
          <Link to="/game/4" className="no-underline">
            <div className="border-2 border-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer">
              <p className="text-lg font-semibold text-black">4자리 맞추기</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
