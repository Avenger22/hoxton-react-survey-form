import CheckBoxesBest from './CheckBoxes/CheckBoxesBest'
import CheckBoxesWorst from './CheckBoxes/CheckBoxesWorst'
import RadioButtonsConst from './RadioButtons/RadioButtonsConst'
import CheckBoxesTime from './CheckBoxes/CheckBoxesTime'
import RadioButtonsColour from './RadioButtons/RadioButtonsColour'
import RadioButtonsLogo from './RadioButtons/RadioButtonsLogo'

function FormRubberDuck(props) {

    const {initialForm, setInitialForm, submitSurveyDetails, setAnswersList, answersList} = props 

    function handleFormSurveySubmit(event, submitSurveyDetails) {

        event.preventDefault()

        let resultBest = []

        if (event.target.bestYellow.checked === true) {
            resultBest.push("color")
        }

        if (event.target.bestSqueak.checked === true) {   
            resultBest.push("sound")
        }

        if (event.target.bestLogo.checked === true) {   
            resultBest.push("logo")
        }

        if (event.target.bestBig.checked === true) {   
            resultBest.push("size")
        }

        console.log(resultBest)

        let resultWorst = []

        if (event.target.worstYellow.checked === true) {
            resultWorst.push("color")
        }

        if (event.target.worstSqueak.checked === true) {   
            resultWorst.push("sound")
        }

        if (event.target.worstLogo.checked === true) {   
            resultWorst.push("logo")
        }

        if (event.target.worstBig.checked === true) {   
            resultWorst.push("size")
        }

        console.log(resultWorst)

        let resultTime = []

        if (event.target.timeSwimming.checked === true) {
            resultTime.push("swimming")
        }

        if (event.target.timeBathing.checked === true) {   
            resultTime.push("bathing")
        }

        if (event.target.timeChatting.checked === true) {   
            resultTime.push("chatting")
        }

        if (event.target.timeDont.checked === true) {   
            resultTime.push("noTime")
        }

        console.log(resultTime)

        submitSurveyDetails = {
            review: event.target.review.value,
            email: event.target.email.value,

            username: event.target.username.value,
            consistency: event.target. consistency.value,

            colour: event.target.colour.value,
            logo: event.target.logo.value,

            bestFeatures: resultBest,
            worstFeatures: resultWorst,
            timeSpent: resultTime
        }

        console.log(submitSurveyDetails)

        const finalArrayUncontrollled = [...answersList, submitSurveyDetails]
        setAnswersList(finalArrayUncontrollled) //this is MOST IMPORTANT 

        event.target.reset()

    }

    return (

        <form className="form" 
            onSubmit={function (event) {
                handleFormSurveySubmit(event)
        }}>

            <h2>Tell us what you think about your rubber duck!</h2>

            <div className="form__group">
                <h3>What would you say that are the best features of your rubber duck?</h3>
                <CheckBoxesBest 
                    initialForm = {initialForm}
                    setInitialForm = {setInitialForm}
                />
            </div>

            <div className="form__group">
                <h3>What would you say that are the worst bits of your rubber duck?</h3>
                <CheckBoxesWorst
                    initialForm = {initialForm}
                    setInitialForm = {setInitialForm}
                />
            </div>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck consistency?</h3>
                <RadioButtonsConst 
                    initialForm = {initialForm}
                    setInitialForm = {setInitialForm}
                />
            </div>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <RadioButtonsColour
                    initialForm = {initialForm}
                    setInitialForm = {setInitialForm}
                />
            </div>

            <div className="form__group radio">
                <h3>How do you rate your rubber duck logo?</h3>
                <RadioButtonsLogo
                    initialForm = {initialForm}
                    setInitialForm = {setInitialForm}
                />
            </div>

            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <CheckBoxesTime 
                    initialForm = {initialForm}
                    setInitialForm = {setInitialForm}
                />
            </div>

            <label>
                What else have you got to say about your rubber duck?
                <textarea
                    name="review"
                    cols={30}
                    rows={10}
                >   
                </textarea>
            </label>

            <label>
                Put your name here (if you feel like it):
                <input
                    type="text"
                    name="username" 
                />
            </label>

            <label>
                Leave us your email pretty please??
                <input
                    type="email"
                    name="email" 
                />
            </label>
                
            <input className="form__submit" type="submit" value="Submit Survey!" />

        </form>

    )

}

export default FormRubberDuck