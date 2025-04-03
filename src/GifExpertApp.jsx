import { useState } from "react"
import { AddCategory } from "./componentes/AddCategory";

export const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['One Punch','Ramonet','ChiquitoDeLaCalzada']);
    const onAddCateggory = ()=>{
        const hero = 'luthien';
        setCategories((prev) =>[...prev, hero] )
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory />
            <ol>
                {categories.map((category)=>{
                    return <li key={category}>{category}</li>;
                })} 
                
            </ol>
            <button onClick={onAddCateggory}>Add</button>
        </>
    )
}