import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import RockPaper from "./Pages/RockPaper"
import KBC from "./Pages/KBC"
import FlipMatch from "./Pages/FlipMatch"
import RockPaperGame from "./Pages/RockPaperGame"
import KBCGame from "./Pages/KBCGame"
import FlipMatchGame from "./Pages/FlipMatchGame"
import YouWon from "./Pages/YouWon"

function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/RockPaperInstruct" element = {<RockPaper />}/>
          <Route path="/KBCInstruct" element = {<KBC />}/>
          <Route path="/FlipMatchInstruct" element = {<FlipMatch />}/>
          <Route path="/RockPaperGame" element = {<RockPaperGame />}/>
          <Route path="/KBCGame" element = {<KBCGame />}/>
          <Route path="/FlipMatchGame" element = {<FlipMatchGame />}/>
          <Route path="/YouWon" element = {<YouWon />}/>
          
        </Routes>
      </BrowserRouter>     
    </>
  )
}
export default App