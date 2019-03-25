Feature: Sign Up

Scenario: SignUp functionality
Given Launch the browser and Enter amazon.com
When Move to Sign in 
And click start here
Then Page is redirecting to create account page


Scenario: Create Account
Given User is on create account page
When enter the name as "Rekha"
When enter Email as "rekhasampath1@gmail.com"
When enter password as "rek@123"
When Re-enter password as "rek@123"
And Click on create your amazon account
Then user will be redirecting to verify email address page


Scenario: Verify email
Given User is on confirmation page
When user enters the verification code as "174548"
Then Click on verify button
