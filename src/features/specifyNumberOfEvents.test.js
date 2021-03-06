import { loadFeature, defineFeature } from "jest-cucumber";
import React from 'react';
import { mount, shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('The app should display 32 events by defalt', ({ given, when, then }) => {
        let NumberOfEventsWrapper;
        given('the user has not specidfied a number of events to show', () => {
            NumberOfEventsWrapper=shallow(<NumberOfEvents />);
        });

        when('the user loads the data', () => {
            NumberOfEventsWrapper.update();
        });

        then(/^(\d+) events should be displayed.$/, (arg0) => {
            expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
        });
    });

    test('The user types a number into a textbox, the number of events displayed should match the input number', ({ given, when, then }) => {
        let AppWrapper;
        given('the main page is open', () => {
            AppWrapper = mount(<App />);
        });

        when('the user types a number into the number of events textbox', () => {
            AppWrapper.update();
            AppWrapper.find('#number-of-events__input').simulate('change', { target: { value: '1' } });
        });

        then('the number of events displayed should match the number input by the user unless there are fewer events than the specified number.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(1);
        });
    });

});