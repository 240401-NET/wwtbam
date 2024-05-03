import { useEffect, useState } from "react";

import ingameBackdrop from "../assets/gamebackdrop.webp";

import GameInfoSidebar from "../components/GameInfoSidebar";

import Lifelines from "../components/Lifelines";

import QuestionContainer from "./QuestionContainer";

import { getQuestions, submitGame } from "../api/gameService";

import { Question } from "../types";

const Game = () => {
  const [quiz, setQuiz] = useState<Question[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userId, setUserId] = useState<string>("");
  // const [gameOver, setGameOver] = useState<boolean>(false)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  //fetch quiz here
  //make function to serve 1 question at a time -> pass that question to question container
  //make correctAnswer state here pass complete and correct to both children
  //-In question container, correct will make option bg-green &
  //-In sidebar currentIndex and complete will increment round, will add diamond and increment currentRound which will change bg-color
  //Need function to reset game(questionNumber, gameOver, currentQuestion, quiz)
  //OnQuestionAnswered -> check if correct -> increment questionNumber -> set new currentQuestion
  //Need to implement user opting to not answer and keep the money
  //Need state to keep track of money

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    const userId = user?.id;
    if (quiz.length > 0) {
      submitGame(userId, score);
      setQuiz([])
      setQuestionNumber(0)
      setScore(0)
      setCurrentQuestion(null)
    }
    const fetchQuiz = async () => {
      try {
        const easyData = await getQuestions("easy");
        const mediumData = await getQuestions("medium");
        const hardData = await getQuestions("hard");
        setUserId(userId);
        setQuiz([...easyData, ...mediumData, ...hardData]);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      }
    };
    fetchQuiz();
  }, []);

  useEffect(() => {
    // Set the current question when the quiz data is available
    if (quiz.length > 0) {
      updateQuestionNumber();
    }
  }, [quiz]);

  const updateQuestionNumber = () => {
    const newQuestionNumber = questionNumber + 1;
    if (newQuestionNumber < quiz.length) {
      console.log("Game Over");
      // setGameOver(true)
      setQuestionNumber(newQuestionNumber);
      setCurrentQuestion(quiz[newQuestionNumber]);
      console.log("Current Question: ", currentQuestion);
    } else {
      endGame();
    }
  };

  const updateScore = (amount: number) => {
    // const newScore = score + amount from GameInfoSidebar where the round coresponds to the currentQuestionNumber and score will be updated by the amount in the ladder rung
    setScore(score + amount);
  };

  const endGame = () => {
    submitGame(userId, score);
    setScore(0);
    setQuestionNumber(0);
    setCurrentQuestion(null);
    console.log("Game Over!");
  };

  //TODO: Pass props to sidebar

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed"
      style={{ backgroundImage: `url(${ingameBackdrop})` }}
    >
      <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-end">
        <div className="flex justify-between items-center ">
          <Lifelines score={score} />

          <GameInfoSidebar
            roundNumber={questionNumber + 1}
            updateScore={updateScore}
          />
        </div>

        <QuestionContainer
          currentQuestion={currentQuestion}
          updateQuestionNumber={updateQuestionNumber}
        />
      </div>
    </div>
  );
};

export default Game;
