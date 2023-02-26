import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import Swal from "sweetalert2";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);

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

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
