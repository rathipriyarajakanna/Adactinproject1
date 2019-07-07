package com.helper;

import org.openqa.selenium.WebDriver;


import com.selenium.adactinpom.AdactinHomePage;
import com.selenium.amazonpom.AmazonHomePage;

public class PageObjectManager {

	public WebDriver driver;
	public  PageObjectManager(WebDriver ldriver) {
		this.driver=ldriver;
		
	}
  
	/*public AmazonHomePage amzhp;
	
	public AmazonHomePage getamzhp() {
      if(amzhp==null) {
    	  amzhp=new AmazonHomePage(driver);
      }
	return amzhp;
	}*/
	
	public AdactinHomePage adhp;
	public AdactinHomePage getadhp() {
		
		if (adhp==null) {
		adhp=new AdactinHomePage(driver);	
		}
		return adhp;
		
	}
	
	
}


