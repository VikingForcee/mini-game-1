import RockPaper from "./Components/RockPaper"
import FlipMatch from "./Components/FlipMatch"
import KBC from "./Components/KBC"
import RockPaperGame from "./Components/RockPaperGame"

function App(){
  return(
    <>
      <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
        <div className="w-11/12 h-11/12 border-2 border-white">
          <RockPaperGame />
        </div>
      </div>
    </>
  )
}
export default App