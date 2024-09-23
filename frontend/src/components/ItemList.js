// frontend/src/components/ItemList.js

import React, { useEffect, useState } from "react";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Realizar una solicitud GET para obtener los elementos desde el backend
    axios.get("http://localhost:5000/items")
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los items:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
