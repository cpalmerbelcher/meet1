import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  
  state = {
    numberOfEvents: 32,
    infoText: ''
  }
  
  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 100) {
      this.setState({
        infoText: 'Please choose between 1 and 100'
      });
    } else {
      this.setState({ 
        NumberOfEvents: number,
        infoText:''
      });
      this.props.updateNumberOfEvents(number);
    }
  };

  render() {
    return (
      <div>
        <p>Change number of shown events</p>
        <input type="number" value={this.state.numberOfEvents} className="newValue" onChange={(e) => this.handleInputChanged(e)} />
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}

export default NumberOfEvents;