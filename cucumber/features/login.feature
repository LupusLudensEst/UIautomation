Feature: Login

    Testing the admin login page functionality
    Background: Login page
        Given   I am on the Login page

    Scenario: Login page | Login with correct credentials
        When Login with correct credentials
        Then The user is logged in

    Scenario: Login page | login with wrong password
        When Login with wrong password
        Then The invalidAlert is popped up
    
    Scenario: Login page | login with wrong username
        When Login with wrong username
        Then The invalidAlert is popped up

    Scenario: Login page | login with empty username and password
        When Login with empty username and password
        Then The required email alert is popped up
        Then The required password alert is popped up

    Scenario: Login page | login with empty username and correct password
        When Login with empty username and correct password
        Then The required email alert is popped up

    Scenario: Login page | login with correct username and empty password
        When Login with correct username and empty password
        Then The required password alert is popped up

    Scenario: Login page | login with invalid username and correct password
        When Login with invalid username and correct password
        Then The invalidEmail alert is popped up

    Scenario: Login page | login with correct username and invalid password
        When Login with correct username and invalid password
        Then The invalidPassword alert is popped up
