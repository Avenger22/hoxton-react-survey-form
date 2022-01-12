import { useState } from "react";
import AnswersList from "../components/AnswersList"
import FormRubberDuck from "./FormRubberDuck";

function Main(props) {

  const [open, setOpen] = useState(false); //Ignore this state

  const {initialForm, setInitialForm} = props  

  return (

    <main className="main">

      <section className={`main__list ${open ? "open" : ""}`}>

        <h2>Answers list</h2>

        {/* <AnswersList 
        
        /> */}

      </section>

      <section className="main__form">
        
        <FormRubberDuck 
          initialForm = {initialForm}
          setInitialForm = {setInitialForm}
        />
      
      </section>
    
    </main>

  )

}

export default Main;