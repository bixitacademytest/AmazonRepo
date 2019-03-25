package BYOT.APCO;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features",glue="BYOT.APCO",plugin={"pretty","html:rekha/report/cucumber"},monochrome=true,tags={"@Second"})
public class TestRunner {

}
