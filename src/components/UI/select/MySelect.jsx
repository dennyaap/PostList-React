import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option value="value1" disabled>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
}

export default MySelect;
