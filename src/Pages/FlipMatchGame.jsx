import { useState, useEffect } from "react";
import { 
  AiFillAndroid, AiFillApple, AiFillAmazonCircle, AiFillBug, 
  AiFillFacebook, AiFillGoogleCircle, AiFillInstagram, 
  AiFillPinterest, AiFillSkype 
} from "react-icons/ai";

const ICONS = [
  <AiFillAndroid />,
  <AiFillApple />,
  <AiFillAmazonCircle />,
  <AiFillBug />,
  <AiFillFacebook />,
  <AiFillGoogleCircle />,
  <AiFillInstagram />,
  <AiFillPinterest />
  // <AiFillSkype />
];

function FlipMatchGame() {
  // Create pairs + shuffle
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]); // indexes of flipped cards
  const [matched, setMatched] = useState([]); // indexes of matched cards
  const [showingAll, setShowingAll] = useState(true); // new state for initial preview

  useEffect(() => {
    const doubled = [...ICONS, ...ICONS]; // make pairs
    const shuffled = doubled
      .map((icon, i) => ({ id: i, icon, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort);
    setCards(shuffled);

    // Hide all cards after 5 seconds
    const timer = setTimeout(() => {
      setShowingAll(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Check if all cards are matched and navigate to win page
  useEffect(() => {
    if (cards.length > 0 && matched.length === cards.length) {
      // Small delay to let user see the final match
      setTimeout(() => {
        window.location.href = "/YouWon";
      }, 100);
    }
  }, [matched, cards]);

  const handleClick = (index) => {
    // Don't allow clicks during initial preview
    if (showingAll) return;
    
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIdx, secondIdx] = newFlipped;
      if (cards[firstIdx].icon.type === cards[secondIdx].icon.type) {
        // Matched!
        setMatched([...matched, firstIdx, secondIdx]);
      }

      // Reset flipped after delay
      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-neutral-800">
      <div className="w-10/12 md:w-5/12 border-4 border-white p-5">
        {showingAll && (
          <div className="text-white text-center mb-4 text-lg">
            Memorize the cards! Game starts in a few seconds...
          </div>
        )}
        <div className="grid grid-cols-4 gap-5 text-white text-4xl md:text-6xl">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => handleClick(index)}
              className={`border w-full aspect-square flex justify-center items-center bg-neutral-700 hover:bg-neutral-600 ${
                showingAll ? 'cursor-default' : ''
              }`}
            >
              {(showingAll || flipped.includes(index) || matched.includes(index)) ? card.icon : "?"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlipMatchGame;