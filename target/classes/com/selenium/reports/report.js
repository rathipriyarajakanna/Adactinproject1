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
formatter.scenario({
  "line": 5,
  "name": "Verify the adactin homepage functionality of the application",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;verify-the-adactin-homepage-functionality-of-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc_1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 3721777800,
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
  "duration": 472509600,
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
  "duration": 407623500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1741064900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Launch hotel reservation application and checking the upcoming check in and check out dates",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-the-upcoming-check-in-and-check-out-dates",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@tc_2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User select the check in date as \"03/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User select the check out date as \"01/07/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify that system gives an error saying check-in-date should not be later than check-out-date",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 432427400,
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
  "duration": 258261000,
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
  "duration": 255823200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 922716200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 294539800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 202627700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 216990500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 163823700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/07/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 271717500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01/07/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 257977500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 157235400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_system_gives_an_error_saying_check_in_date_should_not_be_later_than_check_out_date()"
});
formatter.result({
  "duration": 2070632400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Launch hotel reservation application and checking the previous check in and check out dates",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-and-checking-the-previous-check-in-and-check-out-dates",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@tc_3"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User select the check in date as \"19/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User select the check out date as \"23/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Verify that the error message saying enter the valid dates",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 11869689400,
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
  "duration": 255641700,
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
  "duration": 242469800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 866366400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 210850300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 193683500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 209169100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 165604000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/06/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 247139200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23/06/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 244774800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 980102000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_the_error_message_saying_enter_the_valid_dates()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Launch hotel reservation application for checking the hotel location and hotel name",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-for-checking-the-hotel-location-and-hotel-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@tc_4"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User select the check in date as \"27/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User select the check out date as \"28/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Verify that hotel location and hotel name displayed is the same as selected in search Hotel form",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 411896200,
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
  "duration": 249537900,
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
  "duration": 235941300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 823367800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 192443900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 191765900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 201084600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 169559200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27/06/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 252544800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28/06/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 232110100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 779786400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_hotel_location_and_hotel_name_displayed_is_the_same_as_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 63013400,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Launch hotel reservation application for checking the selected check in and check out date validation",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-for-checking-the-selected-check-in-and-check-out-date-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@tc_5"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User select the check in date as \"27/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User select the check out date as \"28/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Verify the check in and check out date displayed is the same as selected in search Hotel form",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 388162200,
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
  "duration": 249628200,
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
  "duration": 227337400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 909348300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 210722700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 193721100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 186618700,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 162472700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27/06/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 237108500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28/06/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 226843000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 32524882100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_check_in_and_check_out_date_displayed_is_the_same_as_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 8458257500,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Launch hotel reservation application for checking the no of rooms selected",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-for-checking-the-no-of-rooms-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 71,
      "name": "@tc_6"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "User select the check in date as \"19/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User select the check out date as \"23/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Verify the no of rooms selected in search Hotel form",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 7791292300,
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
  "duration": 273555300,
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
  "duration": 231494500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 1225878300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 222256900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 193460500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 210193100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 165941300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/06/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 235266800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23/06/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 235602500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 740288800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_no_of_rooms_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 42094900,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Launch hotel reservation application for checking the no of rooms selected",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-for-checking-the-no-of-rooms-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 86,
      "name": "@tc_7"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the check in date as \"19/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User select the check out date as \"23/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Verify the rooms type selected in search Hotel form",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 396646400,
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
  "duration": 239560400,
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
  "duration": 209168800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 822721100,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 204382300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 197153000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 198231300,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 158918500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/06/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 255985300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23/06/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 273259400,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 11551114200,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_the_rooms_type_selected_in_search_Hotel_form()"
});
formatter.result({
  "duration": 28812100,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Launch hotel reservation application for checking the no of rooms selected",
  "description": "",
  "id": "adactin-practicse-application-end-to-end-testing;launch-hotel-reservation-application-for-checking-the-no-of-rooms-selected",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 102,
      "name": "@tc_8"
    }
  ]
});
formatter.step({
  "line": 104,
  "name": "Launch hotel reservation application",
  "keyword": "Given "
});
formatter.step({
  "line": 105,
  "name": "User enter the username \"rathipriya\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 106,
  "name": "User enter the password \"rathi143\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User select the location in the list",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "User select the available hotels in the list",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User select the roomtype in the list",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "User select the number of rooms in the list",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "User select the check in date as \"19/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "User select the check out date as \"23/06/2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "User click on the search button to check the Availablity of the selected hotel",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "User click on the radio button for selecting the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "User click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "Verify that totalprice(excl.GST) is being calculated as (price-per-night*noof-rooms*no-of-days)",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDefinition.launch_hotel_reservation_application()"
});
formatter.result({
  "duration": 783091500,
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
  "duration": 277759500,
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
  "duration": 225929800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_login_button()"
});
formatter.result({
  "duration": 860529600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_location_in_the_list()"
});
formatter.result({
  "duration": 204892500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_available_hotels_in_the_list()"
});
formatter.result({
  "duration": 202531500,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_roomtype_in_the_list()"
});
formatter.result({
  "duration": 202055900,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_select_the_number_of_rooms_in_the_list()"
});
formatter.result({
  "duration": 165570300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19/06/2019",
      "offset": 34
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_in_date_as(String)"
});
formatter.result({
  "duration": 232429500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23/06/2019",
      "offset": 35
    }
  ],
  "location": "AdactinStepDefinition.user_select_the_check_out_date_as(String)"
});
formatter.result({
  "duration": 242768800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_search_button_to_check_the_Availablity_of_the_selected_hotel()"
});
formatter.result({
  "duration": 1172220600,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_radio_button_for_selecting_the_hotel()"
});
formatter.result({
  "duration": 159227800,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.user_click_on_the_continue_button()"
});
formatter.result({
  "duration": 884889000,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDefinition.verify_that_totalprice_excl_GST_is_being_calculated_as_price_per_night_noof_rooms_no_of_days()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
});