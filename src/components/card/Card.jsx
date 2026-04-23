import "./card.css";

export default function Card({
  name,
  imageUrl,
  usedCards,
  id,
  setData,
  data,
  shuffle,
}) {
  return (
    <div
      className="container noselect"
      onClick={() => {
        if (!usedCards.current.includes(id)) {
          usedCards.current.push(id);
        }
        const randomizedData = shuffle(data);
        setData(randomizedData);
        console.log(usedCards.current);
      }}
    >
      <div className="canvas">
        <div className="tracker tr-1"></div>
        <div className="tracker tr-2"></div>
        <div className="tracker tr-3"></div>
        <div className="tracker tr-4"></div>
        <div className="tracker tr-5"></div>
        <div className="tracker tr-6"></div>
        <div className="tracker tr-7"></div>
        <div className="tracker tr-8"></div>
        <div className="tracker tr-9"></div>
        <div className="tracker tr-10"></div>
        <div className="tracker tr-11"></div>
        <div className="tracker tr-12"></div>
        <div className="tracker tr-13"></div>
        <div className="tracker tr-14"></div>
        <div className="tracker tr-15"></div>
        <div className="tracker tr-16"></div>
        <div className="tracker tr-17"></div>
        <div className="tracker tr-18"></div>
        <div className="tracker tr-19"></div>
        <div className="tracker tr-20"></div>
        <div className="tracker tr-21"></div>
        <div className="tracker tr-22"></div>
        <div className="tracker tr-23"></div>
        <div className="tracker tr-24"></div>
        <div className="tracker tr-25"></div>
        <div id="card">
          <div className="title">
            <p>{name}</p>
          </div>
          <img src={imageUrl} className="card-image" />
        </div>
      </div>
    </div>
  );
}
