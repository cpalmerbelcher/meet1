import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe('<Event /> component', () => {
  let EventWrapper;
  let event = mockData[0];
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  // Test cases that test basic information
  test('renders summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });
  test('renders start-date and timezone', () => {
    expect(EventWrapper.find('.start-date')).toHaveLength(1);
  });
  test('renders location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });
  test('renders the show/hide details button', () => {
    expect(EventWrapper.find('.showMore-details-btn')).toHaveLength(1);
  });

  //Scenario 1
  test('the event element is collapsed by default', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
  //Scenario 2
  test('click on a showMore-details-btn button to expand the event details', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.showMore-details-btn').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });
  //Scenario 3
  test('click on showLess-details-btn button to hide the evet details', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find('.showLess-details-btn').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
});