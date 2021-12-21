import React from "react";
import NumberOfEvents from '../NumberOfEvents';
import { shallow } from "enzyme";

describe('<NumberOfEvents unit testing', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render text input', () =>{
        expect(NumberOfEventsWrapper.find('.newValue')).toHaveLength(1);
    });

    test("renders default number of 32 events", () => {
        expect(NumberOfEventsWrapper.find('.events-number').prop("value")).toEqual(32);
      });
  
    test("changes state when input changes", () => {
      NumberOfEventsWrapper.setState({ numOfEvents: '32' });
      const eventObject = { target: { value: '3' }};
      NumberOfEventsWrapper.find(".events-number").simulate('change', eventObject);
      expect(NumberOfEventsWrapper.state('numOfEvents')).toBe('3');
      });
})