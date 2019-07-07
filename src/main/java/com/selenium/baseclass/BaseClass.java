package com.selenium.baseclass;

import java.util.ArrayList;

import java.util.List;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;

import javax.management.RuntimeErrorException;

import org.openqa.selenium.JavascriptException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {
	public static WebDriver driver;
	public static WebDriver browserLaunch(String browserName) {
		

		try {
			if(browserName.equalsIgnoreCase("Chrome")) {
				System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\test\\resource\\com\\selenium\\driver\\chromedriver.exe");
			driver=new ChromeDriver();
			}
			else if(browserName.equalsIgnoreCase("IE")){
				System.setProperty("webdriver.ie.driver", System.getProperty("user.dir")+"\\src\\test\\resource\\com\\selenium\\driver\\IEDriverServer.exe");
				driver=new InternetExplorerDriver();	
			}
			else {
				throw new RuntimeException("Please specify the valid browser name");
			}
			driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
			driver.manage().window().maximize();
			return driver;
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		}
			
		}
	public static void geturl(String url) {
	try {
		driver.get(url);
	} catch (Exception e) {
		e.printStackTrace();
		throw new RuntimeException();

	}	
	}
	public static boolean elementisDisplayed(WebElement element) {
		
	try {
		boolean displayed = element.isDisplayed();
		return displayed;
	} catch (Exception e) {
		e.printStackTrace();
		throw new RuntimeException();

	}
			}
	
	public static boolean elementisEnabled(WebElement element) {
		try {
			boolean Enabled = element.isDisplayed();
return Enabled;
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}	
	}
	public static void waitforElementVisibility(WebElement element) {
		try {
			WebDriverWait wd=new WebDriverWait(driver, 40);
			wd.until(ExpectedConditions.visibilityOf(element));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
		
		}
	public static void waitforTextPresentOnElement(WebElement element,String Text) {
		try {
			WebDriverWait wd=new WebDriverWait(driver, 30);
			wd.until(ExpectedConditions.textToBePresentInElementValue(element, Text));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
		}
	public static void inputValueToTheElement(WebElement element,String vaule) {
		try {
			waitforElementVisibility(element);
            boolean elementisDisplayed = elementisDisplayed(element);
			boolean elementisEnabled = elementisEnabled(element);
			if (elementisDisplayed&&elementisEnabled) {
				element.clear();
				element.sendKeys(vaule);
				
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
	}
	public static void clickOnTheElement(WebElement element) {
		try {
			waitforElementVisibility(element);
			if (elementisDisplayed(element)) {
			element.click();	
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
	}
	public static void mouseHoverToTheElement(WebElement element) {
		try {
			Actions ac=new Actions(driver);
			ac.moveToElement(element).build().perform();
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();
		

		}
	}
	
	public static void dropdDownForIndex(WebElement element,String index) {
		try {
			waitforElementVisibility(element);
			boolean elementisDisplayed = elementisDisplayed(element);
			Select s=new Select(element);
			s.selectByValue(index);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
	}
	
	public static void dropdDownForValue(WebElement element,String value) {
		try {
			waitforElementVisibility(element);
			boolean elementisDisplayed = elementisDisplayed(element);
			Select s=new Select(element);
			s.selectByValue(value);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
	}
	
	public static void multipleCheckboxSelectOptionOfTheelement(WebElement element) {
		
		try {
			waitforElementVisibility(element);
			boolean elementisDisplayed = elementisDisplayed(element);
			List<WebElement> checkbox=new ArrayList<WebElement>();
			for (WebElement x : checkbox) {
				x.click();
				
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
	}
	
	public static void toelementHighlight(WebElement element) {
		try {
			JavascriptExecutor js=(JavascriptExecutor)driver;
			js.executeScript("arguments[0].setAttributer('style','background:yellow;border:2px solid red;');", element);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
		
	}
	public static void dropDownForText(WebElement element,String text) {
		try {
			waitforElementVisibility(element);
			boolean elementisDisplayed = elementisDisplayed(element);
			Select s=new Select(element);
			s.deselectByVisibleText(text);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
	}
	
	public static void dropDownMethod(WebElement element,String value,String option) throws Exception {
		try {
			waitforElementVisibility(element);
			Select sc=new Select(element);
			if (option.equalsIgnoreCase("value")) {
				sc.selectByValue(value);
				}
			else if (option.equalsIgnoreCase("VisibleText")) {
				sc.selectByVisibleText(value);
			
			}
			else if (option.equalsIgnoreCase("Index")) {
				sc.selectByIndex(Integer.parseInt(value));
				
			}
			else {
				throw new Exception("Not a valid option");
			}
		} catch (NumberFormatException e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
		}
	
	public static void scrollByUsingElement(WebElement element) {
	
		try {
			JavascriptExecutor js=(JavascriptExecutor)driver;
			js.executeScript("arguments[0].scrollIntoView()", element);
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
	}
	
	public static void dragAndDropActions(WebElement src,WebElement tar) {
		try {
			Actions ac=new Actions(driver);
			ac.dragAndDrop(src, tar).build().perform();
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException();

		}
		
	}
	
	public static String getTextOfTheElement(WebElement element) {
try {
	String gettextValue = element.getText();	
	System.out.println(gettextValue);
	return gettextValue;
} catch (Exception e) {
	e.printStackTrace();
	throw new RuntimeException();

}
	
	}
public static String getAttributeOfTheElement(WebElement element) {
	try {
		String getattributevalue = element.getAttribute("value");
		System.out.println(getattributevalue);
		return getattributevalue;
	} catch (Exception e) {
		e.printStackTrace();
		throw new RuntimeException();

	}
}

public static void getValuesUsingScanner(String value) {
	try {
		Scanner sc=new Scanner(System.in);
		System.out.println("Verify the Total Price excl GST");
		int price=sc.nextInt();
		int nroom=sc.nextInt();
		int nday=sc.nextInt();
		int totalprice= price * nroom * nday;
		System.out.println("Total Price is"+totalprice); 
		//int GST=sc.nextInt();
		int GSTPercentage= (price * 10)/100;
		System.out.println("GST 10%" +GSTPercentage);
		int GSTprice=GSTPercentage + totalprice; 
		System.out.println("Total Price with GST"+GSTprice);
	} catch (Exception e) {
		e.printStackTrace();
		throw new RuntimeException();

	} 
   	

   	}
}
	


