import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { Spinner } from "./Spinner";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(isLoading);
  return (
    <>
      <h4>
        <span className="mt-5 badge rounded-pill text-bg-success">
          {category}
        </span>
      </h4>
      {isLoading && <Spinner />}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
