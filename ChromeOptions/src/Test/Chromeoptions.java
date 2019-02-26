package Test;
import org.openqa.selenium.chrome.ChromeOptions;


public class Chromeoptions {
	public static ChromeOptions Chrome_Options(){
		ChromeOptions option=new ChromeOptions();
		option.addArguments("--start-maximized","--ignore-certificate-errors","--disable-popup-blocking","--incognito","--disable-infobar");
		System.out.println("Chrome Desired cap");
		return option;
		
	}
}
