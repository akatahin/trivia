import React, { Component, useState } from "react";
import { textChangeRangeIsUnchanged } from "typescript";
import "../css/App.css";
import data from "../sample_data.json";

const nestedHtml = 
  `<div>
    <p> Hello! </p>
    <p> Goodbye! </p>
    <p> See ya! </p>
  </div>`

function App() {
  let questionNum = 0;
  return (
    <div>
      <Question text={data[questionNum].question.text} choice={data[questionNum].question.choices} />

      <NextQuestion /> 
    </div>
  )
}

function Question(props){
  return (
  <div>
    <div>{props.text}</div>
    {
      props.choice.map(ansChoice => {
        return <Answer ans={ansChoice} /> 
    })
    }
  </div>
)
}

function NextQuestion(){ 
 return <button>Next Question</button> 
 
}

function Answer(props){
  return <p>{props.ans}</p>
}

export default App;
             