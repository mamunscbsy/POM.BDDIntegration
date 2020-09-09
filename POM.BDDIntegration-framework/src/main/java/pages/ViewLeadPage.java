package pages;

import cucumber.api.java.en.Then;
import wrapper.ProjectSpecificWrapper;

public class ViewLeadPage extends ProjectSpecificWrapper{
	@Then("verify firstname (.*)")
public ViewLeadPage verify_firstname(String firstName) {
	verifyTextByXpath("//input[@name='submitButton']", firstName);
	return this;
	
}	
	

}
