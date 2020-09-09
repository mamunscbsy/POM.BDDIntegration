$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/doc.feature");
formatter.feature({
  "name": "Automate LeafTaps Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "enter username as \u003cusername\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "enter password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.step({
  "name": "click the logout button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "demosalesmanager",
        "crmsfa"
      ]
    },
    {
      "cells": [
        "DemoCSR",
        "crmsfa"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.enterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.clickLogOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC001_Login and Logout",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "enter username as DemoCSR",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.enterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPage.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.clickLogOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC002_ CreateLead",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "enter username as demosalesmanager",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPage.enterUserName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as crmsfa",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPage.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click CRMSFA",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.click_CRMSFA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Leads link",
  "keyword": "And "
});
formatter.match({
  "location": "MyHomePage.clickLeadsLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Create Lead link",
  "keyword": "When "
});
formatter.match({
  "location": "MyLeadsPage.clickCreateLeadLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the company as TCS",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterCompanyName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the first name as Gopi",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter the last name as J",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.enterLastNmae(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the create lead button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateLeadPage.ClickCreateLead()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify firstname Gopi",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewLeadPage.verify_firstname(String)"
});
formatter.result({
  "status": "passed"
});
});