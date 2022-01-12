import { useState } from "react";
import AnswersList from "./Answers/AnswersList"
import FormRubberDuck from "./FormRubberDuck";

function Main(props) {

  const [open, setOpen] = useState(false); //Ignore this state

  const {initialForm, setInitialForm, answersList, submitSurveyDetails, setAnswersList} = props //decounsstrocting the object to not use props.

  return (

    <main className="main">

      <section className={`main__list ${open ? "open" : ""}`}>

        <h2>Answers list</h2>

        <AnswersList 
          answersList = {answersList}
        />

      </section>

      <section className="main__form">
        
        <FormRubberDuck 
          initialForm = {initialForm}
          setInitialForm = {setInitialForm}
          
          submitSurveyDetails = {submitSurveyDetails}
          setAnswersList = {setAnswersList}

          answersList = {answersList}
        />
      
      </section>
    
    </main>

  )

}

export default Main;