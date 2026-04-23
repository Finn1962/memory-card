import Card from "./components/card/Card.jsx";
import PointsDisplay from "./components/card/pointsDisplay/PointsDisplay.jsx";

import { getCardData } from "./data/cardData.js";

import { useState, useEffect, useRef } from "react";
import { useShuffle } from "./hooks/useShuffle.js";

import "./App.css";
import "./data/cardData.js";

export default function App() {
  const { shuffle } = useShuffle();

  const [data, setData] = useState([]);

  const usedCards = useRef([]);

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
        <PointsDisplay />
        <div className="card-container">
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
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
