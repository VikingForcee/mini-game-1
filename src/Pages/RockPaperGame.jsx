import { LiaHandRock } from "react-icons/lia";
import { LiaHandScissors } from "react-icons/lia";
import { RxHand } from "react-icons/rx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RockPaperGame(){
    const Navigate = useNavigate();
    const [currScore, setCurrScore] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const options = ["Rock", "Paper", "Scissor"];
    var cpuPick
    const cpuPickFnc = () => {
        cpuPick = options[Math.floor(Math.random() * options.length)];
    }

    const [playerInd, setPlayerInd] = useState(0);
    const [computerInd, setComputerInd] = useState(0);

    const playerPick = [
        <LiaHandRock className="transform rotate-90"/>,
        <RxHand className="transform scale-x-[-1]"/>,
        <LiaHandScissors />
    ]

    const computerPick = [
        <LiaHandRock className="transform rotate-90"/>,
        <RxHand className="transform scale-x-[-1]"/>,
        <LiaHandScissors />
    ]

    const game = (x) => {
        cpuPickFnc();
        if(x === "Rock") setPlayerInd(0);
        else if(x === "Paper") setPlayerInd(1);
        else setPlayerInd(2);
        
        if(cpuPick === "Rock") setComputerInd(0);
        else if(cpuPick === "Paper") setComputerInd(1);
        else setComputerInd(2);

        // Winning
        if((x === "Rock" && cpuPick === "Scissor") || (x === "Paper" && cpuPick === "Rock") || (x === "Scissor" && cpuPick === "Paper")) setCurrScore(currScore+1);
        
        // Losing
        else if((x === "Rock" && cpuPick === "Paper")|| (x === "Paper" && cpuPick === "Scissor") || (x === "Scissor" && cpuPick === "Rock")){
            setBestStreak(Math.max(bestStreak, currScore));
            setCurrScore(0);
        }

        // For Tie we keep the score constant
    }

    return(
        <>
            <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
                <div className="w-11/12 h-11/12 border-2 border-white">
          
            <main className="text-white p-4">
                <h1 className="text-center text-4xl font-bold mb-8">Rock Paper Scissors</h1>
                <div className="flex mb-16 mx-16 mt-16">
                    <div className="flex w-full text-9xl">
                        <span key={playerInd}>{playerPick[playerInd]}</span>
                    </div>
                    <div className="flex w-full text-9xl transform scale-x-[-1]">
                        <span key={computerInd}>{computerPick[computerInd]}</span>
                    </div>
                </div>

                <div className="flex text-center mb-6 justify-center">
                    <h1 className="mt-3 mr-3 text-2xl font-semibold">Pick :</h1> 
                    <button onClick={() => game("Rock")} className="text-4xl bg-neutral-800 rounded-4xl p-3 mr-3 border-1 hover:bg-neutral-900">
                        <LiaHandRock />
                    </button>
                    <button onClick={() => game("Paper")} className="text-4xl bg-neutral-800 rounded-4xl p-3 mr-3 border-1 hover:bg-neutral-900">
                        <RxHand />
                    </button>
                    <button onClick={() => game("Scissor")} className="text-4xl bg-neutral-800 rounded-4xl p-3 mr-3 border-1 hover:bg-neutral-900">
                        <LiaHandScissors />
                    </button>
                </div>

                <div className="text-center">
                    Curr Streak : {currScore} | Best Streak : {bestStreak}
                </div>
            </main>
                </div>
                <div className="fixed bottom-6 right-6">
                <button
                    onClick={() => Navigate("/")}
                    className="bg-neutral-100 hover:bg-neutral-400 text-neutral-900 px-4 py-2 rounded-lg shadow-md"
                >
                    Return to Home
                </button>
            </div>
            </div>
        </>
    )
}
export default RockPaperGame;