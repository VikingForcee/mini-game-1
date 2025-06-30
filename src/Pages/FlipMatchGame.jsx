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
  <AiFillPinterest />,
  <AiFillSkype />
];

function FlipMatchGame() {
  // Create pairs + shuffle
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]); // indexes of flipped cards
  const [matched, setMatched] = useState([]); // indexes of matched cards

  useEffect(() => {
    const doubled = [...ICONS, ...ICONS]; // make pairs
    const shuffled = doubled
      .map((icon, i) => ({ id: i, icon, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort);
    setCards(shuffled);
  }, []);

  const handleClick = (index) => {
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
      <div className="w-11/12 border-4 border-white p-5">
        <div className="grid grid-cols-5 gap-5 text-white text-5xl">
          {cards.map((card, index) => (
            <button
              key={card.id}
              onClick={() => handleClick(index)}
              className="border w-full aspect-square flex justify-center items-center bg-neutral-700 hover:bg-neutral-600"
            >
              {(flipped.includes(index) || matched.includes(index)) ? card.icon : "?"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlipMatchGame;
