import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onImpuntChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length === 0) return; 
        onNewCategory(inputValue.trim())
        setInputValue('');
    };

    return (
        <form onSubmit={(event) => onSubmit(event)}>

            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={(event) => onImpuntChange(event)}
            />

        </form>


    )
}

AddCategory.propTypes = {
    onNewCategory:PropTypes.func.isRequired,
}