package com.cucumber.runner;

import java.io.File;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.helper.FileReaderManager;
import com.selenium.baseclass.BaseClass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import gherkin.formatter.Reporter;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin= {"com.cucumber.listener.ExtentCucumberFormatter:src\\test\\resource\\com\\selenium\\reports\\extentreports.html",
				"pretty",
				"html:src\\test\\resource\\com\\selenium\\reports\\",
				"json:src\\test\\resource\\com\\selenium\\reports\\report.json",
				"junit:src\\test\\resource\\com\\selenium\\reports\\report.xml"
		},
		features = "src\\test\\java\\com\\cucumber\\adactinfeature\\",
glue = "com.cucumber.adactinstepdefinition", dryRun = false,
strict = true, monochrome = true,
tags= {"@demo","@tc_10"})
public class TestRunner {
	public static WebDriver driver;

	@org.junit.BeforeClass
	public static void setup() throws Exception, Throwable {
		String browser = FileReaderManager.getInstance().getCr().getBrowser();
		driver = BaseClass.browserLaunch(browser);

	}

	@org.junit.AfterClass
	public static void tearDown() {
		//driver.quit();
		com.cucumber.listener.Reporter.loadXMLConfig(new File("C:\\Users\\Admin\\eclipse-workspace\\AdactinAutomationPractice\\src\\test\\resource\\com\\resource\\extent-config.xmlfileforextentreport"));
		
	}

}
