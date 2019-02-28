package JavaClass.Package1;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

public class Inputvalue extends Maven_class
{
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
	l.setUserName("rekhasampath1@gmail.com");
	
	Assert.assertEquals("rekhasampath1@gmail.com", l.getUserName());
	l.setPass("rest@123");
	Assert.assertEquals("rest@123",l.getPass());
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
