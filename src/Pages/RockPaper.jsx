function RockPaper(){
    return(
        <>
        <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
            <div className="w-11/12 h-11/12 border-2 border-white">
          
                <div className="p-3 text-white">
                    <h1 className="text-3xl font-bold text-center mb-4">
                        Welcome to Rock Paper Scissors
                    </h1>
                    
                    <div className="pl-2.5 mb-10">
                        <h3 className="text-lg font-semibold">
                            Rules to Play : 
                        </h3>
                        <ol className="list-decimal ml-8">
                            <li>The player have 3 choices to pick from : Rock / Paper / Scissors.</li>
                            <li>The Rock beat Scissors, Paper beats Rock and Scissors beat Paper.</li>
                            <li>Win maximum number of times, to build a streak.</li>
                            <li>Top scores will be displayed on the leaderboard.</li>
                        </ol>
                    </div>


                    <h1 className="text-3xl font-bold text-center mb-4">
                        Leaderboard
                    </h1>
                    <div className="px-2.5 mb-4">
                        <div className="flex text-lg justify-between font-semibold w-full mb-2">
                            <h3> Player Name </h3>
                            <h3 className="pr-6">Streak</h3>
                        </div>
                        <ol className="list-decimal ml-8">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>
                    <div className="flex justify-end p-4">
                        <button className="bg-white text-black rounded-xl hover:bg-neutral-200 p-2">
                            Continue
                        </button>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default RockPaper;