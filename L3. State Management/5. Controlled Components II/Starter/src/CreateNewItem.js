import { useState } from "react";

const CreateNewItem = ({ onAddItem }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const inputIsEmpty = () => value === "";

  const addItem = (e) => {
    e.preventDefault(); //prevent the form from submitting
    onAddItem(value);
    setValue("");
  };

  return (
    <div className="add-item">
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={value}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty} onClick={addItem}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateNewItem;
