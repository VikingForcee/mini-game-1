import { BrowserRouter, Link, useNavigate, Route, Routes} from "react-router-dom";
import { LiaHandRock } from "react-icons/lia";
import { LiaHandScissors } from "react-icons/lia";
import { RxHand } from "react-icons/rx";

function YouWon(){
    const Navigate = useNavigate();
    const handleClick = (x) => {
        if(x === 'a') Navigate("/RockPaperInstruct");
        else if(x === 'b') Navigate("/FlipMatchInstruct");
        else Navigate("/KBCInstruct");
    }

    return(
        <>
        <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
            <div className="w-11/12 min-h-fit md:min-h-120 border-2 border-white">          
               <div className="p-3 text-white">
                  <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
                     Congratulations
                  </h1>

                  <div className="text-xl ml-3 mb-12 text-center">
                    You Have Won the Game !!
                  </div>
                  <div className="ml-3 mb-12 text-center">
                    Select any of the Game below to play again :
                  </div>
                  <div className="flex justify-center p-4 gap-5">
                    <button onClick={() => handleClick('a')} className="border-2 rounded-2xl p-3 hover:bg-neutral-900 w-28 md:w-50 h-30 md:h-50">
                        <h1 className="text-md md:text-xl font-semibold mb-4">Rock Paper Scissor</h1>
                        <div className="flex gap-2 text-5xl">
                            <LiaHandRock />
                            <RxHand />
                            <LiaHandScissors />
                        </div>
                    </button>
                    <button onClick={() => handleClick('b')} className="border-2 rounded-2xl p-3 hover:bg-neutral-900 w-28 md:w-45">
                        <h1 className="text-md md:text-xl font-semibold mb-4">Flip Match</h1>
                    </button>
                    <button onClick={() => handleClick('c')} className="border-2 rounded-2xl p-3 hover:bg-neutral-900 w-28 md:w-45">
                        <h1 className="text-md md:text-xl font-semibold mb-4">Who is this Pokemon</h1>
                    </button>
                  </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default YouWon;