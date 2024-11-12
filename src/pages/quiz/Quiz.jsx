import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../services/api";
import QuestionCard from "../../components/QuestionCard";
import End from "../end/End";

const Quiz = () => {
  const { difficulty, category, amount } = useParams();
  const [questionsData, setQuestionsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(0);
  const [isOver, setIsOver] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getQuestions(amount, category, difficulty)
      .then((res) => setQuestionsData(res))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {isOver ? (
            <End score={score} />
          ) : (
            <QuestionCard
              questionsData={questionsData}
              score={score}
              setScore={setScore}
              counter={counter}
              setCounter={setCounter}
              isOver={isOver}
              setIsOver={setIsOver}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
