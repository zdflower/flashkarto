import React from 'react';

class Back extends React.Component {
  render() {
    return (
      <div className="back">
        <div className="explanation">{this.props.back.explanation}</div>
      </div>
    );
  }
}

export default Back;
