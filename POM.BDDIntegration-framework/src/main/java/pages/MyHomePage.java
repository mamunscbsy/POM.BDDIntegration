package pages;

import cucumber.api.java.en.Given;
import wrapper.ProjectSpecificWrapper;

public class MyHomePage extends ProjectSpecificWrapper{
	
	@Given("click Leads link")
	public MyLeadsPage clickLeadsLink() {
		clickByLinkText("Leads");
		return new MyLeadsPage();
	}

}
