package JavaClass.Amazon1;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepsignup {
	static WebDriver driver;
	@Given("^Launch the browser and Enter amazon\\.com$")
	public void launch_the_browser_and_Enter_amazon_com() throws Throwable {
		 System.setProperty("webdriver.chrome.driver","C:/Users/rekha/OneDrive/Desktop/My java prgs/Amazon/drivers/chromedriver.exe");
		    driver=new ChromeDriver();
		    driver.get("https://www.amazon.in/");
		    driver.manage().window().maximize();
	}


	@When("^Move to Sign in$")
	public void move_to_Sign_in() throws Throwable {
		WebElement w=driver.findElement(By.xpath("//a[@id='nav-link-accountList']"));
	   Actions a=new Actions(driver);
	   a.moveToElement(w).build().perform();
	
	}
	@When("^click start here$")
	public void click_start_here() throws Throwable {
	   driver.findElement(By.xpath("//a[@class='nav-a']")).click();
	}

	@Then("^Page is redirecting to create account page$")
	public void page_is_redirecting_to_create_account_page() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);  
	}

	@Given("^User is on create account page$")
	public void user_is_on_create_account_page() throws Throwable {
		
		String s=driver.getTitle();
	    	    if(s.equals("Amazon Registration"))
	    {
	    	System.out.println("user is on create account page");
	    }
	    else
	    {
	    	System.out.println("user is on incorrect page");
	    } 
	}

	@When("^enter the name as \"([^\"]*)\"$")
	public void enter_the_name_as(String arg1) throws Throwable {
	  driver.findElement(By.id("ap_customer_name")).sendKeys(arg1);  
	}

	@When("^enter Email as \"([^\"]*)\"$")
	public void enter_Email_as(String arg1) throws Throwable {
	    driver.findElement(By.id("ap_email")).sendKeys(arg1);
	}

	@When("^enter password as \"([^\"]*)\"$")
	public void enter_password_as(String arg1) throws Throwable {
	    driver.findElement(By.id("ap_password")).sendKeys(arg1);
	}

	@When("^Re-enter password as \"([^\"]*)\"$")
	public void re_enter_password_as(String arg1) throws Throwable {
	    driver.findElement(By.id("ap_password_check")).sendKeys(arg1);
	}

	@When("^Click on create your amazon account$")
	public void click_on_create_your_amazon_account() throws Throwable {
	   driver.findElement(By.id("continue")).click();
	}

	@Then("^user will be redirecting to verify email address page$")
	public void user_will_be_redirecting_to_verify_email_address_page() throws Throwable {
		
	}

	@Given("^User is on confirmation page$")
	public void user_is_on_confirmation_page() throws Throwable {
		String s=driver.getTitle();
	    if(s.equals("Please confirm your identity"))
{
	System.out.println("user is on verify identity page");
}
else
{
	System.out.println("user is on incorrect page");
}     
	}

	@When("^user enters the verification code as \"([^\"]*)\"$")
	public void user_enters_the_verification_code_as(String arg1) throws Throwable {
	   driver.findElement(By.xpath("//input[@name='code']")).sendKeys(arg1);
	}

	@Then("^Click on verify button$")
	public void click_on_verify_button() throws Throwable {
	    driver.findElement(By.xpath("//input[@type='submit']")).click();
	}


}
