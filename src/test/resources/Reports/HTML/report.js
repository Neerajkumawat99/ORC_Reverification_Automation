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
  "name": "Enter invalid Username",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.I_enter_invalid_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter invalid Password",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.i_enter_invalid_password()"
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
  "name": "Search by Job Name",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_Search_by_jobname()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d111.0.5563.147)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-83ETVLJ\u0027, ip: \u0027172.16.17.100\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.147, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\Astegic\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:63132}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f59d0339fe365392a727a77ff32242da\n*** Element info: {Using\u003dxpath, value\u003d//a[@href\u003d\u0027/orchestration/tasks\u0027]}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy25.click(Unknown Source)\r\n\tat org.base.Global.clickButton(Global.java:55)\r\n\tat org.stepdefinition.Steps.I_Click_on_tasks_tab(Steps.java:182)\r\n\tat ✽.Click on Tasks Tab(file:src/test/resources/Features/TC_3_Reverify_Contact.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify Job name in result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_JobnameInResult()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify Priority",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_check_priority()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d111.0.5563.147)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-83ETVLJ\u0027, ip: \u0027172.16.17.100\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002718.0.1.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.147, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\Astegic\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:63132}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f59d0339fe365392a727a77ff32242da\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:483)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat org.runner.BeforeExection.afterExecutedClass(BeforeExection.java:41)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:79)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:577)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
});