import { useState, useEffect } from "react";

const POKEMON_DATA = [
  {
    name: "Pikachu",
    silhouette: "/Pickachu.png",
    options: ["Pikachu", "Raichu", "Pichu", "Voltorb"]
  },
  {
    name: "Charizard",
    silhouette: "/Charizard.png",
    options: ["Charizard", "Charmander", "Charmeleon", "Dragonite"]
  },
  {
    name: "Blastoise",
    silhouette: "/Blastoise.png",
    options: ["Blastoise", "Squirtle", "Wartortle", "Gyarados"]
  },
  {
    name: "Venusaur",
    silhouette: "/venusaur.png",
    options: ["Venusaur", "Bulbasaur", "Ivysaur", "Vileplume"]
  },
  {
    name: "Mewtwo",
    silhouette: "/Mewtwo.png",
    options: ["Mewtwo", "Mew", "Alakazam", "Espeon"]
  },
  {
    name: "Gengar",
    silhouette: "/Gengar.png",
    options: ["Gengar", "Gastly", "Haunter", "Crobat"]
  },
  {
    name: "Snorlax",
    silhouette: "/Snorlax.webp",
    options: ["Snorlax", "Munchlax", "Slaking", "Ursaring"]
  },
  {
    name: "Dragonite",
    silhouette: "/Dragonite.png",
    options: ["Dragonite", "Dratini", "Dragonair", "Flygon"]
  },
  {
    name: "Machamp",
    silhouette: "/Machamp.png",
    options: ["Machamp", "Machop", "Machoke", "Hitmonlee"]
  },
  {
    name: "Alakazam",
    silhouette: "/Alakazam.png",
    options: ["Alakazam", "Abra", "Kadabra", "Espeon"]
  },
  {
    name: "Golem",
    silhouette: "/Golem.png",
    options: ["Golem", "Geodude", "Graveler", "Onix"]
  },
  {
    name: "Lapras",
    silhouette: "/Lapras.png",
    options: ["Lapras", "Slowpoke", "Dewgong", "Vaporeon"]
  },
  {
    name: "Gyarados",
    silhouette: "/Gyarados.png",
    options: ["Gyarados", "Magikarp", "Seaking", "Tentacruel"]
  },
  {
    name: "Eevee",
    silhouette: "/Eevee.png",
    options: ["Eevee", "Vaporeon", "Jolteon", "Flareon"]
  },
  {
    name: "Articuno",
    silhouette: "/Articuno.png",
    options: ["Articuno", "Zapdos", "Moltres", "Lugia"]
  },
  {
    name: "Zapdos",
    silhouette: "/Zapdos.png",
    options: ["Zapdos", "Articuno", "Moltres", "Raikou"]
  },
  {
    name: "Moltres",
    silhouette: "/Moltres.png",
    options: ["Moltres", "Articuno", "Zapdos", "Entei"]
  },
  {
    name: "Ditto",
    silhouette: "/Ditto.png",
    options: ["Ditto", "Mew", "Grimer", "Snorlax"]
  },
  {
    name: "Psyduck",
    silhouette: "/Psyduck.png",
    options: ["Psyduck", "Golduck", "Farfetch'd", "Slowpoke"]
  },
  {
    name: "Onix",
    silhouette: "/Onix.png",
    options: ["Onix", "Steelix", "Golem", "Rhydon"]
  }
];

function KBCGame() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [showAnswer, setShowAnswer] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameWon, setGameWon] = useState(false);
  const [questionKey, setQuestionKey] = useState(0); // Force re-render for new questions

    useEffect(() => {
    // Helper to shuffle options
    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    // Shuffle questions and also shuffle their options
    const shuffledQuestions = [...POKEMON_DATA]
        .sort(() => Math.random() - 0.5)
        .slice(0, 15)
        .map((q) => ({
        ...q,
        options: shuffleArray(q.options),
        }));

    setQuestions(shuffledQuestions);
    }, []);


  useEffect(() => {
    // Check if all questions are answered
    if (questions.length > 0 && currentQuestionIndex >= 15) {
      setGameWon(true);
    }
  }, [currentQuestionIndex, questions.length]);

  const handleAnswer = (answer) => {
    if (showAnswer || gameOver) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.name;
    
    setSelectedAnswer(answer);
    setShowAnswer(true);

    if (!isCorrect) {
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives === 0) {
        setGameOver(true);
        return;
      }
    }

    // Move to next question after 2 seconds
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
      setQuestionKey(prev => prev + 1); // Force re-render
    }, 2000);
  };

  const resetGame = () => {
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const shuffled = [...POKEMON_DATA]
    .sort(() => Math.random() - 0.5)
    .slice(0, 15)
    .map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));

  setQuestions(shuffled);
  setCurrentQuestionIndex(0);
  setLives(3);
  setShowAnswer(false);
  setGameOver(false);
  setSelectedAnswer(null);
  setGameWon(false);
  setQuestionKey(0);
};


  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (gameWon) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
        <div className="w-11/12 h-11/12 border-2 border-white">
          <main className="text-white p-4 text-center">
            <h1 className="text-4xl font-bold mb-8 text-yellow-400">🎉 You Won! 🎉</h1>
            <p className="text-xl mb-8">Congratulations! You've identified all 15 Pokemon!</p>
            <button 
              onClick={resetGame}
              className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-lg"
            >
              Play Again
            </button>
          </main>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
        <div className="w-11/12 h-11/12 border-2 border-white">
          <main className="text-white p-4 text-center">
            <h1 className="text-4xl font-bold mb-8">Game Over!</h1>
            <p className="text-xl mb-8">You ran out of lives!</p>
            <button 
              onClick={resetGame}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg"
            >
              Play Again
            </button>
          </main>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  // Safety check to prevent undefined error
  if (!currentQuestion) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
        <div className="text-white text-xl">Loading question...</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
        <div className="w-11/12 h-11/12 border-2 border-white">
          <main className="text-white p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg">
                Question {currentQuestionIndex + 1}/15
              </div>
              <div className="text-lg">
                Lives: {"❤️".repeat(lives)}
              </div>
            </div>
            
            <h1 className="text-center text-4xl font-bold mb-8">Who is this Pokemon</h1>
            
            <div className="flex justify-center mb-8">
              <img 
                key={questionKey} // Force re-render with new key
                src={currentQuestion.silhouette} 
                alt="Pokemon silhouette" 
                className="w-48 h-48 object-contain brightness-0 transition-all duration-1000"
                style={{
                  filter: showAnswer ? 'brightness(1)' : 'brightness(0)'
                }}
              />
            </div>
            
            <div className="flex mb-16 mx-6 mt-16">
              <h2>
                Ques: {showAnswer ? `It's ${currentQuestion.name}!` : "Who is this Pokemon?"}
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 text-lg">
              {currentQuestion.options.map((option, index) => {
                const letters = ['A', 'B', 'C', 'D'];
                let buttonClass = "bg-neutral-800 hover:bg-neutral-900 border border-white rounded-2xl p-4 transition-colors";
                
                if (showAnswer) {
                  if (option === currentQuestion.name) {
                    buttonClass += " bg-green-600";
                  } else if (option === selectedAnswer) {
                    buttonClass += " bg-red-600";
                  }
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className={`${buttonClass} ${index % 2 === 0 ? 'ml-5' : 'mr-5'}`}
                    disabled={showAnswer}
                  >
                    {letters[index]}. {option}
                  </button>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default KBCGame;