import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputchange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="busca un gif"
        value={inputValue}
        onChange={onInputchange}
      />
    </form>
  );
};
