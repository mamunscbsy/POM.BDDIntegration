Feature: Automate LeafTaps Application

Scenario Outline: TC001_Login and Logout 
#Given Launch chrome browser and load url 
	Given enter username as <username>
	And enter password as <password>
	When click the login button 
	#Then its navigated HomePage 
	Then click the logout button
	#And close browser
	
Examples:
	|username|password|
	|demosalesmanager|crmsfa|
	|DemoCSR|crmsfa|
	

Scenario: TC002_ CreateLead 

	#Given Launch chrome browser and load url 
	Given enter username as demosalesmanager 
	And enter password as crmsfa 
	And click the login button 
	And click CRMSFA 
	And click Leads link 
	When click Create Lead link 
	And enter the company as TCS 
	And enter the first name as Gopi 
	And enter the last name as J 
	#And choose source as Website
	And click the create lead button 
	# its navigated ViewLeadPage 
	Then verify firstname Gopi
	# And close browser 




