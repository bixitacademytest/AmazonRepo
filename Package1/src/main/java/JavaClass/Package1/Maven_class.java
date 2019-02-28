package JavaClass.Package1;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.opera.OperaDriver;

public class Maven_class {

	 static WebDriver driver;
	public static WebDriver getDriver(String browser)
	{
		
		if(browser.equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","C:/Users/rekha/OneDrive/Desktop/My java prgs/Package1/src/chromedriver.exe");
			driver=new ChromeDriver();
			
		}
		else if(browser.equals("firefox")){
			System.setProperty("webdriver.gecko.driver","C:/Users/rekha/OneDrive/Desktop/My java prgs/Package1/src/geckodriver.exe");
			driver=new FirefoxDriver();
		}
		else if(browser.equals("opera")){
			System.setProperty("webdriver.opera.driver","C:/Users/rekha/OneDrive/Desktop/My java prgs/Package1/src/operadriver.exe");
			driver=new OperaDriver();
		}
		else if(browser.equals("IE")){
			System.setProperty("webdriver.ie.driver","C:/Users/rekha/OneDrive/Desktop/My java prgs/Package1/src/IEDriverServer.exe");
			driver=new InternetExplorerDriver();
		}
		driver.get("https://www.facebook.com/");
		driver.manage().window().maximize();
		return driver;
	}
	
	
	
}
