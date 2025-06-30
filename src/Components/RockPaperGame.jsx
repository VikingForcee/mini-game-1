import { LiaHandRock } from "react-icons/lia";
import { LiaHandScissors } from "react-icons/lia";
import { RxHand } from "react-icons/rx";

function RockPaperGame(){
    return(
        <>
            <main className="text-white p-4">
                <h1 className="text-center text-4xl font-bold mb-8">Rock Paper Scissors</h1>
                <div className="mb-6">
                    <div className="flex w-full text-9xl">
                        <LiaHandRock className=""/>
                        <RxHand className="transform scale-x-[-1]"/>
                        <LiaHandScissors />
                    </div>
                    <div className="flex w-full text-9xl transform scale-x-[-1]">
                        <LiaHandRock className=""/>
                        <RxHand className="transform scale-x-[-1]"/>
                        <LiaHandScissors />
                    </div>
                </div>

                <div className="flex text-center mb-6 justify-center">
                    <h1 className="mt-2.5 mr-3">Pick :</h1> 
                    <button className="text-3xl bg-neutral-800 rounded-3xl p-2 mr-3 border-1 hover:bg-neutral-900">
                        <LiaHandRock />
                    </button>
                    <button className="text-3xl bg-neutral-800 rounded-3xl p-2 mr-3 border-1 hover:bg-neutral-900">
                        <RxHand />
                    </button>
                    <button className="text-3xl bg-neutral-800 rounded-3xl p-2 mr-3 border-1 hover:bg-neutral-900">
                        <LiaHandScissors />
                    </button>
                </div>

                <div className="text-center">
                    Curr Streak : {} Best Streak : {}
                </div>
            </main>
        </>
    )
}
export default RockPaperGame;