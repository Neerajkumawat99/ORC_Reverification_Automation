Feature: Validate application login Page

  @First @Smoke @Reg
  Scenario: To validate Orchestration application Launching application
    Given Launch the url

  @First @Smoke @Reg
  Scenario: To validate login page
    When Enter invalid Username
    When Enter invalid Password
    And click on Login button
    When Enter valid Username
    When Enter Valid Password
    And click on Login button