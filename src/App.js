import React, { useState, useEffect } from "react";
import "./App.css";

const MainImage = ({ id }) => {
  return (
    <div className="main">
      <img alt={images[id].id} src={`http://unsplash.it/${images[id].id}`} />
    </div>
  );
};

const List = ({indexActive}) => {
  console.log(indexActive)
  return images.map((elem, index) => (
    <img
      key={index}
      alt={elem.id}
      className={`listImage ${indexActive === index ? 'active': ''}`}
      src={`http://unsplash.it/${elem.id}`}
    />
  ));
};

function App() {
  const [indexImg, setIndexImg] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const handleFirst = () => {
    setIndexImg(0);
  };

  const handleNext = () => {
    setIndexImg(indexImg >= images.length - 1 ? 0 : indexImg + 1);
  };

  const handlePrev = () => {
    setIndexImg(indexImg <= 0 ? images.length - 1  : indexImg - 1);
  };

  const handleLast = () => {
    setIndexImg(images.length - 1);
  };

  const handlePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    if (isPlay) {
    const timer = setTimeout(() => {
      handleNext();
    }, 2000);
    return () => clearTimeout(timer);
  }
  });

  return (
    <div className="container">
      <MainImage id={indexImg} />
      <div className="list">
        <List indexActive={indexImg}/>
      </div>

      <div className="buttons">
        <button onClick={handleFirst}>First</button>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePlay}>Pause</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleLast}>Last</button>
      </div>
    </div>
  );
}

export default App;

// Dont change anything bellow this line
const images = [
  {
    tittle: "image 1",
    id: 501,
  },
  {
    tittle: "image 2",
    id: 502,
  },
  {
    tittle: "image 3",
    id: 503,
  },
  {
    tittle: "image 4",
    id: 504,
  },
  {
    tittle: "image 5",
    id: 505,
  },
];
