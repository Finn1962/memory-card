import Card from "./components/card/Card.jsx";
import PointsDisplay from "./components/pointsDisplay/PointsDisplay.jsx";

import { getCardData } from "./data/cardData.js";

import { useState, useEffect } from "react";

import "./App.css";
import "./data/cardData.js";

export default function App() {
  const [data, setData] = useState([]);

  const [usedCards, setUsedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getCardData();
      setData(() => shuffle(newData));
    };
    fetchData();
  }, []);

  function shuffle(array) {
    const newArray = [...array];
    let currentIndex = newArray.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[currentIndex],
      ];
    }

    return newArray;
  }

  function handleClick(id) {
    if (!usedCards.includes(id)) {
      setUsedCards((prev) => [...prev, id]);
      setScore((prev) => prev + 1);
    } else {
      setUsedCards([]);
      if (score > bestScore) setBestScore(score);
      setScore(0);
    }
    setData((prev) => shuffle(prev));
  }

  return (
    <>
      <div className="page-wrapper">
        <PointsDisplay score={score} bestScore={bestScore} />
        <div className="cards-container">
          {data.map((element) => {
            return (
              <Card
                name={element.name}
                imageUrl={element.imageUrl}
                key={element.key}
                id={element.key}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
