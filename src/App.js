import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrecio, setEditPrecio] = useState("");

  useEffect(() => {
    traerItems();
  }, []);

  const traerItems = async () => {
    const response = await fetch("http://localhost:3001/api/traeritem");
    const data = await response.json(); // data es un array de objetos
    setItems(data);
  };
const agregarItem = async () => {
    const response = await.fetch("http://localhost:3001/api/agregaritem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
                            descripcion: cuerpoRequest.descripcion,
                            precio: cuerpoRequest.precio
                          })

                          
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
