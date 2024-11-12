import React, { useEffect, useState } from "react";

const QuestionCard = ({
  questionsData,
  score,
  setScore,
  counter,
  setCounter,
  isOver,
  setIsOver,
}) => {
  const [timer, setTimer] = useState(30);
  const approveAnswer = (e) => {
    if (questionsData[counter]?.correct_answer === e.target.value) {
      setScore(score + 1);
    }

    if (counter == questionsData.length - 1) {
      setIsOver(true);
    }
    setCounter(counter + 1);
    setTimer(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0 && counter < questionsData.length) {
        setCounter(counter + 1);
        setTimer(30);
      } else if (counter >= questionsData.length) {
        setIsOver(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="flex flex-col justify-center items-center  h-[100vh]">
      <div className="p-5 max-w-[700px] w-full border border-[#000033] flex flex-col justify-center items-center shadow-2xl shadow-[#000033] rounded-lg">
        <div className="mt-5 ml-5 text-3xl w-14 h-14 font-bold self-start mb-5 border border-[#000033] bg-[#000033] text-white   rounded-full p-2 justify-center items-center text-center">
          {timer}
        </div>

        <div className="text-3xl font-bold text-center py-5">
          {counter + 1} / {questionsData.length} -{" "}
          {questionsData[counter]?.question}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {questionsData[counter]?.answers.map((answer, index) => (
            <button
              type="button"
              key={index}
              value={answer}
              className=" text-xl font-bold  w-72 max-w-72  cursor-pointer bg-white hover:bg-[#000033] hover:text-white active:bg-black py-2 px-5 rounded-lg border border-[#000033]"
              onClick={approveAnswer}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
