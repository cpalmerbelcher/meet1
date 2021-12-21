import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
    let EventWrapper;
    beforeAll(() => {
      EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    test('the element is collapsed by default', () => {
        expect(EventWrapper.find(".summary")).toHaveLength(1);
       });

    test('does summary element render event summary', () => {
        expect(EventWrapper.find(".event-summary")).toHaveLength(1);
    });

    test('does summary element render event location', () => {
        expect(EventWrapper.find(".event-date")).toHaveLength(1);
    });

    test('does summary render showMore button', () => {
        expect(EventWrapper.find(".showMore")).toHaveLength(1);
    });

    test('showMore button if clicked - renders expanded view', () => {
        EventWrapper.find(".showMore").simulate("click");
        expect(EventWrapper.find(".event-description")).toHaveLength(1);
    });    

    test('the element renders hideDetails button', () => {
        expect(EventWrapper.find(".showLess")).toHaveLength(1);
    });

    test('showLess button if clicked renders summary view', () => {
        EventWrapper.find(".showLess").simulate("click");
        expect(EventWrapper.find(".summary")).toHaveLength(1);
    })

});