import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    currentLocation: "all",
    numberOfEvents: 32
  }

  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ? events : events.filter((event) => event.location === location);
      const shownEvents = locationEvents.slice(0, this.state.numberOfEvents);
      this.setState({
        events: shownEvents,
        currentLocation: location
      });
    });
  }

  updateNumberOfEvents = (number) => {
    const newNum = number;
    this.setState({
      numberOfEvents: newNum
    });
    this.updateEvents(this.state.currentLocation);
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />        
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents}/>
        <EventList events={this.state.events} />
      </div>
    )
  }
}

export default App;
