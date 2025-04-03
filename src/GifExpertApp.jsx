import { useState } from "react";
import { AddCategory } from "./componentes/AddCategory";
import { GifGrid } from "./componentes/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
  ]);

  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return;
    setCategories([...categories, onNewCategory]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

        {
            categories.map((category) => {
                return (
                    <GifGrid key ={category} category={category}/>
                )
            })
        }

    </>
  );
};
