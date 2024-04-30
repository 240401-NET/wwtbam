import ingameBackdrop from '../assets/gamebackdrop.webp'
import QuestionContainer from './QuestionContainer'
const Game = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed" style={{ backgroundImage: `url(${ingameBackdrop})` }}>
      <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-end">
          <QuestionContainer />
        </div>
    </div>
  )
}

export default Game