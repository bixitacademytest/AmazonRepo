package BYOT.APCO;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepbyot extends Browserlaunch{
	WebDriver dri=getDriver("chrome");
	@Given("^Launch the browser$")
	public void launch_the_browser() throws Throwable {
		dri.manage().window().maximize();
		dri.get("https://apcova-uat.dsmtracker.com/");
	}

	@When("^Clicking on BYOT tab$")
	public void clicking_on_BYOT_tab() throws Throwable {
		  dri.findElement(By.xpath("//a[@href='/bring-your-own-thermostat']")).click();
	}

	@Then("^user is redirected to BYOT$")
	public void user_is_redirected_to_BYOT() throws Throwable {
		String s=dri.getCurrentUrl();
	    if(s.equals("https://apcova-uat.dsmtracker.com/bring-your-own-thermostat"))
	    {
	    	System.out.println("user is on the correct page");
	    }
	    else
	    {
	    	System.out.println("User is on incorrect page");
	    }
	}

	@Then("^click on Enroll button$")
	public void click_on_Enroll_button() throws Throwable {
		  dri.findElement(By.xpath("//button[@id='ccbut2']")).click();
	}

	@Then("^user is landing on customer information page$")
	public void user_is_landing_on_customer_information_page() throws Throwable {
		 String s=dri.getTitle();
		    if(s.equals("Appalachian Power| Login or Register"))
		    {
		    	System.out.println("user is on the correct page");
		    }
		    else
		    {
		    	System.out.println("User is on incorrect page");
		    }  
	}

	


}
