#Feature: Validate reverify contact page
#
#  @First @Smoke @Reg
#  Scenario: To validate reverification page
#  When User Click on reverifycontact Button
#    And User click on CreateNewJob Button
#    And User enter jobname
#    And User Select Priority
#    And User select Onscreen
#    And Enter Contact Id
#    And Select linkedin Correct
#    And Enter LinkedinUrl
#    And Enter First name
#    And Enter Last name
#    And Enter Title
#    And Enter Email id
#    And Enter CompanyName
#    And Enter CompanyDomain
#    And Enter PersonalEmail
#    And Select Is International
#    And Enter Tier
#    And Click on Submit Button

Feature: Validate reverify contact page

  @First @Smoke @Reg
  Scenario: To validate reverification job upload page
    When User Click on reverifycontact Button
    And User click on CreateNewJob Button
    And User enter jobname
    And User Select Priority
    Then Click On Browse Button
    And Upload File From Local Directory
    And Click on Submit Button
    And Search by Job Name
    And Click on Search button
    And verify Job name in result
    And verify Priority
#    And Click on Tasks Tab
#    And Click on Refresh button
#    And Click on Submit
#    And Click on Yes to Confirmation popup
#    And Click on Search Tab

