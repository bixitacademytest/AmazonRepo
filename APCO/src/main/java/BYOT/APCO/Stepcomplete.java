package BYOT.APCO;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Stepcomplete extends Browserlaunch {
	WebDriver dri=getDriver("chrome");
	String s=dri.getWindowHandle();
	@Given("^When user enters the uname as \"([^\"]*)\"$")
	public void when_user_enters_the_uname_as(String arg1) throws Throwable {
			for (String s1 : dri.getWindowHandles()) {
		if(!s1.equals(s))
		{
			dri.switchTo().window(s1);
			Thread.sleep(4000);
			dri.manage().window().maximize();
			 Thread.sleep(3000);
					}
			}
		dri.findElement(By.xpath("//input[@data-test='input-email']")).sendKeys(arg1);
	}

	@Given("^enters the pwd as \"([^\"]*)\"$")
	public void enters_the_pwd_as(String arg1) throws Throwable {
		dri.findElement(By.id("ember437")).sendKeys(arg1);
	}

	@Given("^click on signup$")
	public void click_on_signup() throws Throwable {
	    dri.findElement(By.id("ember442")).click();
	}

	@Given("^click on close$")
	public void click_on_close() throws Throwable {
		for (String s1 : dri.getWindowHandles()) {
			if(!s.equals(s1))
			{
				 dri.close();
			}
					}
	   dri.switchTo().window(s);
	}

	@Given("^user is redirected to thermostat registartion page$")
	public void user_is_redirected_to_thermostat_registartion_page() throws Throwable {
		
	}
	@Then("^Click on next$")
	public void click_on_next() throws Throwable {
	   dri.findElement(By.xpath("//a[text()='Next']")).click();
	   Thread.sleep(25000);
	}

	@Then("^user is redirected to confirmation page$")
	public void user_is_redirected_to_confirmation_page() throws Throwable {
		WebElement s=dri.findElement(By.xpath("//*[text()='Step 3 of 3 : Thank you for completing your Bring Your Own Thermostat Enrollment']"));
	    if(s.isDisplayed())
	    {
	    	System.out.println("user is on the correct page");
	    }
	    else
	    {
	    	System.out.println("User is on incorrect page");
	    }  
	}


}
