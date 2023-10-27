import { useState } from "react";
import "./App.css";
import CreateNewItem from "./CreateNewItem";
import logo from "./logo.svg";
import ItemList from "./ItemList";
import DeleteLastItem from "./DeleteLastItem";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (value) => {
    setItems([...items, value]);
  };

  const handleDeleteLastItem = (event) => {
    setItems(items.slice(0, -1));
  };

  const noItemsFound = () => items.length === 0;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="shopping-list">
        <h2>Shopping List</h2>
        <CreateNewItem onAddItem={handleAddItem} />
        <DeleteLastItem
          onDeleteItem={handleDeleteLastItem}
          noItemsFound={noItemsFound()}
        />
        <ItemList itemList={items} />
      </div>
    </div>
  );
};

export default App;
