package com.org.sample.MyAutomation;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BrowserLauncher{
	@FindBy(name="email")
	private WebElement UserName;

	@FindBy(name="pass")
	private WebElement TxtPass;
	
	@FindBy(id="u_0_2")
	private WebElement button;
	
	public String getUserName() {
		return UserName.getAttribute("value");
	}
	public void setUserName(String userName) {
		this.UserName.sendKeys(userName);
	}
	public String getTxtPass() {
		return TxtPass.getAttribute("value");
	}
	public void setTxtPass(String txtPass) {
		this.TxtPass.sendKeys(txtPass);
	}
	public WebElement getButton() {
		return button;
	}
	public void setButton(WebElement button) {
		this.button = button;
	}
	public LoginPage() {
		PageFactory.initElements(driver, this);
	}
	
}
