$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdactinPracticeEnd2End.feature");
formatter.feature({
  "line": 2,
  "name": "Adactin practicse application end to end testing",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.scenarioOutline({
  "line": 150,
  "name": "Launch hotel reservation application and checking with GST calculation",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 149,
      "name": "@tc_10"
    }
  ]
});
formatter.step({
  "line": 151,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "User enter the username \"\u003cUserName\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "User enter the password \"\u003cPassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "User click on the logout button",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "To verify the total-price as (price-pernight*no-ofrooms*no-ofdays+10% GST) in book a hotel page",
  "keyword": "Then "
});
formatter.examples({
  "line": 175,
  "name": "",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 176,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;;1"
    },
    {
      "cells": [
        "rathipriya",
        "rathi143"
      ],
      "line": 177,
      "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 177,
  "name": "Launch hotel reservation application and checking with GST calculation",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-with-gst-calculation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    },
    {
      "line": 149,
      "name": "@tc_10"
    }
  ]
});
formatter.step({
  "line": 151,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "User enter the username \"rathipriya\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 153,
  "name": "User enter the password \"rathi143\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "User select the check in date as \"06/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "User select the check out date as \"07/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "User enter the firstname",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "User enter the lastname",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User enter the billingaddress",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "User enter the credit card number",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "User select the credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "User select the expiry month",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "User select the expiry year",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "User enter the cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "User click on the book now button",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "User click on the logout button",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "To verify the total-price as (price-pernight*no-ofrooms*no-ofdays+10% GST) in book a hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 1566596100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathipriya",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 436110700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rathi143",
      "offset": 25
    }
  ],
  "location": "AdactinStepDefinition.user_enter_the_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 297717000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 585372600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 257920500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 231156500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 226949900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 220290400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 263629500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 247040900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 665592600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 168773900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 560001200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_firstname()"
});
formatter.result({
  "duration": 252927500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_lastname()"
});
formatter.result({
  "duration": 242891100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_billingaddress()"
});
formatter.result({
  "duration": 238724400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_credit_card_number()"
});
formatter.result({
  "duration": 327244300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_credit_card_type()"
});
formatter.result({
  "duration": 224632700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_month()"
});
formatter.result({
  "duration": 216302700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_expiry_year()"
});
formatter.result({
  "duration": 218917600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_enter_the_cvv_number()"
});
formatter.result({
  "duration": 245289200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_book_now_button()"
});
formatter.result({
  "duration": 147115000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_logout_button()"
});
formatter.result({
  "duration": 5763264500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 66
    }
  ],
  "location": "AdactinStepDefinition.to_verify_the_total_price_as_price_pernight_no_ofrooms_no_ofdays_GST_in_book_a_hotel_page(int)"
});
formatter.result({
  "duration": 50080996700,
  "error_message": "java.lang.RuntimeException\r\n\tat com.selenium.baseclass.BaseClass.getAttributeOfTheElement(BaseClass.java:275)\r\n\tat com.cucumber.adactinstepdefinition.AdactinStepDefinition.to_verify_the_total_price_as_price_pernight_no_ofrooms_no_ofdays_GST_in_book_a_hotel_page(AdactinStepDefinition.java:251)\r\n\tat ✽.Then To verify the total-price as (price-pernight*no-ofrooms*no-ofdays+10% GST) in book a hotel page(AdactinPracticeEnd2End.feature:174)\r\n",
  "status": "failed"
});
});