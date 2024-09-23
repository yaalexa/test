// frontend/src/components/AddItem.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import AddItem from "./AddItem";

// Hacer un mock de axios
jest.mock("axios");

describe("AddItem Component", () => {
  it("debería agregar un item cuando se envía el formulario", async () => {
    // Simular la respuesta de Axios al agregar un item
    axios.post.mockResolvedValue({
      data: { id: 3, name: "Nuevo Item" }
    });

    // Renderizar el componente
    render(<AddItem />);

    // Simular que el usuario escribe en el input y envía el formulario
    fireEvent.change(screen.getByPlaceholderText("Nombre del Item"), {
      target: { value: "Nuevo Item" }
    });
    fireEvent.click(screen.getByText("Agregar"));

    // Verificar que se muestra el mensaje de éxito
    expect(await screen.findByText("Item agregado exitosamente!")).toBeInTheDocument();
  });
});
