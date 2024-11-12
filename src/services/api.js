import axios from "axios";
import { decode } from "html-entities";
import { shuffleArray } from "../helper";
const a = "amount=10&category=31&difficulty=easy&type=multiple";
const baseUrl = (amount, category, difficulty) =>
  `https://opentdb.com/api.php?amount=${amount || "10"}&category=${
    category || "31"
  }&difficulty=${difficulty || "easy"}&type=multiple`;

export const getQuestions = async (amount, category, difficulty) => {
  try {
    const response = await axios.get(
      `${baseUrl(amount, category, difficulty)}`
    );
    const newData = response.data.results.map((question) => ({
      ...question,
      question: decode(question.question),
      correct_answer: decode(question.correct_answer),
      answers: shuffleArray([
        ...question.incorrect_answers.map((answer) => decode(answer)),
        decode(question.correct_answer),
      ]),
    }));

    return newData;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get("https://opentdb.com/api_category.php");
    return response.data.trivia_categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
