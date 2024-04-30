import ingameBackdrop from '../assets/gamebackdrop.webp'
import GameInfoSidebar from '../components/GameInfoSidebar'
import Lifelines from '../components/Lifelines'
import QuestionContainer from './QuestionContainer'
const Game = () => {
  //fetch quiz here 
  //make function to serve 1 question at a time -> pass that question to question container
  //make correctAnswer state here pass complete and correct to both children
  //-In question container, correct will make option bg-green & 
  //-In sidebar correct and complete will increment round, will add diamond and increment currentRound which will change bg-color 

  return (
    <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed" style={{ backgroundImage: `url(${ingameBackdrop})` }}>
      
      <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-end">
        <div className='flex justify-between items-center '>
          <Lifelines />
        <GameInfoSidebar />
        </div>
          
          <QuestionContainer />
        </div>
    </div>
  )
}

export default Game