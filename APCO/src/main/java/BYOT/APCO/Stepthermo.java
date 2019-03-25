package BYOT.APCO;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Stepthermo extends Browserlaunch {
	WebDriver dri=getDriver("chrome");
	@Given("^Select the thermostat manufacturer$")
	public void select_the_thermostat_manufacturer() throws Throwable {
		WebElement therm=dri.findElement(By.name("j_id0:form:j_id70"));
	  	   Select s=new Select(therm);
	   s.selectByIndex(1); 
	}

	@Given("^Select how many thermostats are you registering$")
	public void select_how_many_thermostats_are_you_registering() throws Throwable {
		WebElement therm1=dri.findElement(By.name("j_id0:form:j_id73"));
	  	   Select s=new Select(therm1);
	   s.selectByIndex(1); 
	}

	@Then("^Select the Thermostat model$")
	public void select_the_Thermostat_model() throws Throwable {
		WebElement therm2=dri.findElement(By.name("j_id0:form:j_id75:0:j_id77"));
	  	   Select s=new Select(therm2);
	   s.selectByIndex(1); 
	}

	@Then("^Enter the valid serial number$")
	public void enter_the_valid_serial_number() throws Throwable {
	   dri.findElement(By.name("j_id0:form:j_id75:0:j_id80")).sendKeys("15AA01AC38170PU3");
	}

	@Then("^Check I agree$")
	public void check_I_agree() throws Throwable {
	    dri.findElement(By.xpath("//i[@class='cr-icon glyphicon glyphicon-ok']")).click();
	}

	@Then("^user clicks on Register my thermostats$")
	public void user_clicks_on_Register_my_thermostats() throws Throwable {
	   dri.findElement(By.xpath("//a[text()='Register my thermostat(s)']")).click();
	   Thread.sleep(5000);
	}

	@Then("^user is redirected to particular thermostat registration url$")
	public void user_is_redirected_to_particular_thermostat_registration_url() throws Throwable {
		String s=dri.getCurrentUrl();
	    if(s.equals("https://home.nest.com/login/?next=%2Fenergy-partner-enrollment%3Fid%3D8e9c496e-8ac4-4f06-82fe-bfae427cf383"))
	    {
	   	    	System.out.println("user is on the correct page");
	    }
	    else
	    {
	    	System.out.println("User is on incorrect page");
	    }  
	}


}
