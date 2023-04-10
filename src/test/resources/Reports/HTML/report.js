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
  "name": "Click on Submit",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Yes to Confirmation popup",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_confirmation_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search Tab",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.i_click_on_search_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});