Feature: Login

Scenario: User navigates to Login page
    Given I open the url "/"
    When I click on the element "[href*='login']"
    Then I expect that element ".login-img" becomes displayed
    And I expect that the path is "/login"

Scenario: User logs in
    Given I open the url "/login"
    And I click on the element "#email"
    When I set "dancefront@gmail.com" to the inputfield "#email"
    And I set "Tester@1234" to the inputfield "#password"
    And I click on the button ".green-btn"
    Then I expect that element "[class*='DesktopDropDownMenu__Avatar'] img" becomes displayed
    And I expect that the path is "/"