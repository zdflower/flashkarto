import React, { Component } from 'react';

class Front extends Component {
  render() {
    return (
      <div className="front">
        <div className="header">
          <div className="title">{this.props.front.title}</div>
          <div className="topic">{this.props.front.topic}</div>
        </div>
        <div className="main">
          <div className="concept">{this.props.front.concept}</div>
        </div>
      </div>
    )
  }
}

export default Front;
