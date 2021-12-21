import React, { Component } from "react";

class Event extends Component {
    state = {
        collapsed: true,
    };

   handleClick = () => {
      if (this.state.collapsed === true) {
          this.setState({ collapsed: false });
        } else {
            this.setState({ collapsed: true});
        }
    };

    render() {
        const { event } = this.props;
        
        return (
            <div className="event">
            <h1 className="eventTitle">{event.summary}</h1>
            <h3 className ="eventLocation">{event.location}</h3>
            <h3 className="eventDate">{new Date(event.start.dateTime).toString()}</h3>
            {this.state.collapsed === false && (
                <p className="eventDetails">{event.description}</p>
            )}
            {this.state.collapsed === true && (
                <button id="eventButton" onClick={this.handleClick}>Show details</button>
            )}
            {this.state.collapsed === false && (
                <button id="eventButton" onClick={this.handleClick}>Close details</button>
            )}
        </div>
        );   
    }
}

export default Event;