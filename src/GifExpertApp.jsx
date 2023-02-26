import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);
  const [duplicate, setDuplicate] = useState(false);

  const onAddCategory = (category) => {
    if (categories.includes(category)) {
      setDuplicate(true);
    } else {
      setCategories([category, ...categories]);
      setDuplicate(false);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />
      {duplicate && <p>error, busqueda duplicada</p>}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
