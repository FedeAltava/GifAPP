import { useState } from "react"
import { AddCategory } from "./componentes/AddCategory";

export const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['One Punch','Ramonet','ChiquitoDeLaCalzada']);

    const onAddCategory = (onNewCategory)=>{
        setCategories([...categories, onNewCategory])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory}/>
            
            <ol>
                {categories.map((category)=>{
                    return <li key={category}>{category}</li>;
                })} 
                
            </ol>
        </>
    )
}