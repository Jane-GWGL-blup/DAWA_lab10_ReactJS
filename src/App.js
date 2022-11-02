import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';
import './logo.css';

function App() {
  const [number, setNumber] = useState(0);
    console.log(number)
  return (
    <div className="App">
      <Header/>
      <h1>Este es mi primer componente</h1>
      
      <img className="perfil" src='./nicole_caceres.jpeg'></img>
      <p id="id-text">By Nicole Cáceres - 02/11/2022</p>
      <hr/><hr/>
      <h2>El valor de number es: {number}</h2>
      <button className="button-incrementar" onClick={() => setNumber(number + 1)}>Incrementar</button>
      <button className="button-decrementar" onClick={() => setNumber(number - 1)}>Decrementar</button>
      <Footer/> 
    </div>
  );
}

export default App;
