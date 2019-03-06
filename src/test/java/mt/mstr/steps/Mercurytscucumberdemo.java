package mt.mstr.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import mt.mstr.config.Config;



public class Mercurytscucumberdemo 
{
	
	
	@When("^user opens \"(.*)\" browser$")
	public String openBrowser(String browsernm)
	{
		if(browsernm.equalsIgnoreCase("chrome"))
		{
			System.out.println("In openbrowser method");
			System.setProperty("webdriver.chrome.driver","G:\\Selenium Setup\\setup1\\16122018\\chromedriver_win32 (14)\\chromedriver.exe");
			Config.driver= new ChromeDriver();
			System.out.println("Chrome browser is opened successfully");
			
		}else if(browsernm.equalsIgnoreCase("ie"))
		{
			System.setProperty("webdriver.ie.driver","G:\\Selenium Setup\\setup1\\16122018\\IEDriverServer_x64_3.14.0 (10)\\IEDriverServer.exe");
			Config.driver = new InternetExplorerDriver();
			System.out.println("Internet Explorer browser is opened successfully");
			
		}else
		{
			System.setProperty("webdriver.gecko.driver","G:\\Selenium Setup\\setup1\\16122018\\geckodriver-v0.23.0-win64\\geckodriver.exe");
			Config.driver = new FirefoxDriver();
			System.out.println("Firefox browser is opened successfully");
			
		}
		
		return browsernm;		
	}
	
	
	@And("^user enters the application url \"(.*)\"$")
	public String enterApplication(String url)
	{
		Config.driver.get(url);
		return url;
		
	}
	
	@And("^user waits \"(.*)\" seconds to load login page of Mercury Tours application$")
	public void waittillLoginpageloaded(int timeout)
	{
		Config.driver.manage().timeouts().pageLoadTimeout(timeout, TimeUnit.SECONDS);
		System.out.println("Login page is loaded successfully");
	}
	
	@And("^user maximizes the browser$")
	public void maximizeBrowser()
	{
		Config.driver.manage().window().maximize();
		System.out.println("Maximize chrome browser is successfully");
	}
	
	@Then("^user access on login page of Mercury Tours application$")
	public void verifyLoginpage()
	{
		String act_title=Config.driver.getTitle();
		if(act_title.equalsIgnoreCase("Welcome: Mercury Tours"))
		{
			System.out.println("User is on login page");
		}		
		
	}
	
	@Given("^user access login page of Mercury Tours application$")
	public void VerifyLoginimg()
	{
		
		boolean act_flag1=Config.driver.findElement(By.xpath("//img[@src='/images/featured_destination.gif']")).isDisplayed();
		boolean exp_flag1=true;
		Assert.assertEquals(exp_flag1, act_flag1);
		
		System.out.println("The expected login page image is displayed:"+act_flag1);
		
	}
	
	@When("^user enters \"(.*)\" as username$")
	public void EnterUserName(String username)
	{
		Config.driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(username);
		System.out.println("Username is entered as :"+username);
	}
	
	@And("^user enters \"(.*)\" as password$")
	public void EnterPassword(String password)
	{
	Config.driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	System.out.println("Password is entered as:"+password);
	}
	
	@And("^user clicks on Sign in button$")
	public void ClickonSignIn() throws InterruptedException
	{
		
		Config.driver.findElement(By.xpath("//input[@name='login']")).click();
		Thread.sleep(30000);
	}
	
	@Then("^user is on Flight Finder page$") 
	public void VerifyFlightFinderpage() throws InterruptedException
	{
		Thread.sleep(5000);
		boolean act_flag2= Config.driver.findElement(By.xpath("//img[@src='/images/masts/mast_flightfinder.gif']")).isDisplayed();
		boolean exp_flag2=true;
		Assert.assertEquals(exp_flag2, act_flag2);
		System.out.println("The flightfinder page is dispalyed"+act_flag2);
	}
	
	@When("^user clicks on Signoff link$")
	public void ClickonSignOff()
	{
		Config.driver.findElement(By.linkText("SIGN-OFF")).click();
	}
	
	@Then("^user is on Sign on page$")
	public void VerifySignonpage() throws InterruptedException
	{
		Thread.sleep(5000);
		boolean act_flag3=Config.driver.findElement(By.xpath("//img[@src='/images/masts/mast_signon.gif']")).isDisplayed();
		boolean exp_flag3=true;
		Assert.assertEquals(exp_flag3, act_flag3);
		System.out.println(act_flag3);
		System.out.println("Signon page is displayed"+act_flag3);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
