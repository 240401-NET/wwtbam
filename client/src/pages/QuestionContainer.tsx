// import { QuestionOptionProps } from "../types"

// import { useEffect } from "react"
import { Question } from "../types"

// import { useState } from "react"
const QuestionContainer = ({ currentQuestion }: { currentQuestion: Question | null }) => {
  // const [currentQuestion, setCurrentQuestion] = useState<QuestionOptionProps> ({
const questionOptions: string[] = []
  if (currentQuestion) {
    questionOptions.push(currentQuestion.correctAnswer)
    
    questionOptions.push(...(currentQuestion?.incorrectAnswers ?? []))
  }
  console.log("currentquestion: ", currentQuestion)
    const optionContainer = "cursor-pointer py-4 border-2 border-sky-400 rounded-xl flex items-center gap-x-8 px-16 text-xl hover:bg-amber-500 hover:text-white text-amber-500 font-bold tracking-wider"
console.log("questionOptions: ", questionOptions)
  const handleAnswer = () => {
    console.log("Answer clicked")
  }  
return (
  <div className="w-full h-[35vh] bg-black bg-opacity-70 ">  
    <div className="flex justify-center items-center w-1/2 rounded-xl mx-auto py-6 border-4 border-sky-400">
      <p className="text-white text-4xl text-center font-serif font-bold">{currentQuestion?.question}</p>
    </div>
    <div className="grid grid-cols-2 justify-center  px-64 gap-x-8 gap-y-4 pt-6">
      {questionOptions.length > 0 ? (questionOptions?.map((option, index) => (
        <button className={optionContainer} key={index} onClick={handleAnswer}>
          <p className="">A:</p>
          <div className="text-white ">{option}</div>
        </button>
      ))) : null} 
    </div>
  </div>
  )
}

export default QuestionContainer