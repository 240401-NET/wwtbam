import { useState } from "react"
import { Question } from "../types"
// import { displayRandomWeightedItem } from "../helpers"

const QuestionContainer  = ({ currentQuestion, updateQuestionNumber }: { currentQuestion: Question | null, updateQuestionNumber: () => void }) => {
  const [choice, setChoice] = useState<string>("")
  const [selected, setSelected] = useState<boolean>(false)
const questionOptions: string[] = []

// displayRandomWeightedItem()


const letterChoices = ["A", "B", "C", "D"]
  if (currentQuestion) {
    questionOptions.push(currentQuestion.correctAnswer)
    questionOptions.push(...(currentQuestion?.incorrectAnswers ?? []))
  }
  //Need to randomize question order before mapping
    const optionContainer = "justify-start cursor-pointer py-4 border-2 border-sky-400 rounded-xl flex items-center gap-x-8 px-16 text-xl hover:bg-amber-500 hover:text-white text-amber-500 font-bold tracking-wider focus:text-white focus:bg-amber-500"
  const handleAnswer = (option:string) => {
    console.log("Answer clicked")
    setChoice(option) 
    setSelected(true)
    checkChoice()
  }  

  const checkChoice = () => {
    if (choice === currentQuestion?.correctAnswer) {
        updateQuestionNumber()
      } else {
        window.alert("wrong")
      }
  }
  console.log("Choice: ",  choice)
return (
  <div className="w-full h-[35vh] bg-black bg-opacity-70 ">  

    <div className="flex justify-center items-center w-1/2 rounded-xl mx-auto py-6 border-4 border-sky-400">
      <p className="text-white text-4xl text-center font-serif font-bold">{currentQuestion?.question}</p>
    </div>
    <div className="grid grid-cols-2 justify-center  px-64 gap-x-8 gap-y-4 pt-6">
      {questionOptions.length > 0 ? (questionOptions?.map((option, index) => (
        <button className={optionContainer} key={index} onClick={() => handleAnswer(option)}>
          <p className="">{letterChoices[index]}:</p>
          <div className="text-white">{option}</div>
        </button>
      ))) : null} 
    </div>
  </div>
  )
}

export default QuestionContainer