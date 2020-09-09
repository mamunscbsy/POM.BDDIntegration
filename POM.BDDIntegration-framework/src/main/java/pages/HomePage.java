package pages;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import wrapper.ProjectSpecificWrapper;
public class HomePage extends ProjectSpecificWrapper{
	
	@Then("click the logout button")
	public HomePage clickLogOut() {
		clickByClassName("decorativeSubmit");
		return this;
	}
		  @Given("click CRMSFA") 
	  public MyHomePage click_CRMSFA() {
	  clickByLinkText("CRM/SFA"); 
	  return new MyHomePage(); }
	}
