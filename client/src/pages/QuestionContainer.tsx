import { useEffect, useRef, useState } from "react"
import { Question } from "../types"
import ConfirmModal from "../components/ConfirmModal"

const QuestionContainer  = ({ currentQuestion, updateQuestionNumber }: { currentQuestion: Question | null, updateQuestionNumber: () => void }) => {
  const [choice, setChoice] = useState<string>("")
  const [selected, setSelected] = useState<boolean>(false)
  const [questionOptions, setQuestionOptions] = useState<string[]>([])
  const modalRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (currentQuestion) {
      const options = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer]
      shuffle(options)
      setQuestionOptions(options)
    }
  }, [currentQuestion])
  console.log("currentQuestion ", currentQuestion)

const letterChoices = ["A", "B", "C", "D"]
  
  const optionContainer = "justify-start cursor-pointer py-4 border-2 border-sky-400 rounded-xl flex items-center gap-x-8 px-16 text-xl hover:bg-amber-500 hover:text-white text-amber-500 font-bold tracking-wider focus:text-white focus:bg-amber-500"
  const handleAnswer = (option:string) => {
    console.log("Answer clicked")
    setChoice(option) 
    setSelected(true)
    showModal()
  }  
  const shuffle = (array: string[]) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  const checkChoice = () => {
    if (choice === currentQuestion?.correctAnswer) {
      console.log("answer ",currentQuestion.correctAnswer)
        
        setChoice("")
        setSelected(false)
        updateQuestionNumber()
      } else {
        window.alert("wrong")
        setChoice("")
        setSelected(false)
        updateQuestionNumber()
      }
  }

  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
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
    {selected && (
      <ConfirmModal
      checkChoice={() => checkChoice()}
      close={() => setSelected(false)}
      modalRef={modalRef}
      />
    )}
  </div>
  )
}



export default QuestionContainer