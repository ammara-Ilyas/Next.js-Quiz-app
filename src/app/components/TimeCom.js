import React, { useEffect } from "react";
import style from "../page.module.css";

// Function to format time as mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function TimeCom({ timeRemaining, setTimeRemaining, nextQuizClick }) {
  useEffect(() => {
    if (timeRemaining <= 0) {
      nextQuizClick(1);
    } else {
      const timer = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  return (
    <div className={`${style.time}`}>
      <h3>{formatTime(timeRemaining)}</h3>
    </div>
  );
}

export default TimeCom;
