function RadioButtonsColour(props) {

    const {initialForm, setInitialForm} = props 

    return (

        <ul>

            <li>
                <input id="colour1" type="radio" name="colour" value="1" />
                
                <label htmlFor="colour1">
                    1
                </label>
            </li>

            <li>
                <input id="colour2" type="radio" name="colour" value="2" />

                <label htmlFor="colour2">
                    2
                </label>
            </li>

            <li>
                <input id="colour3" type="radio" name="colour" value="3" />

                <label htmlFor="colour3">
                    3
                </label>
            </li>

            <li>
                <input id="colour4" type="radio" name="colour" value="4" />

                <label htmlFor="colour4">
                    4
                </label>
            </li>

        </ul>
        
    )

}

export default RadioButtonsColour