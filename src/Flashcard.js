import React, { Component } from 'react';

import './Flashcard.css'
import Front from './front.js'
import Back from './back.js'

// Le pasan card.
// Podría considerar que la tarjeta tuviera la forma {front: {title: String, topic: String, concept: String}, back : {explanation: String}}

class Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      showing: 'front'
    }
  }
   // showing sólo puede tomar dos valores: 'front' o ' back'

  setShowing() {
    this.setState({
      showing: this.props.showing
    })
  }

  render() {
    this.setShowing();
    let content = <Front front={this.props.card.front} />
    if (this.state.showing !== 'front') {
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
