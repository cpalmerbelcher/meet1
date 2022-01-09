Feature: Specify number of events

Scenario: The app should display 32 events by defalt
Given the user has not specidfied a number of events to show
When the user loads the data
Then 32 events should be displayed.

Scenario: The user types a number into a textbox, the number of events displayed should match the input number
Given the main page is open
When the user types a number into the number of events textbox
Then the number of events displayed should match the number input by the user unless there are fewer events than the specified number.