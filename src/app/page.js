"use client";
import style from "./page.module.css";
import data from "./data.js";
import { useState } from "react";
import TimeCom from "./components/TimeCom";
export default function page() {
  const [index, setIndex] = useState(0);
  const [clickOption, setClickOption] = useState(true);
  const [score, setScore] = useState(0);
  const [Question, setQuestion] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFlag, setIsFlag] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(30);

  let { question, answer } = data[index];

  const nextQuizClick = (x) => {
    console.log(index);
    if (index + x >= 0 && index + x < data.length) {
      setIndex((prevIndex) => prevIndex + x);
    } else if (index + x >= data.length) {
      return setQuestion(false);
    } else {
      return setIndex(0);
    }
    setTimeRemaining(30);
    return setClickOption(true);
  };
  const CheckAnswer = (ans) => {
    if (ans.trim() === data[index].correct.trim()) {
      console.log("Correct!");
      setScore((preScore) => preScore + 1);
      setIsFlag(true);
    } else {
      console.log("Incorrect!");
      setIsFlag(false);
    }
    setSelectedAnswer(ans);
    setClickOption(false);
  };

  return (
    <div className={`${style.container_quiz}`}>
      <TimeCom
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
        nextQuizClick={nextQuizClick}
      />
      {Question ? (
        <div className={`${style.quiz_box} `}>
          <h2 className={`${style.question}`}>{question}</h2>
          {answer.map((ans, i) => (
            <div className={`${style.row}`} key={i}>
              <button
                className={`${style.button}`}
                onClick={clickOption ? () => CheckAnswer(ans) : undefined}
                style={
                  selectedAnswer === ans
                    ? {
                        backgroundColor: isFlag ? "green" : "red",
                        color: isFlag ? "white" : "white",
                      }
                    : {}
                }
              >
                {ans}
              </button>
            </div>
          ))}
          <div className={`${style.next}`}>
            <button
              className={`${style.btn}`}
              onClick={() => nextQuizClick(+1)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div
          className={`${style.quiz_box}  ${style.scorePage}`}
          style={{ height: "60%" }}
        >
          <h1>
            Your score are {score} / {data.length}
          </h1>
        </div>
      )}
    </div>
  );
}
