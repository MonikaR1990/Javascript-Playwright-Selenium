Feature: User Registration Functionality

Scenario: Verify that user able to do successful registration with vaild details
Given user navigate to the register page
When user selects gender
And user enters the registration details
And user click the register button
Then user should register successfully
