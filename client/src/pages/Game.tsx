import { useEffect, useState } from 'react'
import ingameBackdrop from '../assets/gamebackdrop.webp'
import GameInfoSidebar from '../components/GameInfoSidebar'
import Lifelines from '../components/Lifelines'
import QuestionContainer from './QuestionContainer'
import { getQuestions } from '../api/gameService'
import { Question } from '../types'
const Game = () => {
  const [quiz,setQuiz] = useState<Question[]>([])
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  // const [gameOver, setGameOver] = useState<boolean>(false)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
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
    const fetchQuiz = async () => {
      try {
        const easyData = await getQuestions("easy");
        const mediumData = await getQuestions("medium");
        const hardData = await getQuestions("hard");

        setQuiz([...easyData, ...mediumData, ...hardData])
      } catch (error) {
        console.error("Error fetching questions: ", error)
      }
    }
    fetchQuiz()
  }, []) 
  console.log(currentQuestion?.incorrectAnswers)

  useEffect(() => {
    // Set the current question when the quiz data is available
    if (quiz.length > 0) {
      handleCurrentQuestion();
    }
  }, [quiz]) 

  console.log("Quiz: ", quiz)

  const handleCurrentQuestion = () => {
    
  }
  //if questionNumber > quiz.length -> gam

 const updateQuestionNumber = () => {
    const newQuestionNumber = questionNumber + 1
  if (newQuestionNumber < quiz.length) {
    console.log("Game Over")
    // setGameOver(true)
    setQuestionNumber(newQuestionNumber)
    setCurrentQuestion(quiz[newQuestionNumber])
  } else {
    setCurrentQuestion(null)
  }

    }
    
  

  return (
    <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed" style={{ backgroundImage: `url(${ingameBackdrop})` }}>
      
      <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-end">
        <div className='flex justify-between items-center '>
        <Lifelines />
        <GameInfoSidebar />
        </div>
          <QuestionContainer currentQuestion={currentQuestion} updateQuestionNumber={updateQuestionNumber} />
        </div>
    </div>
  )
}

export default Game