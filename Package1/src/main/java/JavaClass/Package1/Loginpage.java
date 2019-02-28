package JavaClass.Package1;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Loginpage extends Maven_class {

 @FindBy(name="email")
 private WebElement UserName;
 
 @FindBy(name="pass")
 private WebElement Pass;
 
 @FindBy(id="loginbutton")
 private WebElement loginBtn;
 
 
 public String getUserName() {
	return UserName.getAttribute("value");
}
public void setUserName(String getUserName) {
	this.UserName.sendKeys(getUserName);;
}

public String getPass() {
	return Pass.getAttribute("value");
}
public void setPass(String getPass) {
	this.Pass.sendKeys(getPass);;
}

public WebElement getLoginBtn() {
	return loginBtn;
}
public void setLoginBtn(WebElement loginBtn) {
	this.loginBtn = loginBtn;
}

 Loginpage()
 {
	 PageFactory.initElements(driver,this);
 }
}
