package com.selenium.adactinpom;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AdactinHomePage {
public WebDriver driver;
public AdactinHomePage(WebDriver ldriver) {
	this.driver=ldriver;
	PageFactory.initElements(driver, this);
}
@FindBy(xpath="//input[@id=\"username\"]")
private WebElement username;

@FindBy(xpath="//input[@id=\"password\"]")
private WebElement password;

@FindBy(xpath="//input[@id=\"login\"]")
private WebElement loginbtn;

@FindBy(xpath="//select[@id=\"location\"]")
private WebElement selectlocation;

@FindBy(xpath="//option[text()=\"Sydney\"]")
private WebElement sydney;

@FindBy(xpath="//select[@id=\"hotels\"]")
private WebElement hotelsavailable;

@FindBy(xpath="//option[text()=\"Hotel Sunshine\"]")
private WebElement Hotelsunshine;

@FindBy(xpath="//select[@id=\"room_type\"]")
private WebElement Roomtype;

@FindBy(xpath="//option[text()=\"Standard\"]")
private WebElement standardroom;

@FindBy(xpath="//select[@id=\"room_nos\"]")
private WebElement numberofrooms;

@FindBy(xpath="//*[@id=\"room_nos\"]/option[2]")
private WebElement Oneroom;

@FindBy(xpath="//*[@id=\"room_nos\"]/option[4]")
private WebElement threerooms;

@FindBy(xpath="//input[@id=\"datepick_in\"]")
private WebElement checkindate;

@FindBy(xpath="//input[@id=\"datepick_out\"]")
private WebElement checkoutdate;

@FindBy(xpath="//select[@id=\"adult_room\"]")
private WebElement adultsperroom;

@FindBy(xpath="//select[@id=\"adult_room\"]")
private WebElement oneadultsinaroom;

@FindBy(xpath="//select[@id=\"child_room\"]")
private WebElement childrenperroom;

@FindBy(xpath="//select[@id=\"child_room\"]")
private WebElement onechildreninaroom;

@FindBy(xpath="//span[text()=\"Check-In Date shall be before than Check-Out Date\"]")
private WebElement checkinandcheckoutvalidation;

@FindBy(xpath="//input[@id=\"Submit\"]")
private WebElement searchbutton;

@FindBy(xpath="//input[@id=\"location_0\"]")
private WebElement selectedlocation;

@FindBy(xpath="//input[@id=\"hotel_name_0\"]")
private WebElement selectedhotelname;

@FindBy(xpath="//*[@id=\"arr_date_0\"]")
private WebElement arrivaldate;

@FindBy(xpath="//input[@id=\"dep_date_0\"]")
private WebElement departuredate;

@FindBy(xpath="//input[@id=\"rooms_0\"]")
private WebElement noofroomsselectedvalidate;

@FindBy(xpath="//input[@id=\"room_type_0\"]")
private WebElement roomstypevalidate;

@FindBy(xpath="//input[@id=\"radiobutton_0\"]")
private WebElement radiobutton;

@FindBy(xpath="//input[@id=\"continue\"]")
private WebElement continuebutton;

@FindBy(xpath="//input[@id=\"room_num_dis\"]")
private WebElement Numberofroomsinfinal;

public WebElement getNumberofroomsinfinal() {
	return Numberofroomsinfinal;
}
@FindBy(xpath="//input[@id=\"total_days_dis\"]")
private WebElement totaldays;

@FindBy(xpath="//input[@id=\"price_night_dis\"]")
private WebElement pricepernight;

@FindBy(xpath="//input[@id=\"total_price_dis\"]")
private WebElement totalpriceexcelGST;

@FindBy(xpath="//input[@id=\"first_name\"]")
private WebElement firstname;

@FindBy(xpath="//input[@id=\"final_price_dis\"]")
private WebElement FinalBilledPrice; 	

public WebElement getFinalBilledPrice() {
	return FinalBilledPrice;
}
public WebElement getFirstname() {
	return firstname;
}
public WebElement getLastname() {
	return lastname;
}
public WebElement getBillingaddress() {
	return billingaddress;
}
public WebElement getCreditcardno() {
	return creditcardno;
}
public WebElement getCreditcardtype() {
	return creditcardtype;
}
public WebElement getCreditcardexpmonth() {
	return creditcardexpmonth;
}
public WebElement getCreditcardexpyear() {
	return creditcardexpyear;
}
public WebElement getCvvnumber() {
	return cvvnumber;
}
public WebElement getBooknowbtn() {
	return booknowbtn;
}
public WebElement getAdultsroomselected() {
	return adultsroomselected;
}
public WebElement getChildrensperroomselected() {
	return childrensperroomselected;
}
public WebElement getLogoutbtn() {
	return logoutbtn;
}
@FindBy(xpath="//input[@id=\"last_name\"]")
private WebElement lastname;

@FindBy(xpath="//textarea[@id=\"address\"]")
private WebElement billingaddress;

@FindBy(xpath="//input[@id=\"cc_num\"]")
private WebElement creditcardno;

@FindBy(xpath="//select[@id=\"cc_type\"]")
private WebElement creditcardtype;

@FindBy(xpath="//select[@id=\"cc_exp_month\"]")
private WebElement creditcardexpmonth;

@FindBy(xpath="//select[@id=\"cc_exp_year\"]")
private WebElement creditcardexpyear;

@FindBy(xpath="//input[@id=\"cc_cvv\"]")
private WebElement cvvnumber;

@FindBy(xpath="//input[@id=\"book_now\"]")
private WebElement booknowbtn;

@FindBy(xpath="//input[@id=\"adults_room\"]")
private WebElement adultsroomselected;

@FindBy(xpath="//input[@id=\"children_room\"]")
private WebElement childrensperroomselected;


@FindBy(xpath="//input[@id=\"logout\"]")
private WebElement logoutbtn;

@FindBy(xpath="//td[contains(@class,\"reg_success\")]")
private WebElement logoutvalidate;

public WebElement getLogoutvalidate() {
	return logoutvalidate;
}
public WebElement getTotaldays() {
	return totaldays;
}
public WebElement getTotalpriceexcelGST() {
	return totalpriceexcelGST;
}

public WebElement getPricepernight() {
	return pricepernight;
}



public WebElement getUsername() {
	return username;
}

public WebElement getPassword() {
	return password;
}

public WebElement getLoginbtn() {
	return loginbtn;
}

public WebElement getSelectlocation() {
	return selectlocation;
}

public WebElement getSydney() {
	return sydney;
}

public WebElement getHotelsavailable() {
	return hotelsavailable;
}

public WebElement getHotelsunshine() {
	return Hotelsunshine;
}

public WebElement getRoomtype() {
	return Roomtype;
}

public WebElement getStandardroom() {
	return standardroom;
}

public WebElement getNumberofrooms() {
	return numberofrooms;
}

public WebElement getOneroom() {
	return Oneroom;
}

public WebElement getThreerooms() {
	return threerooms;
}

public WebElement getCheckindate() {
	return checkindate;
}

public WebElement getCheckoutdate() {
	return checkoutdate;
}

public WebElement getAdultsperroom() {
	return adultsperroom;
}

public WebElement getOneadultsinaroom() {
	return oneadultsinaroom;
}

public WebElement getChildrenperroom() {
	return childrenperroom;
}

public WebElement getOnechildreninaroom() {
	return onechildreninaroom;
}

public WebElement getCheckinandcheckoutvalidation() {
	return checkinandcheckoutvalidation;
}

public WebElement getSearchbutton() {
	return searchbutton;
}

public WebElement getSelectedlocation() {
	return selectedlocation;
}

public WebElement getSelectedhotelname() {
	return selectedhotelname;
}

public WebElement getArrivaldate() {
	return arrivaldate;
}

public WebElement getDeparturedate() {
	return departuredate;
}

public WebElement getNoofroomsselectedvalidate() {
	return noofroomsselectedvalidate;
}

public WebElement getRoomstypevalidate() {
	return roomstypevalidate;
}

public WebElement getRadiobutton() {
	return radiobutton;
}

public WebElement getContinuebutton() {
	return continuebutton;
}
}
