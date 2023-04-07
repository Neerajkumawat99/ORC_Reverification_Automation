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
  Scenario: To validate reverification page
    And Click on Tasks Tab
    And Click on the TitleSpreadsheet
    And Click on Submit Button
    And Click on Search Tab
    And select ReverifyContact Radio button
    And Click on Activity href
    And Enter email id in Search by Contact Email
#    And Enter email or phone

#    When User Click on reverifycontact Button
#    And User click on CreateNewJob Button
#    And User enter jobname
#    And User Select Priority
#    Then Click On Browse Button
#    And Upload File From Local Directory
#    And Click on Submit Button
#    And Click on Refresh button
#    And Click on Tasks Tab
#    And Click on the TitleSpreadsheet
#    And Enter email or phone
#    And Click on Next button
#    And Click on Tasks Tab
#    And Click on the TitleSpreadsheet
#    And Enter email or phone
#
