import Card from "./components/card/Card.jsx";
import PointsDisplay from "./components/pointsDisplay/PointsDisplay.jsx";

import { getCardData } from "./data/cardData.js";

import { useState, useEffect, useRef } from "react";
import { useShuffle } from "./hooks/useShuffle.js";

import "./App.css";
import "./data/cardData.js";

export default function App() {
  const { shuffle } = useShuffle();

  const [data, setData] = useState([]);

  const usedCards = useRef([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await getCardData();
      const randomizedData = shuffle(newData);
      setData(randomizedData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <PointsDisplay score={score} bestScore={bestScore} />
        <div className="cards-container">
          {data.map((element) => {
            return (
              <Card
                data={data}
                name={element.name}
                imageUrl={element.imageUrl}
                key={element.key}
                id={element.key}
                usedCards={usedCards}
                setData={setData}
                shuffle={shuffle}
                setScore={setScore}
                score={score}
                setBestScore={setBestScore}
                bestScore={bestScore}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
