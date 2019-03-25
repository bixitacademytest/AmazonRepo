package BYOT.APCO;

import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Browserlaunch {
	protected static WebDriver dri;
	public static WebDriver getDriver(String browser)
	{
if(dri==null)
{
	if (browser.equals("chrome"))
	{
		System.setProperty("webdriver.chrome.driver","C:/Users/rekha/eclipse-workspace/Cucumber/drivers/chromedriver.exe");
		 dri=new ChromeDriver();
	}
	if (browser.equals("firefox"))
	{
		System.setProperty("webdriver.gecko.driver","C:/Users/rekha/eclipse-workspace/Cucumber/drivers/geckodriver.exe");
		dri=new FirefoxDriver();
	}
	
			}

return dri;
}
}
