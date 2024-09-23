// frontend/src/components/ItemList.test.js

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import ItemList from "./ItemList";

// Hacer un mock de axios
jest.mock("axios");

describe("ItemList Component", () => {
  it("debería mostrar una lista de items cuando la API responde correctamente", async () => {
    // Datos simulados que regresará la API
    const itemsMock = {
      data: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
      ],
    };

    // Simular la respuesta de Axios
    axios.get.mockResolvedValue(itemsMock);

    // Renderizar el componente
    render(<ItemList />);

    // Verificar que los datos cargan correctamente en la UI
    await waitFor(() => {
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
    });
  });

  it("debería mostrar un mensaje de error si la API falla", async () => {
    // Simular un error en la API
    axios.get.mockRejectedValue(new Error("Error al obtener los items"));

    // Renderizar el componente
    render(<ItemList />);

    // Verificar que se muestra el mensaje de error
    await waitFor(() => {
      expect(screen.queryByText("Error al obtener los items")).toBeInTheDocument();
    });
  });
});
