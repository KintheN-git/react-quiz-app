import React from "react";
import { useNavigate } from "react-router-dom";

const End = ({ score }) => {
  const navigate = useNavigate();
  const reStartQuiz = () => {
    navigate("/");
  };
  return (
    <div className=" flex flex-col items-center justify-center h-[100vh]">
      <div className="text-8xl">{`Final Score: ${score}`}</div>
      <div
        className="transition duration-350 mt-10 text-3xl font-bold  cursor-pointer bg-white hover:bg-[#000033] hover:text-white active:bg-black py-2 px-5 rounded-lg border border-[#000033]"
        onClick={reStartQuiz}
      >
        Play Again
      </div>
    </div>
  );
};

export default End;
