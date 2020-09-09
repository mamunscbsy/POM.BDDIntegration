package pages;


import cucumber.api.java.en.When;
import wrapper.ProjectSpecificWrapper;

public class CreateLeadPage extends ProjectSpecificWrapper{
	
	
	@When("enter the company as (.*)")//if you pass any data as argument use (.*) in place of Hard code like companyname as "TCS"
	public CreateLeadPage enterCompanyName(String cName) {
		enterById("createLeadForm_companyName", cName);
		return this;
	}
	@When("enter the first name as (.*)")
	public CreateLeadPage enterFirstName(String fName) {
		enterById("createLeadForm_firstName", fName);
		return this;
		
	}
	@When("enter the last name as (.*)") 
	public CreateLeadPage enterLastNmae(String lNmae) {
		enterById("createLeadForm_lastName", lNmae);
		return this;
	}
	
	
	  @When("choose source as (.*)") 
	  public CreateLeadPage chooseSource(String source) { 
		  selectVisibileTextById("createLeadForm_dataSourceId", source);
	  return this; }
	 
	 
		@When("click the create lead button")
	public ViewLeadPage ClickCreateLead() {
		clickByXpath("//input[@name='submitButton']");
		return new ViewLeadPage();
	}
	}
