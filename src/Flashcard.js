import React, { Component } from 'react';

import './Flashcard.css'
import Front from './front.js'
import Back from './back.js'

// Le pasan card.
// Podría considerar que la tarjeta tuviera la forma {front: {title: String, topic: String, concept: String}, back : {explanation: String}}

class Flashcard extends Component {
  render() {
    return (
      <div className="card">
        <Front front={this.props.card.front} />
        <Back back={this.props.card.back} />
      </div>
    );
    /*   */
  }
};
export default Flashcard;
