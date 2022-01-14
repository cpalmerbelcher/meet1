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
        const { collapsed } = this.state;
        
        return (
            <div className="Event">
            <h2 className="summary">{event.summary}</h2>
            <p className="start-date">{event.start.dateTime} ({event.start.timeZone})</p>
            <br />
            <p className="location">@{event.summary} | {event.location}</p>
    
            {!collapsed &&
              <div className={`extra-details ${this.state.collapsed ? "showMore" : "showLess"}`}>
                <h3>About Event</h3>
                <a href={event.htmlLink} target="_blank" rel="noreferrer">
                  See deatails on Google calendar
                </a>
                <p className="event-description">{event.description}</p>
    
              </div>
            }
            <button variant="primary" className={`${collapsed ? "showMore" : "showLess"}-details-btn`} onClick={this.handleClick}>
              {collapsed ? "show Details" : "Hide Details"}
            </button>
          </div>
        );   
    }
}

export default Event;