Feature: Signup and create a new login
@First
Scenario: Signup Functionality
Given when user clicks on new rebate account
Then User is redirecting to new rebate page
When user enters the firstname as ""
And user enters the lastname as ""
And user enters the Account no as ""
And user enters the city as ""
And user enters the state as ""
And user enters the zip as ""
And check is the mailing address same as installation address
Then Enter the Additional rebate questions
Then Enter the email as " "
And  Enters the password as ""
And Confirm the password as ""
Then click on Accept and continue
And user is redirected to Rebate home page