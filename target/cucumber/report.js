$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login9.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Suvidya Pawaskar"
    },
    {
      "line": 2,
      "value": "#Feature: Login"
    },
    {
      "line": 3,
      "value": "#Date:25-02-2019"
    }
  ],
  "line": 6,
  "name": "Login feature",
  "description": "User wants to verify the login functionality of Mercury Tours application",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 298239,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "User access login page of Mercury tours application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "user opens \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters the application url \"http://newtours.demoaut.com/mercurywelcome.php\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user waits \"5\" seconds to load login page of Mercury Tours application",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user maximizes the browser",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user access on login page of Mercury Tours application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "Mercurytscucumberdemo.openBrowser(String)"
});
formatter.result({
  "duration": 18701481342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/mercurywelcome.php",
      "offset": 33
    }
  ],
  "location": "Mercurytscucumberdemo.enterApplication(String)"
});
formatter.result({
  "duration": 6745421979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "Mercurytscucumberdemo.waittillLoginpageloaded(int)"
});
formatter.result({
  "duration": 10423027,
  "status": "passed"
});
formatter.match({
  "location": "Mercurytscucumberdemo.maximizeBrowser()"
});
formatter.result({
  "duration": 1192546313,
  "status": "passed"
});
formatter.match({
  "location": "Mercurytscucumberdemo.verifyLoginpage()"
});
formatter.result({
  "duration": 20021307,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that valid user able to login into Mercury Tours application by using valid username and valid password",
  "description": "",
  "id": "login-feature;verify-that-valid-user-able-to-login-into-mercury-tours-application-by-using-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user access login page of Mercury Tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enters \"Suvidyap1\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"P@ssword1\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user is on Flight Finder page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user clicks on Signoff link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user is on Sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "Mercurytscucumberdemo.VerifyLoginimg()"
});
formatter.result({
  "duration": 177711559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suvidyap1",
      "offset": 13
    }
  ],
  "location": "Mercurytscucumberdemo.EnterUserName(String)"
});
formatter.result({
  "duration": 161980806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P@ssword1",
      "offset": 13
    }
  ],
  "location": "Mercurytscucumberdemo.EnterPassword(String)"
});
formatter.result({
  "duration": 123885495,
  "status": "passed"
});
formatter.match({
  "location": "Mercurytscucumberdemo.ClickonSignIn()"
});
formatter.result({
  "duration": 33229107334,
  "status": "passed"
});
formatter.match({
  "location": "Mercurytscucumberdemo.VerifyFlightFinderpage()"
});
formatter.result({
  "duration": 5047634285,
  "status": "passed"
});
formatter.match({
  "location": "Mercurytscucumberdemo.ClickonSignOff()"
});
formatter.result({
  "duration": 3052986812,
  "status": "passed"
});
formatter.match({
  "location": "Mercurytscucumberdemo.VerifySignonpage()"
});
formatter.result({
  "duration": 5040345975,
  "status": "passed"
});
formatter.after({
  "duration": 55467,
  "status": "passed"
});
formatter.before({
  "duration": 101547,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "User access login page of Mercury tours application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "user opens \"chrome\" browser",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user enters the application url \"http://newtours.demoaut.com/mercurywelcome.php\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user waits \"5\" seconds to load login page of Mercury Tours application",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user maximizes the browser",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user access on login page of Mercury Tours application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 12
    }
  ],
  "location": "Mercurytscucumberdemo.openBrowser(String)"
});
formatter.result({
  "duration": 12170844368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://newtours.demoaut.com/mercurywelcome.php",
      "offset": 33
    }
  ],
  "location": "Mercurytscucumberdemo.enterApplication(String)"
});
formatter.result({
  "duration": 19537026299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 12
    }
  ],
  "location": "Mercurytscucumberdemo.waittillLoginpageloaded(int)"
});
formatter.result({
  "duration": 4752634,
  "status": "passed"
});
formatter.match({
  "location": "Mercurytscucumberdemo.maximizeBrowser()"
});
formatter.result({
  "duration": 1123265976,
  "status": "passed"
});
formatter.match({
  "location": "Mercurytscucumberdemo.verifyLoginpage()"
});
formatter.result({
  "duration": 55315556,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify that invalid user not able to login into Mercury Tours application by using invalid username and invalid password",
  "description": "",
  "id": "login-feature;verify-that-invalid-user-not-able-to-login-into-mercury-tours-application-by-using-invalid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "user access login page of Mercury Tours application",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user enters \"Suvidyap\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user enters \"P@ssword\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user clicks on Sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user is on Sign on page",
  "keyword": "Then "
});
formatter.match({
  "location": "Mercurytscucumberdemo.VerifyLoginimg()"
});
formatter.result({
  "duration": 188630799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suvidyap",
      "offset": 13
    }
  ],
  "location": "Mercurytscucumberdemo.EnterUserName(String)"
});
formatter.result({
  "duration": 154627215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "P@ssword",
      "offset": 13
    }
  ],
  "location": "Mercurytscucumberdemo.EnterPassword(String)"
});
formatter.result({
  "duration": 140025847,
  "status": "passed"
});
formatter.match({
  "location": "Mercurytscucumberdemo.ClickonSignIn()"
});
formatter.result({
  "duration": 5541652640,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d72.0.3626.119)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-IUV45J7\u0027, ip: \u0027192.168.43.112\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_77\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:55252}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 72.0.3626.119, webStorageEnabled: true}\nSession ID: d2ac19a1e4d50b23bbcb65490156df07\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat mt.mstr.steps.Mercurytscucumberdemo.ClickonSignIn(Mercurytscucumberdemo.java:114)\r\n\tat ✽.And user clicks on Sign in button(Login9.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Mercurytscucumberdemo.VerifySignonpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 65706,
  "status": "passed"
});
});