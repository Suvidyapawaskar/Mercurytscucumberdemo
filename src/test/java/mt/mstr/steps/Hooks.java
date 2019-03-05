package mt.mstr.steps;

import java.io.File;
import java.io.IOException;
import java.util.Set;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import mt.mstr.config.Config;

public class Hooks 
{

@Before
public void getallCookies()
{
	/*Set<Cookie> cookies=Config.driver.manage().getCookies();
	for(Cookie cookie:cookies)
	{
		System.out.println("The cookie name is:."+cookie.getName());
	}*/
	System.out.println("In getallCookies method under Before");
		
}

@After
public void captureScreenshot() throws IOException
{
	/*File src= ((TakesScreenshot)Config.driver).getScreenshotAs(OutputType.FILE);
	FileUtils.copyFileToDirectory(src, new File("F:\\Suvidya_data\\Java_Selenium_Practice\\Mercurytscucumberdemo\\src\\test\\resources\\Screenshots\\"));*/
	System.out.println("In captureScreenshot method under @After");
}




}
