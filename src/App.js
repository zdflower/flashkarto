import React, { Component } from 'react';
import './App.css';
import Flashcard from './Flashcard';


// Voy a ver cómo mostrar una sola tarjeta, después voy a ver cómo mostrar por ejemplo los títulos de todas las que haya.
// Ahora estoy pensando el lado del frontend, y voy a suponer que obtengo del servidor los datos que necesito.
//
import cards from './cards.json';

// const card = cards[0]; // Esto en un futuro vendrá del servidor.
// i sería el índice de la actual tarjeta
// showing es la cara que se está mostrando
class App extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      showing: 'front'
    };
  }

  nextCard() {
    // Si no se llegó a la última tarjeta de cards entonces sumar 1 a i
    if (this.state.i < cards.length - 1) this.setState({i : this.state.i + 1, showing: 'front'})
  }

  prevCard() {
    if (this.state.i > 0) this.setState({i : this.state.i - 1, showing: 'front'})
  }

  showFront() {
    this.setState({
      showing: 'front'
    })
  }

  showBack() {
    this.setState({
      showing: 'back'
    })
  }

  render() {
  // Esto sería la página principal
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Super Mojosa Flash Karto</h2>
        </div>
        <button onClick={() => this.prevCard()}>Previous</button>
        <button onClick={() => this.nextCard()}>Next</button>
        <button onClick={() => this.showFront()}>Front</button>
        <button onClick={() => this.showBack()}>Back</button>
        <Flashcard card={cards[this.state.i]} showing={this.state.showing}/>
      </div>
    );
  }
}

export default App;
