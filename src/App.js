import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newDescripcion, setnewDescripcion] = useState("");
  const [newPrecio, setNewPrecio] = useState(null);
  const [editDescripcion, setEditDescripcion] = useState(null);
  const [editPrecio, setEditPrecio] = useState("");

  useEffect(() => {
    traerItems();
  }, []);

  const traerItems = async () => {
    const response = await fetch("http://localhost:3001/api/traeritems");
    const data = await response.json(); // data es un array de objetos
    setItems(data);
  };
  const agregarItem = async () => {
    const response = await fetch("http://localhost:3001/api/agregaritem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        descripcion: newDescripcion,
        precio: newPrecio,
      }),
    });
  };

  return (
    <div className="App">
      <h1>CRUD BASICO DE ITEMS</h1>
      <div>
        <p>
          <label>Descripcion: </label>
          <input
            type="text"
            value={newDescripcion}
            onChange={(e) => setnewDescripcion(e.target.value)}
            placeholder="Ingrese una descripcion"
          />
        </p>
        <p>
          <label>Precio: </label>
          <input
            type="number"
            value={newPrecio}
            onChange={(e) => setNewPrecio(e.target.value)}
            placeholder="Ingrese un precio"
          />
        </p>
        <button onClick={agregarItem}>Agregar Item</button>
      </div>
      <div>
        <h2>Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <b>Decripción: </b>
              {item.descripcion} - <b>Precio: </b> {item.precio}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
