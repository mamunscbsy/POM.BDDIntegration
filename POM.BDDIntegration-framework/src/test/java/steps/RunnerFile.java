package steps;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import wrapper.ProjectSpecificWrapper;
@CucumberOptions(features="src/test/java/features",
		//@CucumberOptions(features="src/test/java/features/doc.feature",
			glue="pages",
			//plugin = {"html:reports"},// for generate reports
//			strict = false,
//			dryRun = false,
			monochrome = true
			//tags ={"@functional"}
			//snippets = SnippetType.CAMELCASE
			)
public class RunnerFile extends ProjectSpecificWrapper {
}
