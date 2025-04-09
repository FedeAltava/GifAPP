import { useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useEffect } from "react";

export const useFetchGif = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newimages = await getGifs(category);
    setImages(newimages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
