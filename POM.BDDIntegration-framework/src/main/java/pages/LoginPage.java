package pages;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import wrapper.ProjectSpecificWrapper;

public class LoginPage extends ProjectSpecificWrapper{
	
	@Given("enter username as (.*)")
	public LoginPage enterUserName(String uName) {
		enterByName("USERNAME", uName);
		return this;
		
	}
	@Given("enter password as (.*)")
	public LoginPage enterPassword(String pwd) {
		enterById("password", pwd);
		return this;
	}
	@When("click the login button")
	public HomePage clickLogin() {
		clickByXpath("//input[@value='Login']");
		return new HomePage();
	}
	@Then("close browser")
	public void close_browser() {
	    driver.quit();
	}
	
}
