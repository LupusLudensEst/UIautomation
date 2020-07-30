package com.connectedio.ui;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage extends BaseActions {
    public LoginPage(WebDriver driver, WebDriverWait wait) {
        super(driver, wait);
    }

    public void enterValidEmailAddress() {
        driver.findElement(Locators.EMAIL_ADDRESS_INPUT_FIELD).sendKeys(Data.emailAddressLogin);
    }

    public void enterInvalidEmailAddress() {
        driver.findElement(Locators.EMAIL_ADDRESS_INPUT_FIELD).sendKeys(Data.invalidEmailAddressLogin);
    }

    public void enterValidPassword() {
        driver.findElement(Locators.PASSWORD_INPUT_FIELD).sendKeys(Data.passwordLogin);
    }

    public void clickLoginButton() {
        driver.findElement(Locators.LOGIN_BUTTON).click();
    }

    public void handleWithSomeoneAlreadyConnectedAlertMessage() {
        wait.until(ExpectedConditions.elementToBeClickable(Locators.OK_BUTTON));
        driver.findElement(Locators.OK_BUTTON).click();
        wait.until(ExpectedConditions.textToBePresentInElementLocated(Locators.ACTUAL_TITLE_DASHBOARD_PAGE, Data.expectedTitle));
    }
}
