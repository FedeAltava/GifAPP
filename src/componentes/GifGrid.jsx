import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useState } from "react";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h4>{category}</h4>
      <ol>
        {images.map((image) => {
          return <li key={image.id}>{image.title}</li>
        })}
      </ol>
      
    </>
  )
};
