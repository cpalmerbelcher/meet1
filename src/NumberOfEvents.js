import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    errorText: '',
  }
  
  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number < 1 || number > 32) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please choose between 1 and 32',
      })
    } else {
      this.setState({ 
        numberOfEvents: number,
        errorText: '',
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };
  
  render() {
    return (
      <div>
        <p>Number of Events Shown:</p>
        <input id="number-of-events__input" type="number" value={this.state.numberOfEvents} className="newValue" onChange={(e) => this.handleInputChanged(e)} />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;