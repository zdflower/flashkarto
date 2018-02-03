import React, { Component } from 'react';
import './App.css';
import Flashcard from './Flashcard';


// Voy a ver cómo mostrar una sola tarjeta, después voy a ver cómo mostrar por ejemplo los títulos de todas las que haya.
// Ahora estoy pensando el lado del frontend, y voy a suponer que obtengo del servidor los datos que necesito.
//
import cards from './cards.json';

const card = cards[0]; // Esto en un futuro vendrá del servidor.

class App extends Component {
  render() {
  // Esto sería la página principal
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Super Mojosa Flash Karto</h2>
        </div>
        <Flashcard card={card}/>
      </div>
    );
  }
}

export default App;
