import { useNavigate } from "react-router-dom";

function KBC(){

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/KBCGame");
    }

    return(
        <>
        <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
        <div className="w-11/12 h-11/12 border-2 border-white">
          
                <div className="p-3 text-white">
                    <h1 className="text-3xl font-bold text-center mb-4">
                        Welcome to "Who is this Pokemon"
                    </h1>
                    
                    <div className="pl-2.5 mb-10">
                        <h3 className="text-lg font-semibold">
                            Rules to Play : 
                        </h3>
                        <ol className="list-decimal ml-8">
                            <li>This is a multiple choice based question game, where player have to guess the write Pokemon seeing the correct outline of Pokemon.</li>
                            <li>Each question will only have 1 correct answer.</li>
                            <li>The player must select one out of the given 4 options.</li>
                            <li>There will be a total of 15 questions, and the game end when the player clears all the questions.</li> 
                            <li>Each player will have 3 lives, for each wrong answer 1 life will be lost. If player looses all the 3 lifes, the game ends.</li>
                        </ol>
                    </div>

                    <div className="flex justify-end p-4">
                        <button onClick={() => handleClick()} className="bg-white text-black rounded-xl hover:bg-neutral-200 p-2">
                            Continue
                        </button>
                    </div>

                </div>
            </div>
        </div>

        </>
    )
}
export default KBC;