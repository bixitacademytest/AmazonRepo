$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1Signin.feature");
formatter.feature({
  "line": 1,
  "name": "Sign in and Search the product",
  "description": "",
  "id": "sign-in-and-search-the-product",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Sign in functionality",
  "description": "",
  "id": "sign-in-and-search-the-product;sign-in-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch the browser and Enter the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on sign in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User is on SignIn page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enter the email as \"rekhasampath1@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enter the password as \"reset@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepsignin_search.launch_the_browser_and_Enter_the_URL()"
});
formatter.result({
  "duration": 18356742300,
  "status": "passed"
});
formatter.match({
  "location": "Stepsignin_search.click_on_sign_in()"
});
formatter.result({
  "duration": 93610409800,
  "status": "passed"
});
formatter.match({
  "location": "Stepsignin_search.user_is_on_SignIn_page()"
});
formatter.result({
  "duration": 34047000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rekhasampath1@gmail.com",
      "offset": 25
    }
  ],
  "location": "Stepsignin_search.user_enter_the_email_as(String)"
});
formatter.result({
  "duration": 84458162200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reset@123",
      "offset": 23
    }
  ],
  "location": "Stepsignin_search.enter_the_password_as(String)"
});
formatter.result({
  "duration": 297449300,
  "status": "passed"
});
formatter.match({
  "location": "Stepsignin_search.user_logged_in_successfully()"
});
formatter.result({
  "duration": 60203333300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search functionality",
  "description": "",
  "id": "sign-in-and-search-the-product;search-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user searches the product",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "product is to be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepsignin_search.user_searches_the_product()"
});
formatter.result({
  "duration": 237448600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"twotabsearchtextbox\"}\n  (Session info: chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027REKHA-LAPTOP\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\rekha\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59033}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.121, webStorageEnabled: true}\nSession ID: 0fc01a5fc8bd0664b3408f051bb8fab9\n*** Element info: {Using\u003did, value\u003dtwotabsearchtextbox}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat JavaClass.Amazon1.Stepsignin_search.user_searches_the_product(Stepsignin_search.java:61)\r\n\tat ✽.When user searches the product(1Signin.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepsignin_search.product_is_to_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("3Orderplace.feature");
formatter.feature({
  "line": 1,
  "name": "Order placing",
  "description": "",
  "id": "order-placing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Product selection functionality",
  "description": "",
  "id": "order-placing;product-selection-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "When user selects the product",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "product description will be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Steporderplace.when_user_selects_the_product()"
});
formatter.result({
  "duration": 86326300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[contains(text(),\u0027Vivo Y91 1816 (Ocean Blue, 2GB RAM, 32GB Storage) with Offers\u0027)]\"}\n  (Session info: chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027REKHA-LAPTOP\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\rekha\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59033}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.121, webStorageEnabled: true}\nSession ID: 0fc01a5fc8bd0664b3408f051bb8fab9\n*** Element info: {Using\u003dxpath, value\u003d//h2[contains(text(),\u0027Vivo Y91 1816 (Ocean Blue, 2GB RAM, 32GB Storage) with Offers\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:424)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat JavaClass.Amazon1.Steporderplace.when_user_selects_the_product(Steporderplace.java:19)\r\n\tat ✽.Given When user selects the product(3Orderplace.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steporderplace.product_description_will_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Add to cart functionality",
  "description": "",
  "id": "order-placing;add-to-cart-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "clicking on Add to cart",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "item to be added into the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "when click on cart symbol",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Item added should be in the cart",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click on proceed to pay",
  "keyword": "Then "
});
formatter.match({
  "location": "Steporderplace.clicking_on_Add_to_cart()"
});
formatter.result({
  "duration": 63768800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"submit.add-to-cart\"}\n  (Session info: chrome\u003d72.0.3626.121)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027REKHA-LAPTOP\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\rekha\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59033}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.121, webStorageEnabled: true}\nSession ID: 0fc01a5fc8bd0664b3408f051bb8fab9\n*** Element info: {Using\u003dname, value\u003dsubmit.add-to-cart}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat JavaClass.Amazon1.Steporderplace.clicking_on_Add_to_cart(Steporderplace.java:50)\r\n\tat ✽.When clicking on Add to cart(3Orderplace.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steporderplace.item_to_be_added_into_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steporderplace.when_click_on_cart_symbol()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steporderplace.item_added_should_be_in_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steporderplace.click_on_proceed_to_pay()"
});
formatter.result({
  "status": "skipped"
});
});