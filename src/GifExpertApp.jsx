import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import Swal from "sweetalert2";
import { PlaceHolder } from "./components/PlaceHolder";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  const onAddCategory = (category) => {
    if (categories.includes(category)) {
      Swal.fire({
        title: "Error!",
        text: "Duplicate search error please try again",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      setCategories([category, ...categories]);
    }
  };

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center ">
        <span className="badge bg-secondary">GifExpertApp </span>
      </h1>
      <hr />

      <AddCategory onAddCategory={onAddCategory} />

      {categories.length === 0 && <PlaceHolder />}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
