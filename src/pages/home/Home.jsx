import { useState } from "react";
import DropDown from "../../components/DropDown";
import { Category, Difficulty, QuestionCount } from "../../constants";
import { useNavigate } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
const Home = () => {
  const [difficulty, setDifficulty] = useState(Difficulty.EASY);
  const [amount, setAmount] = useState(QuestionCount[10]);
  const [category, setCategory] = useState(Category["General Knowledge"]);
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate(`/quiz/${difficulty}/${category}/${amount}`);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center  h-[100vh] ">
        <div className="flex flex-col justify-center items-center border border-[#000033] rounded-lg p-5 shadow-2xl shadow-[#000033]">
          <div className=" border-b border-[#000033] text-8xl text-center pb-1">
            QuizGame
            <div className="text-2xl">Settings</div>
          </div>
          <div className="flex flex-col justify-center items-center mt-3">
            <div className="self-start">Choose a Category</div>
            <DropDown obj={Category} setFunc={setCategory} />
          </div>

          <div className="flex flex-col justify-center items-center mt-3">
            <div className="self-start">Choose Difficulty</div>
            <DropDown obj={Difficulty} setFunc={setDifficulty} />
          </div>

          <div className="flex flex-col justify-center items-center mt-3">
            <div className="self-start">Choose Amount of Question</div>
            <DropDown obj={QuestionCount} setFunc={setAmount} />
          </div>

          <div
            className="transition duration-350 mt-5 text-3xl font-bold  cursor-pointer bg-white hover:bg-[#000033] hover:text-white active:bg-black py-2 px-5 rounded-lg border border-[#000033]"
            onClick={startQuiz}
          >
            Start Quiz
          </div>
        </div>
        <div className="mt-5">
          <div className="text-2xl">Quiz Game By Hasret Karci</div>
          <div className="flex justify-center items-center mt-5 ">
            <a href="https://github.com/KintheN-git">
              <FaGithubSquare
                size={50}
                className="cursor-pointer hover:scale-125"
              />
            </a>

            <a href="https://www.linkedin.com/in/hasretkarci/">
              <FaLinkedin
                size={50}
                className="cursor-pointer hover:scale-125"
              />
            </a>
          </div>
          <div className="text-xl mt-5 text-center cursor-pointer hover:underline">
            View project repository.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
