package com.connectedio.ui;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;

public class BaseUI {
    WebDriver driver;
    WebDriverWait wait;
    LoginPage loginPage;

    @BeforeMethod
    @Parameters("browser")
    public void beforeActions(@Optional("chrome") String browser) {

        if (browser.equalsIgnoreCase("firefox")) {
            System.out.println("FireFox");
            FirefoxOptions firefoxOptions = new FirefoxOptions().addArguments("--headless");
            driver = new FirefoxDriver(firefoxOptions);
        } else if (browser.equalsIgnoreCase("chrome")) {
            System.out.println("Chrome");
            ChromeOptions chromeOptions = new ChromeOptions().addArguments("--headless");
            driver = new ChromeDriver(chromeOptions);
        }

        wait = new WebDriverWait(driver, 20);
        loginPage = new LoginPage(driver, wait);

        driver.manage().window().maximize();
        driver.get(Data.mainUrl);
    }

    @AfterMethod
    public void afterActions() {
        driver.quit();
    }
}
