@regression
Feature: Add User

    Test Add User Functionality
    Background: Add User
        Given I am on the "/login" page
        And Login with correct credentials
        And The someone already connected alert is popped up

    Scenario: Add User
        When Filled out all fields and choosen drop-down menues
        Then Verify User was added






