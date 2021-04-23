import SelectInput from './SelectInput';

const HalfDropDown = (props) => {

    var optionsList = props.options;


    return(
        <SelectInput>
            {optionsList.map((option) => (
                <option key={option}>
                    {option}
                </option>
            ))}
        </SelectInput>
    );
}

export default HalfDropDown;