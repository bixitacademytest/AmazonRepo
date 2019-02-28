package com.org.sample.MyAutomation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserLauncher {
	static WebDriver driver;
	public static WebDriver getDriver(String browser,String url){
		if(browser.equals("chrome")){
			System.setProperty("webdriver.chrome.driver","C:/Users/ArunPrasath/workspace/MyAutomation/src/test/chromedriver.exe");
			driver=new ChromeDriver();
		}
		else if(browser.equals("firefox")){
			System.setProperty("webdriver.gecko.driver","C:/Users/ArunPrasath/workspace/MyAutomation/src/test/geckodriver.exe");
			driver=new ChromeDriver();			
		}
		driver.get(url);
		driver.manage().window().maximize();
		return driver;
	}
}
