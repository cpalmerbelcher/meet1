Objective:

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

Meet App Features and User Stories:

Feature 1: Filter Events by City Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. Given user hasn’t searched for any city When the user opens the app Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city. Given the main page is open When user starts typing in the city textbox Then the user should see a list of cities that match what they have typed

Scenario 3: User can select a city from the suggested list. Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing When the user selects a city (“Berlin”) from the list Then their city should be changed to that city (“Berlin”) and the user should receive a list of upcoming events in that city

Feature 2: Show/Hide an Event’s Details Scenario 1: An event element is collapsed by default. Given user hasn’t searched for any city or they have searched for a city When the user opens the app or selects a city Then all the event elements should be collapsed by the user

Scenario 2: User can expand an event to see its details. Given the user is interested in a specific event When user clicks on that event or button Then the user will see the details pertaining to that event

Scenario 3: User can collapse an event to hide its details. Given user got the information about said event When user clicks on a button or outside the event element Then the event should collapse and hide the details

Feature 3: Specify Number of Events Scenario 1: When user hasn’t specified a number, 32 is the default number. Given user opened the app or selects a city When the user does not specify the number of events Then a list of 32 events should be shown to the user

Scenario 2: User can change the number of events they want to see. Given user opens the app or selects a city When the user does specify the number of events shown Then a list of events that the user specified should be shown and returned to the user

Feature 4: Use the App when Offline Scenario 1: Show cached data when there’s no internet connection. Given user has no internet connection When the user opens the app Then a list of events should be returned cached

Scenario 2: Show error when user changes the settings (city, time range). Given user has no internet connection When user tries to change the settings Then an error message should show on the screen to the user

Feature 5: Data Visualization Scenario 1: Show a chart with the number of upcoming events in each city. Given user has an interest in the upcoming events of a specific city When the user clicks on a time button Then the user should see the number of upcoming events the the specific time range for that specific city