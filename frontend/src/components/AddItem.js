// frontend/src/components/AddItem.js

import React, { useState } from "react";
import axios from "axios";

const AddItem = () => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar una solicitud POST para enviar el nuevo item al backend
    axios.post("http://localhost:5000/items", { name })
      .then(response => {
        alert("Item agregado exitosamente!");
        setName("");
      })
      .catch(error => {
        console.error("Hubo un error al agregar el item:", error);
      });
  };

  return (
    <div>
      <h1>Agregar Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del Item"
          required
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddItem;
