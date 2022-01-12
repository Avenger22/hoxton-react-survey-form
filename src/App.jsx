// #region 'Importing'
import "./app.css";

import Header from "./components/Header";
import Main from "./components/Main";

import AnswersList from "./components/Answers/AnswersList";
import { useState } from "react";
// #endregion

export default function App() {

  // #region 'State Object'
  const initialFormObject = {
    review: "",
    email: "",
    username: "",
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: []
  }

  let submitSurveyDetails = {
    review: '',
    email: '',

    username: '',
    consistency: '',

    colour: '',
    logo: '',

    bestFeatures: [],
    worstFeatures: [],
    timeSpent: []
}

  const [initialForm, setInitialForm] = useState(initialFormObject)
  const [answersList, setAnswersList] = useState([])
  // #endregion

  return (

    <>
      <Header />

      <Main 
        initialForm = {initialForm}
        setInitialForm = {setInitialForm}

        submitSurveyDetails = {submitSurveyDetails}
        answersList = {answersList}
        
        setAnswersList = {setAnswersList}
      />

    </>

  )

}