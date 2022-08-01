import { Component, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [numero, setNumero] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const [lista, setLista] = useState(["hola"]);

  useEffect(() => {
    console.log("componente se montó");
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((response) => {
        setPokemons(response.results);
      });
  }, []);

  useEffect(() => {
    console.log("cambio el numero");
  }, [numero]);

  useEffect(() => {
    console.log("pokemons: ", pokemons);
  }, [pokemons]);

  console.log("renderizado");

  return (
    <main>
      <p>{numero}</p>
      <button onClick={() => setNumero(numero + 1)}>+</button>
      <button onClick={() => setNumero(numero - 1)}>-</button>
      <button onClick={() => setPokemons([])}>borrar pokemons</button>
      <ul>
        {lista.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setLista([...lista, "adios"]);
        }}
      >
        add adios
      </button>
    </main>
  );
}

export default App;
