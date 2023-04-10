import React, { useState } from "react";
import "../../App.css";

// Import your images here
import defaultImage from "../../images/paratrooper.png";
import supplyChainImage from "../../images/analyst.png";
import fatherImage from "../../images/father.png";
import veteranImage from "../../images/paratrooper.png";
import developerImage from "../../images/software.png";
import futureImage from "../../images/future.png";
import analystImage from "../../images/analyst2.png";

export default function Home() {
  interface ClassData {
    about: string;
    image: string;
    rightText: string;
  }

  const defaultData: ClassData = {
    about: "Default About Me",
    image: defaultImage,
    rightText: "Default Right Text",
  };

  const classData: { [key: string]: ClassData } = {
    SupplyChain: {
      about: "Supply Chain About Me",
      image: supplyChainImage,
      rightText: "Supply Chain Right Text",
    },
    Father: {
      about: "Father About Me",
      image: fatherImage,
      rightText: "Father Right Text",
    },
    Veteran: {
      about: "Veteran About Me",
      image: veteranImage,
      rightText: "Veteran Right Text",
    },
    Developer: {
      about: "Developer About Me",
      image: developerImage,
      rightText: "Developer Right Text",
    },
    Future: {
      about: "Future About Me",
      image: futureImage,
      rightText: "Future Right Text",
    },
    Analyst: {
      about: "Analyst About Me",
      image: analystImage,
      rightText: "Analyst Right Text",
    },
  };

  const [currentData, setCurrentData] = useState<ClassData>(defaultData);

  const handleButtonClick = (className: string) => {
    setCurrentData(classData[className]);
  };

  return (
    <div className="App">
      {/* Your HTML structure with CSS classes */}
      <div className="about-me">
        <h2>About Me</h2>
        <p>{currentData.about}</p>
      </div>
      <div className="class-selection">
        <img src={currentData.image} alt="Character" id="character-image" />
        <div className="class-buttons">
          {Object.keys(classData).map((className) => (
            <button
              key={className}
              className="class-button"
              onClick={() => handleButtonClick(className)}
            >
              {className}
            </button>
          ))}
        </div>
      </div>
      <div className="right-box">
        <h2>Right Side</h2>
        <p>{currentData.rightText}</p>
      </div>
    </div>
  );
}
