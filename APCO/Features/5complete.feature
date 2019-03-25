Feature: Registering the thermostat
@Second
Scenario: Verifying serial number functionality
Given When user enters the uname as "sethin2@gmail.com"
And enters the pwd as "Public123!"
And click on signup
And click on close
And user is redirected to thermostat registartion page
Then Click on next
And user is redirected to confirmation page