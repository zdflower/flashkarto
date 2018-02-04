import React, { Component } from 'react';

import './Flashcard.css'
import Front from './front.js'
import Back from './back.js'

// Le pasan card.
// Podría considerar que la tarjeta tuviera la forma {front: {title: String, topic: String, concept: String}, back : {explanation: String}}

class Flashcard extends Component {
  render() {
    let content = <Front front={this.props.card.front} />
    if (this.props.showing !== 'front') {
      content = <Back back={this.props.card.back} />
    }
    return (
      <div className="card">
        {content}
      </div>
    );
    /*   */
  }
};
export default Flashcard;
