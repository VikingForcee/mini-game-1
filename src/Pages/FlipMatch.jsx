import { useNavigate } from "react-router-dom";

function FlipMatch(){

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/FlipMatchGame");
    }
    return(
        <>
        <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
        <div className="w-11/12 h-11/12 border-2 border-white">
          
            <div className="p-3 text-white">
                <h1 className="text-3xl font-bold text-center mb-4">
                    Welcome to Flip Match
                </h1>
                
                <div className="pl-2.5 mb-10">
                    <h3 className="text-lg font-semibold">
                        Rules to Play : 
                    </h3>
                    <ol className="list-decimal ml-8">
                        <li>The whole board is formed of combinations of different characters hiding behind the cards.</li>
                        <li>The player must pick 2 same characters simultaneously to score a point.</li>
                        <li>The game end when all the cards on the board are flipped.</li>
                        <li>The scores will be calculated, based on the total number of wrong picks. </li> 
                        <li>Top scores will be displayed on the leaderboard.</li>
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
export default FlipMatch;