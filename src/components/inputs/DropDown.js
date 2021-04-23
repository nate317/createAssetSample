import SelectInput from './SelectInput';

const DropDown = (props) => {

    var optionsList = props.options;


    return(
        <SelectInput bar>
            {optionsList.map((option) => (
                <option key={option}>
                    {option}
                </option>
            ))}
        </SelectInput>
    );
}

export default DropDown;