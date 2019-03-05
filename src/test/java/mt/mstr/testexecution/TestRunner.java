package mt.mstr.testexecution;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin={"pretty","html:target/cucumber","html:target/htmlreports"},
features={"src\\test\\resources\\FeatureCollection"},
glue={"mt.mstr.steps"},
tags={"@SmokeTest"})


public class TestRunner 
{

	

}
