package JavaClass.Amazon1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Browser_launch {
	protected static WebDriver dri;
	public static WebDriver getDriver(String driver)
	{
if(dri==null)
{
	if (driver.equals("chrome"))
	{
		System.setProperty("webdriver.chrome.driver","C:/Users/rekha/OneDrive/Desktop/My java prgs/Amazon/drivers/chromedriver.exe");
		 dri=new ChromeDriver();
	}
	if (driver.equals("firefox"))
	{
		System.setProperty("webdriver.gecko.driver","C:/Users/rekha/OneDrive/Desktop/My java prgs/Amazon/drivers/geckodriver.exe");
		dri=new FirefoxDriver();
	}
	
			}

return dri;
}
}
