package pages;

import cucumber.api.java.en.When;
import wrapper.ProjectSpecificWrapper;

public class MyLeadsPage extends ProjectSpecificWrapper {
	
	@When("click Create Lead link")
	public CreateLeadPage clickCreateLeadLink() {
		clickByLinkText("Create Lead");
		return new CreateLeadPage();
	}

}
