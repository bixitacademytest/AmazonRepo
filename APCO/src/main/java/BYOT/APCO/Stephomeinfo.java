package BYOT.APCO;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Stephomeinfo extends Browserlaunch{
	WebDriver dri=getDriver("chrome");
		@Given("^Select the program name$")
	public void select_the_program_name() throws Throwable {
		WebElement prg=dri.findElement(By.id("j_id0:form:j_id56"));
	  	   Select s=new Select(prg);
	   s.selectByIndex(3);
		}

	@Then("^Select the offer code$")
	public void select_the_offer_code() throws Throwable {
		WebElement offer=dri.findElement(By.id("j_id0:form:j_id58"));
	  	   Select s=new Select(offer);
	   s.selectByIndex(1);
	}

	@Then("^Select My home is$")
	public void select_My_home_is() throws Throwable {
		WebElement home=dri.findElement(By.id("j_id0:form:homeIshomeType"));
	  	   Select s=new Select(home);
	   s.selectByIndex(3);;
	}

	@Then("^Select I heat my home with$")
	public void select_I_heat_my_home_with() throws Throwable {
		WebElement heat=dri.findElement(By.id("j_id0:form:homeFuelheat"));
	  	   Select s=new Select(heat);
	   s.selectByIndex(3);
	}

	@Then("^enter my home was built in$")
	public void enter_my_home_was_built_in() throws Throwable {
	   dri.findElement(By.id("j_id0:form:j_id64")).sendKeys("2004");
	}

	@Then("^Select my home as central A/c$")
	public void select_my_home_as_central_A_c() throws Throwable {
		WebElement ac=dri.findElement(By.id("j_id0:form:j_id66"));
	  	   Select s=new Select(ac);
	   s.selectByValue("Yes");
	}
	   @Then("^Select my home has wifi as$")
	public void select_my_home_has_wifi_as() throws Throwable {
		WebElement wifi=dri.findElement(By.id("j_id0:form:homeWiFi"));
	  	   Select s=new Select(wifi);
	   s.selectByValue("Yes");;
	}

	@Then("^click on next$")
	public void click_on_next() throws Throwable {
	   dri.findElement(By.xpath("//a[@class=' btn btn_next pull-right']")).click();
	   Thread.sleep(5000);
	}

	@Then("^user is redirected to thermostat information page$")
	public void user_is_redirected_to_thermostat_information_page() throws Throwable {
		/*WebElement s=dri.findElement(By.xpath("//*[text(),'Step 2 of 3 : Bring Your own thermostat registration']"));
	    if(s.isDisplayed())
	    {
	    	System.out.println("user is on the correct page");
	    }
	    else
	    {
	    	System.out.println("User is on incorrect page");
	    }  */
	}

}
