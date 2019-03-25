package JavaClass.Amazon1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepsignin_search extends Browser_launch {
	WebDriver dri=getDriver("chrome");
	@Given("^Launch the browser and Enter the URL$")
	public void launch_the_browser_and_Enter_the_URL() throws Throwable {
		dri.get("https://www.amazon.in/");
		dri.manage().window().maximize();
			}

	@When("^click on sign in$")
	public void click_on_sign_in() throws Throwable {
		WebElement w=dri.findElement(By.xpath("//a[@data-nav-ref='nav_ya_signin']"));
		   Actions a=new Actions(dri);
		   a.moveToElement(w).build().perform();
	   dri.findElement(By.xpath("//span[@class='nav-action-inner']")).click();
	}

	@Then("^User is on SignIn page$")
	public void user_is_on_SignIn_page() throws Throwable {
		String s=dri.getTitle();
	    if(s.equals("Amazon Sign In"))
{
	System.out.println("user is on sign in page");
}
else
{
	System.out.println("user is on incorrect page");
} 
	}

	@When("^user enter the email as \"([^\"]*)\"$")
	public void user_enter_the_email_as(String arg1) throws Throwable {
		dri.findElement(By.id("ap_email")).sendKeys(arg1);
		dri.findElement(By.id("continue")).click();
		Thread.sleep(2000);
	}

	@When("^Enter the password as \"([^\"]*)\"$")
	public void enter_the_password_as(String arg1) throws Throwable {
	    dri.findElement(By.id("ap_password")).sendKeys(arg1);
	    	}

	@Then("^User logged in successfully$")
	public void user_logged_in_successfully() throws Throwable {
	   dri.findElement(By.id("signInSubmit")).click();
	}

	@When("^user searches the product$")
	public void user_searches_the_product() throws Throwable {
		dri.findElement(By.id("twotabsearchtextbox")).sendKeys("vivo");
		dri.findElement(By.xpath("//input[@value='Go']")).click();
	}

	@Then("^product is to be displayed$")
	public void product_is_to_be_displayed() throws Throwable {
		String s=dri.getTitle();
	    if(s.equals("Amazon.in: vivo"))
{
	System.out.println("user is on iphone search");
}
else
{
	System.out.println("user is on incorrect page");
}     
	}


}
