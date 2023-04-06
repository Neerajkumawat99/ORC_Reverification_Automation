package org.pages;

//import jdk.jfr.Enabled;

import net.bytebuddy.asm.Advice;
import org.base.Global;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.RecursiveTask;

public class LoginPage extends Global {

	//	public static String Readuserdata()
//	{
//		String name = readPropertyFileData().getProperty("FirstName1");
//		return name;
//	}
//	public static String name = Readuserdata();
//
//	public static String usernamexpath = "//*[contains(text(),"\"name\"")]";
	@FindBy(xpath = "//*[@placeholder='User Name']")
	private WebElement userName;
	@FindBy(xpath = "//input[@type='password']")
	private WebElement password;
	@FindBy(xpath = "//button[@type='submit']")
	private WebElement loginCTA;
	//Create company
	@FindBy(xpath = "//button[@title='Create Company']")
	private WebElement CreateCompany;

	@FindBy(xpath = "//button[@title='Reverify Contact']")
	private WebElement ReverifyContact;

	@FindBy(xpath = "//button[text()=' Create New Job ']")
	private WebElement CreateNewJobButton;

	@FindBy(xpath = "//*[@placeholder='Job Name']")
	private WebElement getjobname;

	@FindBy(xpath = "//input[@id='express']")
	private WebElement Highp;

	@FindBy(xpath = "//input[@id='active']")
	private WebElement Active;

	@FindBy(xpath = "//input[@id='onscreenentry']")
	private WebElement Onscreen;

	@FindBy(xpath = "//input[@placeholder='Domain Name']")
	private WebElement DomainName;

	@FindBy(xpath = "//input[@placeholder='Country Code']")
	private WebElement CountryCode;

	@FindBy(xpath = "(//button[@type='submit'])[2]")
	private WebElement Submitbutton;

	@FindBy(xpath = "//button[text()='Yes']")
	private WebElement YesButton;

	@FindBy(xpath = "//button[text()='Refresh']")
	private WebElement RefreshButton;

	@FindBy(xpath = "(//input[@type='radio'])[3]")
	private WebElement Allbutton;

	@FindBy(xpath = "(//*[@class='page-link'])[3]")
	private WebElement Scrolldown;

	@FindBy(xpath = "//*[contains(text(),'Task Dashboard')]")
	private WebElement Scrollup;

	@FindBy(xpath = "//*[contains(text(),'Choose File')]")
	private WebElement Choosefile;

	@FindBy(xpath = "(//*[@title='Download Results'])[1]")
	private WebElement DownloadCSV;

	@FindBy(xpath = "//a[@href='/orchestration/tasks']")
	private WebElement Tasks;

	@FindBy(xpath = "//a[@href='https://docs.google.com/spreadsheets/d/15tEJ-Gkd0H_eZ_ndV_fT4beg5Qm9_xLCsQtG6HEVt6w/edit']")
	private WebElement Spreadsheet;

	@FindBy(xpath = "//input[@type='email']")
	private WebElement Gmail;
	public LoginPage() throws Throwable {
		PageFactory.initElements(driver, this);
	}

	public WebElement getUserName() {
		return userName;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLoginCTA() {
		return loginCTA;
	}

	public WebElement CreateCompany() {
		return CreateCompany;
	}

	public WebElement CreateNewJobButton() {
		return CreateNewJobButton;
	}

	public WebElement getjobname() {
		return getjobname;
	}

	public WebElement Highp() {
		return Highp;
	}

	public WebElement Active() {
		return Active;
	}

	public WebElement Onscreen() {
		return Onscreen;
	}

	public WebElement DomainName() {
		return DomainName;

	}

	public WebElement CountryCode() {
		return CountryCode;
	}

	public WebElement Submitbutton() {
		return Submitbutton;
	}

	public WebElement YesButton() {
		return YesButton;
	}

	public WebElement RefreshButton() {
		return RefreshButton;
	}

	public WebElement Allbutton() {
		return Allbutton;
	}

	//	public WebElement getScrolldown() {
//		return Scrolldown;
//	}
//
//	public WebElement getScrollup() {
//		return Scrollup;
//	}
	public WebElement Choosefile() {
		return Choosefile;
	}

	public WebElement DownloadCSV() {
		return DownloadCSV;
	}

	/////////ReverifyContact 17-03-2023
	public WebElement ReverifyContact() {
		return ReverifyContact;
	}

	public WebElement CreatenewjobButton() {
		return CreateNewJobButton;
	}

	public WebElement GetJobname() {
		return GetJobname();
	}

	public WebElement GetPriority() {
		return GetPriority();
	}

	public WebElement OnScreenEntry() {
		return OnScreenEntry();
	}

	public WebElement ContactID() {
		return ContactID();
	}

	public WebElement LinkedinCorrect() {
		return LinkedinCorrect();
	}

	public WebElement LinkedInUrl() {
		return LinkedInUrl();
	}

	public WebElement FirstName() {
		return FirstName();
	}

	public WebElement LastName() {
		return LastName();
	}

	public WebElement Title() {
		return Title();
	}

	public WebElement Email() {
		return Email();
	}

	public WebElement CompanyName() {
		return CompanyName();
	}

	public WebElement CompanyDomain() {
		return CompanyDomain();
	}

	public WebElement PersonalEmail() {
		return PersonalEmail();
	}

	public WebElement IsInternational() {
		return IsInternational();
	}

	public WebElement GetTier() {
		return GetTier();

	}

	public WebElement Submit() {
		return Submit();
	}

	public WebElement Tasks()
	{
		return Tasks;
	}

	public WebElement Spreadsheet()
	{
		return Spreadsheet;
	}
	public WebElement Gmail()
	{
		return Gmail;
	}
}







