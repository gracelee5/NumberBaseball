import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* '/' 경로로 들어오면 MainPage를 보여줍니다. */}
        <Route path="/" element={<MainPage />} />
        {/* '/game/숫자' 경로로 들어오면 GamePage를 보여줍니다. */}
        <Route path="/game/:length" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
