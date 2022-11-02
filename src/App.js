import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <Header/>
      <h1>Este es mi primero componente</h1>
      <img src='./prueba.png'></img>
      <hr/>
      <h2>El valor de number es: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>Incrementar</button>
      <button onClick={() => setNumber(number - 1)}>Decrementar</button>
      <p>By Nicole Cáceres - 02/11/2022</p>
      <Footer/> 
    </div>
  );
}

export default App;
