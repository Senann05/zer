import React, { useState, useEffect } from "react";
import die1 from './assets/pngwing.com (1).png'; // 1-ci zər
import die2 from './assets/pngwing.com (2).png'; // 2-ci zər
import die3 from './assets/pngwing.com (3).png'; // 3-cü zər
import die4 from './assets/pngwing.com (4).png'; // 4-cü zər
import die5 from './assets/clipart134115.png'; // 5-ci zər (updated)

const Dice = () => {
  const [die1Value, setDie1Value] = useState(1); 
  const [die2Value, setDie2Value] = useState(2);
  const [die3Value, setDie3Value] = useState(3);
  const [die4Value, setDie4Value] = useState(4);
  const [die5Value, setDie5Value] = useState(5);

  const getDieImage = (number) => {
    switch (number) {
      case 1:
        return die1;
      case 2:
        return die2;
      case 3:
        return die3;
      case 4:
        return die4;
      case 5:
        return die5;
      default:
        return null;
    }
  };

  const rollDie = (dieNumber) => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    switch (dieNumber) {
      case 1:
        setDie1Value(randomNumber);
        break;
      case 2:
        setDie2Value(randomNumber);
        break;
      case 3:
        setDie3Value(randomNumber);
        break;
      case 4:
        setDie4Value(randomNumber);
        break;
      case 5:
        setDie5Value(randomNumber);
        break;
      default:
        break;
    }
  };

  // Listen for keydown events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        // Roll all dice when Spacebar is pressed
        rollDie(1);
        rollDie(2);
        rollDie(3);
        rollDie(4);
        rollDie(5);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Zərlər</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* 5 zər şəkilini göstəririk */}
        {[die1Value, die2Value].map((dieValue, index) => (
          <img
            key={index}
            src={getDieImage(dieValue)}
            alt={`Die ${dieValue}`}
            style={{ width: "100px", height: "100px", margin: "0 10px", cursor: "pointer" }}
          />
        ))}
      </div>
      <p>Spacebar ilə zərləri yenidən atmaq üçün basın!</p>
    </div>
  );
};

export default Dice;