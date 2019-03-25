Feature: Getting the thermostat information
@Second
Scenario: BYOT registration functionality
Given Select the thermostat manufacturer
And Select how many thermostats are you registering
Then Select the Thermostat model
And Enter the valid serial number 
And Check I agree
Then user clicks on Register my thermostats
And user is redirected to particular thermostat registration url