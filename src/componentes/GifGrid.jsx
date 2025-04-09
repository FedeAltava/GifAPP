import { GifItem } from "./GifItem";
import "../styles.css";
import { useFetchGif } from "../hooks/useFetchGifs";
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);
  console.log(isLoading);
  return (
    <>
      <h1>-{category}:</h1>
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
