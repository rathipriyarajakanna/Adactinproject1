@demo
Feature: Adactin practicse application end to end testing

@tc_1
Scenario: Verify the adactin homepage functionality of the application
Given Launch hotel reservation application
When User enter the username "rathipriya" in the username field
And User enter the password "rathi143" in the password field
And User click on the login button 

@tc_2
Scenario:  Launch hotel reservation application and checking the upcoming check in and check out dates
Given Launch hotel reservation application
When User enter the username "rathipriya" in the username field
And User enter the password "rathi143" in the password field
And User click on the login button 
And User select the location in the list
And User select the available hotels in the list 
And User select the roomtype in the list
And User select the number of rooms in the list
And User select the check in date as "03/07/2019"
And User select the check out date as "01/07/2019"
And User click on the search button to check the Availablity of the selected hotel
Then  Verify that system gives an error saying check-in-date should not be later than check-out-date

@tc_3
Scenario:  Launch hotel reservation application and checking the previous check in and check out dates
Given Launch hotel reservation application
When User enter the username "rathipriya" in the username field
And User enter the password "rathi143" in the password field
And User click on the login button 
And User select the location in the list
And User select the available hotels in the list 
And User select the roomtype in the list
And User select the number of rooms in the list
And User select the check in date as "19/06/2019" 
And User select the check out date as "23/06/2019"
And User click on the search button to check the Availablity of the selected hotel
Then Verify that the error message saying enter the valid dates

@tc_4
Scenario:  Launch hotel reservation application for checking the hotel location and hotel name
Given Launch hotel reservation application
When User enter the username "rathipriya" in the username field
And User enter the password "rathi143" in the password field
And User click on the login button 
And User select the location in the list
And User select the available hotels in the list 
And User select the roomtype in the list
And User select the number of rooms in the list
And User select the check in date as "27/06/2019" 
And User select the check out date as "28/06/2019"
And User click on the search button to check the Availablity of the selected hotel
Then Verify that hotel location and hotel name displayed is the same as selected in search Hotel form

@tc_5
Scenario:  Launch hotel reservation application for checking the selected check in and check out date validation
Given Launch hotel reservation application
When User enter the username "rathipriya" in the username field
And User enter the password "rathi143" in the password field
And User click on the login button 
And User select the location in the list
And User select the available hotels in the list 
And User select the roomtype in the list
And User select the number of rooms in the list
And User select the check in date as "27/06/2019" 
And User select the check out date as "28/06/2019"
And User click on the search button to check the Availablity of the selected hotel
Then Verify the check in and check out date displayed is the same as selected in search Hotel form

@tc_6
Scenario:  Launch hotel reservation application for checking the no of rooms selected 
Given Launch hotel reservation application
When User enter the username "rathipriya" in the username field
And User enter the password "rathi143" in the password field
And User click on the login button 
And User select the location in the list
And User select the available hotels in the list 
And User select the roomtype in the list
And User select the number of rooms in the list
And User select the check in date as "19/06/2019" 
And User select the check out date as "23/06/2019"
And User click on the search button to check the Availablity of the selected hotel
Then Verify the no of rooms selected in search Hotel form

@tc_7
Scenario:  Launch hotel reservation application for checking the no of rooms selected 
Given Launch hotel reservation application
When User enter the username "rathipriya" in the username field
And User enter the password "rathi143" in the password field
And User click on the login button 
And User select the location in the list
And User select the available hotels in the list 
And User select the roomtype in the list 
And User select the number of rooms in the list
And User select the check in date as "19/06/2019" 
And User select the check out date as "23/06/2019"
And User click on the search button to check the Availablity of the selected hotel
Then Verify the rooms type selected in search Hotel form


@tc_8
Scenario:  Launch hotel reservation application and checking priceexcelGST
Given Launch hotel reservation application
When User enter the username "rathipriya" in the username field
And User enter the password "rathi143" in the password field
And User click on the login button 
And User select the location in the list
And User select the available hotels in the list 
And User select the roomtype in the list
And User select the number of rooms in the list
And User select the check in date as "19/06/2019" 
And User select the check out date as "23/06/2019"
And User click on the search button to check the Availablity of the selected hotel
And User click on the radio button for selecting the hotel
And User click on the continue button
Then Verify that totalprice(excl.GST) is being calculated as (price-per-night*noof-rooms*no-of-days)
 
@tc_9
Scenario Outline:  Launch hotel reservation application and checking with GST calculation
Given Launch hotel reservation application
When User enter the username "<UserName>" in the username field
And User enter the password "<Password>" in the password field
And User click on the login button 
And User select the location in the list
And User select the available hotels in the list 
And User select the roomtype in the list
And User select the number of rooms in the list 
And User select the check in date as "06/07/2019" 
And User select the check out date as "07/07/2019"
And User click on the search button to check the Availablity of the selected hotel
And User click on the radio button for selecting the hotel
And User click on the continue button
And User enter the firstname
And User enter the lastname
And User enter the billingaddress
And User enter the credit card number
And User select the credit card type
And User select the expiry month
And User select the expiry year
And User enter the cvv number
And User click on the book now button
And User click on the logout button
Then To verify whether the hotel is booked and to verify the logout 
Examples:
|UserName             |Password           |
|rathipriya           |rathi143           |

@tc_10
Scenario Outline:  Launch hotel reservation application and checking with GST calculation
Given Launch hotel reservation application
When User enter the username "<UserName>" in the username field
And User enter the password "<Password>" in the password field
And User click on the login button 
And User select the location in the list
And User select the available hotels in the list 
And User select the roomtype in the list
And User select the number of rooms in the list 
And User select the check in date as "06/07/2019" 
And User select the check out date as "07/07/2019"
And User click on the search button to check the Availablity of the selected hotel
And User click on the radio button for selecting the hotel
And User click on the continue button
And User enter the firstname
And User enter the lastname
And User enter the billingaddress
And User enter the credit card number
And User select the credit card type
And User select the expiry month
And User select the expiry year
And User enter the cvv number
And User click on the book now button
And User click on the logout button
Then To verify the total-price as (price-pernight*no-ofrooms*no-ofdays+10% GST) in book a hotel page
Examples:
|UserName             |Password           |
|rathipriya           |rathi143           |
