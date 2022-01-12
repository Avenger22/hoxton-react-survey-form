function CheckboxesWorst(props) {

    const {initialForm, setInitialForm} = props 

    return (

        <ul>

            <li>
                <label>
                    <input name="worstYellow" type="checkbox" />
                    It's yellow!
                </label>
            </li>

            <li>
                <label>
                    <input name="worstSqueak" type="checkbox" />
                    It squeaks!
                </label>
            </li>

            <li>
                <label>
                    <input name="worstLogo" type="checkbox" />
                    It has a logo!
                </label>
            </li>

            <li>
                <label>
                    <input name="worstBig" type="checkbox" />
                    Its big!
                </label>
            </li>

        </ul>

    )

}

export default CheckboxesWorst