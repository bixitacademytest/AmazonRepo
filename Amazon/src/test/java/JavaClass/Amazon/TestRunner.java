package JavaClass.Amazon;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features",glue="JavaClass.Amazon1",plugin={"pretty","html:rekha/report/cucumber"},monochrome=true,tags={"@First"})
public class TestRunner {

}
