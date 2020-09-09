package testCases;

import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import pages.LoginPage;
import wrapper.ProjectSpecificWrapper;

public class TC002_CreateLead extends ProjectSpecificWrapper{
	
	@BeforeTest
	public void setDat() {
		excelfile = "TC002_CreateLead";
				
	}
	
	@Test(dataProvider = "getData")
	public void createLead(String uName, String pwd,String cName, String fName, String lName, String source) {
		
		new LoginPage()
		.enterUserName(uName)
		.enterPassword(pwd)
		.clickLogin()
		.click_CRMSFA()
		.clickLeadsLink()
		.clickCreateLeadLink()
		.enterCompanyName(cName)
		.enterFirstName(fName)
		.enterLastNmae(lName)
		.chooseSource(source)
		.ClickCreateLead();
			
	}

}
