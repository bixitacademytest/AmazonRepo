//package datepicker;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Confirmalertex {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\rekha\\OneDrive\\Desktop\\My java prgs\\Selenium\\drivers\\chromedriver.exe");
		WebDriver d=new ChromeDriver();
        d.get("https://www.toolsqa.com/handling-alerts-using-selenium-webdriver/");
        d.findElement(By.xpath("//button[text()='Confirm Pop up']")).click();
        Thread.sleep(10000);
                Alert a=d.switchTo().alert();
                Thread.sleep(3000);     
        a.accept();       
	}

}
