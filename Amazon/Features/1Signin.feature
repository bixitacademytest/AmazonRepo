Feature: Sign in and Search the product
@First
Scenario: Sign in functionality
Given Launch the browser and Enter the URL
When click on sign in 
Then User is on SignIn page
When user enter the email as "rekhasampath1@gmail.com"
And Enter the password as "reset@123"
Then User logged in successfully

@First
Scenario: Search functionality
When user searches the product
Then product is to be displayed



