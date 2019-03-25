package JavaClass.Amazon1;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steporderplace extends Browser_launch{
	WebDriver dri=getDriver("chrome");
	@Given("^When user selects the product$")
	public void when_user_selects_the_product() throws Throwable {
				JavascriptExecutor js=(JavascriptExecutor)dri;
		//Thread.sleep(2000);
		WebElement element=dri.findElement(By.xpath("//h2[contains(text(),'Vivo Y91 1816 (Ocean Blue, 2GB RAM, 32GB Storage) with Offers')]"));
		js.executeScript("arguments[0].scrollIntoView(true);",element);
		Thread.sleep(2000);
		js.executeScript("arguments[0].click();",element);
		//Actions a=new Actions(dri);
		//a.moveToElement(element).build().perform();
		//WebElement element1=dri.findElement(By.xpath("//span[contains(text(),'Apple iPhone X (64GB) - Silver')]"));
		//element1.click();
				//js.executeScript("window.scrollBy(0,5000)", driver);
		//js.executeScript("arguments[0].scrollIntoView(true)",element);
		//Thread.sleep(3000);
		//WebElement element1=driver.findElement(By.xpath("//*[text()='Apple iPhone Xs (512GB) - Silver']"));
		//js.executeScript("arguments[0].click();",element);
	 
	}

	@Then("^product description will be displayed$")
	public void product_description_will_be_displayed() throws Throwable {
		WebElement image=dri.findElement(By.xpath("//img[@alt='Vivo Y91 1816 (Ocean Blue, 2GB RAM, 32GB Storage) with Offers']"));
	    if(!image.isDisplayed())
	    {
	    	System.out.println("wrong product selected");
	    }
	    else
	    {
	    	System.out.println("product selected is correct");
	    }
	}

	@When("^clicking on Add to cart$")
	public void clicking_on_Add_to_cart() throws Throwable {
		dri.findElement(By.name("submit.add-to-cart")).click();
	//dri.findElement(By.xpath("//span[@id='submit.add-to-cart']/span[@class='a-button-inner']/input[@id='add-to-cart-button']")).click();
	}

	@Then("^item to be added into the cart$")
	public void item_to_be_added_into_the_cart() throws Throwable {
	    
	}

	@Then("^when click on cart symbol$")
	public void when_click_on_cart_symbol() throws Throwable {
	   
	}

	@Then("^Item added should be in the cart$")
	public void item_added_should_be_in_the_cart() throws Throwable {
	   
	}

	@Then("^click on proceed to pay$")
	public void click_on_proceed_to_pay() throws Throwable {
		dri.quit();
	}


}
