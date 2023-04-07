$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/TC_1_Login_Page_Validation.feature");
formatter.feature({
  "name": "Validate application login Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate Orchestration application Launching application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Launch the url",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.launch_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid Username",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_enter_the_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Valid Password",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_enter_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/Features/TC_3_Reverify_Contact.feature");
formatter.feature({
  "name": "Validate reverify contact page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate reverification page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Click on reverifycontact Button",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_click_on_reverify_contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on CreateNewJob Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_create_new_job_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter jobname",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_entered_jobname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select Priority",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_select_high_priority()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click On Browse Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.I_Click_Browse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Upload File From Local Directory",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Upload_File_Directory()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Submit Button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Refresh button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_refresh_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Tasks Tab",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_on_tasks_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the TitleSpreadsheet",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_title_spreadsheet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter email or phone",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_enter_gmail()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@type\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d111.0.5563.147)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-83ETVLJ\u0027, ip: \u0027172.16.17.100\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.147, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\Astegic\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55709}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5913dbebfb6e8b86c08dad6be8564705\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027email\u0027]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.sendKeys(Unknown Source)\r\n\tat org.base.Global.enterData(Global.java:51)\r\n\tat org.stepdefinition.Steps.I_enter_gmail(Steps.java:318)\r\n\tat ✽.Enter email or phone(file:src/test/resources/Features/TC_3_Reverify_Contact.feature:38)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on Next button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Click on Tasks Tab",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Click_on_tasks_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the TitleSpreadsheet",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_title_spreadsheet()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click On First Reverify Link In Sales Intel Orchestration Site",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.click_On_First_Reverify_Link_In_Sales_Intel_Orchestration_Site()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter email or phone",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_enter_gmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Switch To The Parent Window  In Sales Intel Orchestration Site",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.switch_To_The_Parent_Window_In_Sales_Intel_Orchestration_Site()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});