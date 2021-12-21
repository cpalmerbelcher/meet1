import React, { Component } from 'react';

class NumberOfEvents extends Component {
  render() {
    return (
      <div>
        <p>Change number of shown events</p>
        <input type="number" value={this.state.numberOfEvents} className="newValue" onChange={(e) => this.handleInputChanged(e)} />
      </div>
    );
  }
}

export default NumberOfEvents;