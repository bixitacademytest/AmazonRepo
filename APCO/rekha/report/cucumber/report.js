$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1BYOT.feature");
formatter.feature({
  "line": 1,
  "name": "BYOT functionality",
  "description": "",
  "id": "byot-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify the BYOT",
  "description": "",
  "id": "byot-functionality;verify-the-byot",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Clicking on BYOT tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user is redirected to BYOT",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on Enroll button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is landing on customer information page",
  "keyword": "And "
});
formatter.match({
  "location": "Stepbyot.launch_the_browser()"
});
formatter.result({
  "duration": 14226855200,
  "status": "passed"
});
formatter.match({
  "location": "Stepbyot.clicking_on_BYOT_tab()"
});
formatter.result({
  "duration": 4174502900,
  "status": "passed"
});
formatter.match({
  "location": "Stepbyot.user_is_redirected_to_BYOT()"
});
formatter.result({
  "duration": 11894700,
  "status": "passed"
});
formatter.match({
  "location": "Stepbyot.click_on_Enroll_button()"
});
formatter.result({
  "duration": 6392145000,
  "status": "passed"
});
formatter.match({
  "location": "Stepbyot.user_is_landing_on_customer_information_page()"
});
formatter.result({
  "duration": 21405900,
  "status": "passed"
});
formatter.uri("2Signin.feature");
formatter.feature({
  "line": 1,
  "name": "Login to BYOT",
  "description": "",
  "id": "login-to-byot",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login Functionality",
  "description": "",
  "id": "login-to-byot;login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "When user enters the username as \"rekha.sampath1983+6@gmail.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters the password as \"Take@12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User is redirecting to Property information page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "rekha.sampath1983+6@gmail.com",
      "offset": 34
    }
  ],
  "location": "Steplogin.when_user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 1186335100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Take@12345",
      "offset": 29
    }
  ],
  "location": "Steplogin.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 332326500,
  "status": "passed"
});
formatter.match({
  "location": "Steplogin.user_is_redirecting_to_Property_information_page()"
});
formatter.result({
  "duration": 5157371600,
  "status": "passed"
});
formatter.uri("3Homeinfo.feature");
formatter.feature({
  "line": 1,
  "name": "Getting the home information details",
  "description": "",
  "id": "getting-the-home-information-details",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Home information functionality",
  "description": "",
  "id": "getting-the-home-information-details;home-information-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Select the program name",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select the offer code",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Select My home is",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Select I heat my home with",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "enter my home was built in",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select my home as central A/c",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select my home has wifi as",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "click on next",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is redirected to thermostat information page",
  "keyword": "And "
});
formatter.match({
  "location": "Stephomeinfo.select_the_program_name()"
});
formatter.result({
  "duration": 1980310000,
  "status": "passed"
});
formatter.match({
  "location": "Stephomeinfo.select_the_offer_code()"
});
formatter.result({
  "duration": 214334500,
  "status": "passed"
});
formatter.match({
  "location": "Stephomeinfo.select_My_home_is()"
});
formatter.result({
  "duration": 241664400,
  "status": "passed"
});
formatter.match({
  "location": "Stephomeinfo.select_I_heat_my_home_with()"
});
formatter.result({
  "duration": 224829700,
  "status": "passed"
});
formatter.match({
  "location": "Stephomeinfo.enter_my_home_was_built_in()"
});
formatter.result({
  "duration": 145433400,
  "status": "passed"
});
formatter.match({
  "location": "Stephomeinfo.select_my_home_as_central_A_c()"
});
formatter.result({
  "duration": 191669000,
  "status": "passed"
});
formatter.match({
  "location": "Stephomeinfo.select_my_home_has_wifi_as()"
});
formatter.result({
  "duration": 152362800,
  "status": "passed"
});
formatter.match({
  "location": "Stephomeinfo.click_on_next()"
});
formatter.result({
  "duration": 5150480300,
  "status": "passed"
});
formatter.match({
  "location": "Stephomeinfo.user_is_redirected_to_thermostat_information_page()"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.uri("4Thermo.feature");
formatter.feature({
  "line": 1,
  "name": "Getting the thermostat information",
  "description": "",
  "id": "getting-the-thermostat-information",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "BYOT registration functionality",
  "description": "",
  "id": "getting-the-thermostat-information;byot-registration-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Select the thermostat manufacturer",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select how many thermostats are you registering",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Select the Thermostat model",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter the valid serial number",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Check I agree",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Register my thermostats",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is redirected to particular thermostat registration url",
  "keyword": "And "
});
formatter.match({
  "location": "Stepthermo.select_the_thermostat_manufacturer()"
});
formatter.result({
  "duration": 186499800,
  "status": "passed"
});
formatter.match({
  "location": "Stepthermo.select_how_many_thermostats_are_you_registering()"
});
formatter.result({
  "duration": 236292000,
  "status": "passed"
});
formatter.match({
  "location": "Stepthermo.select_the_Thermostat_model()"
});
formatter.result({
  "duration": 200270800,
  "status": "passed"
});
formatter.match({
  "location": "Stepthermo.enter_the_valid_serial_number()"
});
formatter.result({
  "duration": 396535400,
  "status": "passed"
});
formatter.match({
  "location": "Stepthermo.check_I_agree()"
});
formatter.result({
  "duration": 109652700,
  "status": "passed"
});
formatter.match({
  "location": "Stepthermo.user_clicks_on_Register_my_thermostats()"
});
formatter.result({
  "duration": 5142497800,
  "status": "passed"
});
formatter.match({
  "location": "Stepthermo.user_is_redirected_to_particular_thermostat_registration_url()"
});
formatter.result({
  "duration": 15336100,
  "status": "passed"
});
formatter.uri("5complete.feature");
formatter.feature({
  "line": 1,
  "name": "Registering the thermostat",
  "description": "",
  "id": "registering-the-thermostat",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verifying serial number functionality",
  "description": "",
  "id": "registering-the-thermostat;verifying-serial-number-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "When user enters the uname as \"sethin2@gmail.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "enters the pwd as \"Public123!\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on signup",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on close",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is redirected to thermostat registartion page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on next",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is redirected to confirmation page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "sethin2@gmail.com",
      "offset": 31
    }
  ],
  "location": "Stepcomplete.when_user_enters_the_uname_as(String)"
});
formatter.result({
  "duration": 8526527900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Public123!",
      "offset": 19
    }
  ],
  "location": "Stepcomplete.enters_the_pwd_as(String)"
});
formatter.result({
  "duration": 245325700,
  "status": "passed"
});
formatter.match({
  "location": "Stepcomplete.click_on_signup()"
});
formatter.result({
  "duration": 127346400,
  "status": "passed"
});
formatter.match({
  "location": "Stepcomplete.click_on_close()"
});
formatter.result({
  "duration": 100701200,
  "status": "passed"
});
formatter.match({
  "location": "Stepcomplete.user_is_redirected_to_thermostat_registartion_page()"
});
formatter.result({
  "duration": 56500,
  "status": "passed"
});
formatter.match({
  "location": "Stepcomplete.click_on_next()"
});
formatter.result({
  "duration": 25193751400,
  "status": "passed"
});
formatter.match({
  "location": "Stepcomplete.user_is_redirected_to_confirmation_page()"
});
formatter.result({
  "duration": 42942600,
  "status": "passed"
});
});