import { useState } from "react";

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onImpuntChange = (event) => {
        console.log(event.target.value)
        setInputValue(event.target.value);
    }
    const onSubmit = (event)=>{
        event.preventDefault();
    }
    return (
        <form onSubmit ={(event)=>onSubmit(event)}>

            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={(event) => onImpuntChange(event)}
            />

        </form>


    )
}