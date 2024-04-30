import ingameBackdrop from '../assets/gamebackdrop.webp'
import GameInfoSidebar from '../components/GameInfoSidebar'
import QuestionContainer from './QuestionContainer'
const Game = () => {
  //fetch quiz here 
  return (
    <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed" style={{ backgroundImage: `url(${ingameBackdrop})` }}>
      
      <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-end">
      <GameInfoSidebar />
          <QuestionContainer />
        </div>
    </div>
  )
}

export default Game