// frontend/src/App.js

import React from "react";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";

function App() {
  return (
    <div className="App">
      <h1>Gestión de Items</h1>
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;

