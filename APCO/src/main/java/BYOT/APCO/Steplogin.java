package BYOT.APCO;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Steplogin extends Browserlaunch {
	WebDriver dri=getDriver("chrome");
	@Given("^When user enters the username as \"([^\"]*)\"$")
	public void when_user_enters_the_username_as(String arg1) throws Throwable {
	  dri.findElement(By.id("j_id0:j_id1:j_id2:signinform:username")).sendKeys(arg1); 
	}

	@Given("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String arg1) throws Throwable {
		dri.findElement(By.id("j_id0:j_id1:j_id2:signinform:password")).sendKeys(arg1);
	}

	@Then("^User is redirecting to Property information page$")
	public void user_is_redirecting_to_Property_information_page() throws Throwable {
		dri.findElement(By.xpath("//a[@class='next btn-block apco-primary-btn']")).click();
		Thread.sleep(5000);
	}


}
