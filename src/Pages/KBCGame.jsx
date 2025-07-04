function KBCGame(){

    return(
        <>
        <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
            <div className="w-11/12 h-11/12 border-2 border-white">
          
                <main className="text-white p-4">
                    <h1 className="text-center text-4xl font-bold mb-8">KBC</h1>
                        <div className="flex mb-16 mx-6 mt-16">
                            <h2>
                                Ques : .....
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-lg">
                            <button className="bg-netual-800 hover:bg-neutral-900 border-1 border-white rounded-2xl ml-5">A . </button>
                            <button className="bg-netual-800 hover:bg-neutral-900 border-1 border-white rounded-2xl mr-5">B . </button>
                            <button className="bg-netual-800 hover:bg-neutral-900 border-1 border-white rounded-2xl ml-5">C . </button>
                            <button className="bg-netual-800 hover:bg-neutral-900 border-1 border-white rounded-2xl mr-5">D . </button>
                            
                        </div>        
                    </main>
                </div>
            </div>
        </>
    )
}
export default KBCGame;