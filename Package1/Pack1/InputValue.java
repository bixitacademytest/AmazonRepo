package Pack1;

import org.testng.annotations.Test;

import JavaClass.Package1.Inputvalue;
import JavaClass.Package1.Loginpage;
import JavaClass.Package1.Maven_class;

import org.testng.annotations.BeforeClass;
import org.testng.Assert;
import org.testng.annotations.AfterClass;

public class InputValue {
	static Maven_class m;
	Loginpage l;
	Inputvalue i;
	@BeforeClass
	public static void launch()
	{
	driver=m.getDriver("firefox");
		}
	@Test
	public void validate() throws InterruptedException
	{
	l=new Loginpage();
	i=new Inputvalue();
	l.setGetUserName("rekhasampath1@gmail.com");
	
	Assert.assertEquals("rekhasampath1@gmail.com", l.getGetUserName());
	l.setGetPass("rest@123");
	Assert.assertEquals("rest@123",l.getGetPass());
	l.getLoginBtn().click();
	Thread.sleep(10000);
	}
	@AfterClass
	public static void close() throws InterruptedException
	{
		Thread.sleep(10000);
		driver.close();
	}
}
