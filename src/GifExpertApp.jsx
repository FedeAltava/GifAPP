import { useState } from "react"

export const GifExpertApp = ()=>{
    const [categories, setCategories] = useState(['One Punch','Ramonet','ChiquitoDeLaCalzada']);
    const onAddCateggory = ()=>{
        const hero = 'luthien';
        setCategories((prev) =>[...prev, hero] )
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            
            <ol>
                {categories.map((category)=>{
                    return <li key={category}>{category}</li>;
                })} 
                
            </ol>
            <button onClick={onAddCateggory}>Add</button>
        </>
    )
}