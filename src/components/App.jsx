import React, { Component, useState } from "react";
import { textChangeRangeIsUnchanged } from "typescript";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  const [answered, setAnswered] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  function updateQuestionNum() {
    setQuestionNum(questionNum + 1);
  }

  return (
    <div>
      <Question
        text={data[questionNum].question.text}
        choice={data[questionNum].question.choices}
      />
      <NextQuestion updateQuestionNum={() => updateQuestionNum} />
      <button
        onClick={() =>
          setAnswered(
            data[questionNum].question.choices[
              data[questionNum].question.correct_choice_index
            ]
          )
        }
      >
        Correct Answer
      </button>
      <p>Correct answer is: {answered}</p>
    </div>
  );
}

function Question(props) {
  return (
    <div>
      <div>{props.text}</div>
      {props.choice.map((ansChoice) => {
        return <Answer ans={ansChoice} />;
      })}
    </div>
  );
}

function NextQuestion(props) {
  return (
    <button
      onClick={() => {
        props.next;
      }}
    >
      Next Question
    </button>
  );
}

function Answer(props) {
  return <p>{props.ans}</p>;
}

export default App;
