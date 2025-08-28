import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";

const generateNumber = (len: number) => {
  let num = "";
  while (num.length < len) {
    const digit = Math.floor(Math.random() * 10).toString();
    if (!num.includes(digit)) {
      num += digit;
    }
  }
  return num;
};
const GamePage = () => {
  const { length: lengthStr } = useParams();
  const navigate = useNavigate();
  const length = Number(lengthStr);

  const [secretNumber, setSecretNumber] = useState("");
  const [guess, setGuess] = useState("");
  const [history, setHistory] = useState<
    { guess: string; strikes: number; balls: number }[]
  >([]);
  const [chances, setChances] = useState(9);

  useEffect(() => {
    setSecretNumber(generateNumber(length));
  }, [length]);

  const handleNumberClick = (num: number) => {
    if (guess.length < length && !guess.includes(String(num))) {
      setGuess(guess + String(num));
    }
  };
  const handleDeleteClick = () => {
    setGuess(guess.slice(0, -1));
  };
  const handleSubmitClick = () => {
    if (guess.length < length) {
      alert(`${length}개의 숫자를 입력해주세요.`);
      return;
    }
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < length; i++) {
      if (guess[i] === secretNumber[i]) {
        strikes++;
      } else if (secretNumber.includes(guess[i])) {
        balls++;
      }
    }

    const newRecord = { guess, strikes, balls };
    setHistory([...history, newRecord]);
    setChances((prev) => prev - 1);
    setGuess("");

    if (strikes === length) {
      alert("정답입니다!");
      navigate("/");
    } else if (chances - 1 === 0) {
      alert(
        `아쉽네요! 9번의 기회를 모두 사용했습니다. 정답은 ${secretNumber}였습니다.`
      );
      navigate("/"); // 메인 페이지로 이동
    }
  };

  return (
    <div className=" main-bg flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 font-dunggeunmo">
      <div className="bg-gray-100/80 p-5 w-96 rounded-lg flex flex-col items-center justify-center">
        <div className="w-full max-w-sm mb-4 ">
          <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">
            숫자 야구 ({length}자리)
          </h2>
          <div className="bg-gray-100 rounded-lg p-3 text-center text-3xl tracking-widest  shadow-lg">
            {/* 사용자가 입력한 숫자 */}
            <span className="text-black">{guess}</span>
            {/* 남은 자릿수를 빈 공간으로 표시 */}
            <span className="text-gray-400">
              {" _".repeat(length - guess.length)}
            </span>
          </div>
        </div>
        <div className="w-full max-w-sm flex justify-end items-center mb-2 mr-5">
          <span className="text-lg font-semibold text-black-500">
            {chances}/9
          </span>
        </div>
        <div className="w-full max-w-sm h-64 bg-amber-100 rounded-lg shadow-lg py-4 px-8  overflow-y-auto mb-8">
          {history.length > 0 ? (
            <ul className="space-y-2">
              {history.map((record, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-lg border-b border-amber-900"
                >
                  <span>{record.guess}</span>
                  <span
                    className={`font-semibold ${
                      record.strikes === length
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {record.strikes}S {record.balls}B
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div></div>
          )}
        </div>

        {/* 하단: 0~9 숫자 버튼 */}
        <div className="w-full max-w-sm">
          <div className="grid grid-cols-5 gap-3">
            {/* 0부터 9까지의 숫자 버튼 */}
            {Array.from({ length: 10 }, (_, i) => i).map((number) => (
              <button
                key={number}
                className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold py-4 rounded-lg text-2xl transition-colors"
                onClick={() => handleNumberClick(number)}
              >
                {number}
              </button>
            ))}
          </div>
          <div className="flex space-x-3 mt-4">
            <button
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-lg transition-colors"
              onClick={handleDeleteClick}
            >
              지우기
            </button>
            <button
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors"
              onClick={handleSubmitClick}
            >
              제출
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
