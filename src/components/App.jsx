import React, { Component, useState } from "react";
import { textChangeRangeIsUnchanged } from "typescript";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let questionNum = 1;
  return <Question text={data[questionNum].question.text} />
}

function Question(props){
  return <div>{props.text}</div>;
}

export default App;
             