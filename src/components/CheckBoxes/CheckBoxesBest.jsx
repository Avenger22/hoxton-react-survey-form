function CheckboxesBest(props) {

    const {initialForm, setInitialForm} = props 

    return (

        <ul>

            <li>
                <label>
                    <input name="bestYellow" type="checkbox"/>
                    It's yellow!
                </label>
            </li>

            <li>
                <label>
                    <input name="bestSqueak" type="checkbox" />
                    It squeaks!
                </label>
            </li>

            <li>
                <label>
                    <input name="bestLogo" type="checkbox" />
                    It has a logo!
                </label>
            </li>

            <li>
                <label>
                    <input name="bestBig" type="checkbox" />
                    Its big!
                </label>
            </li>

        </ul>

    )

}

export default CheckboxesBest