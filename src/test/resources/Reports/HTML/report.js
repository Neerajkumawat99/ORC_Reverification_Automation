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
  "status": "passed"
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Job name in result",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_Check_JobnameInResult()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Priority",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.I_check_priority()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});