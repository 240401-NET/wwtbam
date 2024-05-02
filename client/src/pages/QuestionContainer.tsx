import { useEffect, useState } from "react"
import { Question } from "../types"
// import { displayRandomWeightedItem } from "../helpers"

const QuestionContainer  = ({ currentQuestion, updateQuestionNumber }: { currentQuestion: Question | null, updateQuestionNumber: () => void }) => {
  const [choice, setChoice] = useState<string>("")
  const [selected, setSelected] = useState<boolean>(false)
  const [questionOptions, setQuestionOptions] = useState<string[]>([])

  useEffect(() => {
    if (currentQuestion) {
      const options = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer]
      shuffle(options)
      setQuestionOptions(options)
    }
  }, [currentQuestion])
// displayRandomWeightedItem()
console.log("options: ", questionOptions)

const letterChoices = ["A", "B", "C", "D"]
  
  const optionContainer = "justify-start cursor-pointer py-4 border-2 border-sky-400 rounded-xl flex items-center gap-x-8 px-16 text-xl hover:bg-amber-500 hover:text-white text-amber-500 font-bold tracking-wider focus:text-white focus:bg-amber-500"
  const handleAnswer = (option:string) => {
    console.log("Answer clicked")
    setChoice(option) 
    setSelected(true)
    checkChoice(option)
  }  
  const shuffle = (array: string[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  const checkChoice = (option:string) => {
    if (option === currentQuestion?.correctAnswer) {
      console.log("answer ",currentQuestion.correctAnswer)
        updateQuestionNumber()
      } else {
        window.alert("wrong")
      }
  }
return (
  <div className="w-full h-[35vh] bg-black bg-opacity-70 ">  
    <div className="flex justify-center items-center w-1/2 rounded-xl mx-auto py-6 border-4 border-sky-400">
      <p className="text-white text-4xl text-center font-serif font-bold">{currentQuestion?.question}</p>
    </div>
    <div className="grid grid-cols-2 justify-center px-64 gap-x-8 gap-y-4 pt-6">
    {questionOptions.map((option, index) => (
          <button className={optionContainer} key={index} onClick={() => handleAnswer(option)}>
            <p>{letterChoices[index]}:</p>
            <div className="text-white">{option}</div>
          </button>
        ))}
    </div>
  </div>
  )
}

export default QuestionContainer