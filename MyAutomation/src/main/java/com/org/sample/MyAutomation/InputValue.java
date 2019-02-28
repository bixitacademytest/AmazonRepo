package com.org.sample.MyAutomation;

import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class InputValue extends BrowserLauncher{
	static BrowserLauncher browserConfig;
	LoginPage loginDetails;
	InputValue userInput;
	@BeforeClass
	public static void launch(){
		driver=BrowserLauncher.getDriver("chrome", "https://www.facebook.com");
	}
	@Test
	public void validate(){
		loginDetails=new LoginPage();
		userInput=new InputValue();
		loginDetails.setUserName("arunrajrat");
		Assert.assertEquals("arunrajrat", loginDetails.getUserName());
		loginDetails.setTxtPass("arunrajrat");
		Assert.assertEquals("arunrajrat", loginDetails.getTxtPass());
		loginDetails.getButton().click();
	}
	@AfterClass
	public static void close() throws InterruptedException{
		Thread.sleep(10000);
		driver.close();
	}
	
}
