Feature: Login Functionality

Scenario: Verify that user able to login successful with valid credentials
Given user navigate to the login page
And user enters username and password
When user click the Login button
Then user should be navigate to the user home page

Scenario: Verify that user get invalid error for invalid login
Given user navigate to the login page
And user enters invalid username and password
When user click the Login button
Then user should see the login error

Scenario Outline: Login with multiple users
Given user navigate to the login page
And user enters username "<username>" and password "<password>"
When user click the Login button
Then user should see "<result>"

Examples:
| username           | password  | result  |
| srees123@gmail.com | srees@123 | success |
| wrong@gmail.com    | wrong@123 | error   |
| abc@gmail.com      | abc@123   | error   |
| xyz@gmail.com      | xyz@123   | error   |









