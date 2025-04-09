import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";
import { GifItem } from "./GifItem";
import "../styles.css";
export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h4>{category}</h4>
      <div className="card-grid">
        {images.map((image) => {
         return <GifItem key={image.id} {...image}/>
          // return <li key={image.id}>{image.title}</li>
        })}
      </div>
    </>
  )
};
