package org.stepdefinition;

import com.github.dockerjava.api.model.HealthCheck;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.And;
import io.cucumber.java.en_scouse.An;
import net.bytebuddy.pool.TypePool;
import org.apache.http.cookie.ClientCookie;
import org.apache.log4j.Logger;
//import org.apache.poi.xwpf.usermodel.BreakType;
import org.apache.velocity.runtime.directive.contrib.For;
import org.base.Global;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.pagemanager.PageObjectManager;
import org.testng.Assert;

import com.aventstack.extentreports.GherkinKeyword;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
//import sun.jvm.hotspot.debugger.Page;
//import sun.jvm.hotspot.debugger.Page;

import javax.swing.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class Steps extends Global {
    public static Logger log;
    public static WebDriver driver;
    public static List<String> Contactlist, Comparelist;


    //	@Given("Launch the url")
//	public void launch_the_url() {
//		driver = getDriver();
//		maximizeWindow();
//		implicitWait();
//		launchURL(readPropertyFileData().getProperty("url"));
//	}
    @Given("Launch the url")
    public void launch_the_url() throws Throwable {
        driver = getDriver();
        maximizeWindow();
        implicitWait();
        launchURL(ReadDatafromJson("Contact_Name", "url"));
    }

    @When("Click On First Reverify Link In Sales Intel Orchestration Site")
    public void click_On_First_Reverify_Link_In_Sales_Intel_Orchestration_Site() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().getFirstReverifyLink());
        Thread.sleep(2000);
    }



//    @Given("Launch the url")
//    public void launch_the_url1() throws Throwable{
//        driver=getDriver();
//        maximizeWindow();
//        implicitWait();
//        launchURL(ReadDatafromJson("Contact_Name","url1"));
//    }


//
//	@When("Enter Valid Username")
//	public void i_enter_the_username() throws Throwable {
//		log = readLog4jData();
//		log.info("User is navigate to Salesforce site");
//		enterData(PageObjectManager.getInstance().getLoginPage().getUserName(),
//				readPropertyFileData().getProperty("UserName"));
//		log.info("User enter the correct username");
//	}

    @And("Enter valid Username")
    public void i_enter_the_username() throws Throwable {
        log = readLog4jData();
        log.info("User is navigate to Salesforce site");
        enterData(PageObjectManager.getInstance().getLoginPage().getUserName(), ReadDatafromJson("Contact_Name", "UserName"));
        log.info("User enter the correct username");
        Thread.sleep(3000);
    }

    //	@When("Enter Valid Password")
//	public void i_enter_the_password() throws Throwable {
//		enterData(PageObjectManager.getInstance().getLoginPage().getPassword(),
//				readPropertyFileData().getProperty("Password"));
//		log.info("User enter the correct password");
//	}
    @And("Enter Valid Password")
    public void i_enter_the_password() throws Throwable {
        enterData(PageObjectManager.getInstance().getLoginPage().getPassword(), ReadDatafromJson("Contact_Name", "Password"));
        log.info("User enter the correct password");
        Thread.sleep(3000);
    }

    @And("click on Login button")
    public void i_click_on_login_button() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().getLoginCTA());
        log.info("User is successfully logged in");
        Thread.sleep(3000);
    }

    @When("Click on Create company button")
    public void i_click_on_create_company_button() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().CreateCompany());
        log.info("User clicked on create company button");
        Thread.sleep(3000);
    }

    @And("User click on CreateNewJob Button")
    public void i_click_on_create_new_job_button() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().CreateNewJobButton());
        log.info("User clicked on create new job button");
        Thread.sleep(3000);
    }

    @And("User enter jobname")
    public void i_entered_jobname() throws Throwable {
        enterData(PageObjectManager.getInstance().getLoginPage().getjobname(), ReadDatafromJson("Contact_Name", "JobName"));
        log.info("User enter the jobname");
        Thread.sleep(3000);
    }

    @And("User Select Priority")
    public void i_select_high_priority() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().Highp());
        log.info("User selected High priority");
        implicitWait();
    }

    @And("User select active")
    public void i_select_active_in_company_status() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().Active());
        log.info("user selected active in company status");
    }

    @And("User select Onscreen")
    public void i_select_on_screen_in_activity() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().Onscreen());
        log.info("User selected on screen in activity");
    }

    @And("User Enter Valid Domain Name")
    public void i_enter_valid_domain() throws Throwable {
        enterData(PageObjectManager.getInstance().getLoginPage().DomainName(), ReadDatafromJson("Contact_Name", "Domain_Name"));
        log.info("User entered valid domainname");
    }

    @And("User Enter Country code")
    public void i_enter_valid_counrty_code() throws Throwable {
        enterData(PageObjectManager.getInstance().getLoginPage().CountryCode(), ReadDatafromJson("Contact_Name", "Country_Code"));
        log.info("User entered Country Code");
        Thread.sleep(3000);
    }

    @And("Click on Submit Button")
    public void i_click_on_submit_button() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().Submitbutton());
        log.info("User clicked on Submit button");
        Thread.sleep(25000);
    }

    @And("Click on Refresh button")
    public void i_click_on_refresh_button() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().RefreshButton());
        log.info("User clicked on refresh button");
        Thread.sleep(5000);
    }

    @When("Click on Tasks Tab")
    public void I_Click_on_tasks_tab() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().Tasks());
        log.info("User clicked on Tasks tab");
        Thread.sleep(5000);
    }

    @And("Click on Yes Button")
    public void i_click_on_yes_button() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().YesButton());
        log.info("User clicked on Yes button");
        Thread.sleep(5000);
    }


    @And("Click on AllButton")
    public void i_click_on_all_button() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().Allbutton());
        log.info("User clicked on All button");
        Thread.sleep(5000);
    }

//	@And("Move the Orchestration Website Screen Down")
//	public void I_Scroll_down_Screen() throws Throwable {
//		Thread.sleep(5000);
//		Scrollpup(PageObjectManager.getInstance().getLoginPage().getScrolldown());
//	}
//	@And("Move the Orchestration Website Screen Up")
//	public void I_Scroll_Up_Screen() throws Throwable {
//		Thread.sleep(5000);
//		Scrollpup(PageObjectManager.getInstance().getLoginPage().getScrollup());
//	}

    @And("Click On Browse Button")
    public void I_Click_Browse() throws Throwable {
        Thread.sleep(5000);
        clickButton(PageObjectManager.getInstance().getLoginPage().Choosefile());
        log.info("Click On Browse Button");
    }

    @And("Upload File From Local Directory")
    public void I_Upload_File_Directory() throws Throwable {
        Thread.sleep(5000);
        uploadfilefromlocal("D:\\ReverifyContact\\TestCase1.csv");
        Thread.sleep(5000);
    }

    @And("Download the Uploaded CSV")
    public void I_click_on_download_button() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().DownloadCSV());
        Thread.sleep(3000);
    }

    //////////////////ReveriyContact
    @When("User Click on reverifycontact Button")
    public void i_click_on_reverify_contact() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().ReverifyContact());
        log.info("User clicked on ReverifyContact Button");
        Thread.sleep(2000);
    }

    @When("Enter Contact Id")
    public void i_enter_contact_id() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().ContactID());
    }

    @When("Select linkedin Correct")
    public void I_select_linkedin_correct_true() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().LinkedinCorrect());
    }

    @When("Enter LinkedinUrl")
    public void I_enter_linkedinurl() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().LinkedInUrl());
    }

    @When("Enter First name")
    public void I_Enter_first_name() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().FirstName());
    }

    @When("Enter Last name")
    public void I_enter_last_name() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().LastName());
    }

    @When("Enter Title")
    public void I_enter_title() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().Title());
    }

    @When("Enter Email id")
    public void i_enter_email_id() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().Email());
    }

    @When("Enter CompanyName")
    public void I_enter_companyName() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().CompanyName());
    }

    @When("Enter CompanyDomain")
    public void I_Enter_Company_domain() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().CompanyDomain());
    }

    @When("Enter PersonalEmail")
    public void I_Enter_Personal_Email() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().PersonalEmail());
    }

    @When("Select Is International")
    public void I_Select_is_international() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().IsInternational());
    }

    @When("Enter Tier")
    public void I_enter_tier() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().GetTier());
    }


    @When("Click on the TitleSpreadsheet")
    public void i_click_on_title_spreadsheet() throws Throwable {
        clickButton(PageObjectManager.getInstance().getLoginPage().Spreadsheet());
        log.info("User clicked on titleSpreadsheet");
        Thread.sleep(5000);
    }

//    @Given("Launch the url1")
//    public void launch_the_url1() throws Throwable {
//        driver = getDriver();
//        maximizeWindow();
//        implicitWait();
//        launchURL(ReadDatafromJson("Contact_Name", "url1"));
//    }


    @When("Enter email or phone")
    public void I_enter_gmail() throws Throwable {
        enterData(PageObjectManager.getInstance().getLoginPage().Gmail(), ReadDatafromJson("Contact_Name", "EmailID"));
        log.info("Email is entered");
    }
    @When("Switch To The Parent Window  In Sales Intel Orchestration Site")
    public void switch_To_The_Parent_Window_In_Sales_Intel_Orchestration_Site() {
        String parentWindow = driver.getWindowHandle();
        Set<String> allWindows = driver.getWindowHandles();
        System.out.println(allWindows);
        List<String> list = new ArrayList<String>();
        list.addAll(allWindows);
        driver.switchTo().window(list.get(0));
        System.out.println(driver.getWindowHandle());
        System.out.println("Switched To Parent Window - The Title Of Window is: " + driver.getTitle());
    }


}