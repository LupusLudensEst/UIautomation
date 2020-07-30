package com.connectedio.ui;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.Test;

public class LoginTest extends BaseUI {
    String actualTitle;
    String actualAlert;

    @Test
    public void positiveLogin() {
        loginPage.enterValidEmailAddress();
        loginPage.enterValidPassword();
        loginPage.clickLoginButton();
        loginPage.handleWithSomeoneAlreadyConnectedAlertMessage();
        actualTitle = driver.findElement(Locators.ACTUAL_TITLE_DASHBOARD_PAGE).getText();
        Assert.assertEquals(actualTitle, Data.expectedTitle);
    }

    @Test
    public void negativeLoginInvalidEmailAddress() {
        loginPage.enterInvalidEmailAddress();
        loginPage.enterValidPassword();
        loginPage.clickLoginButton();
        wait.until(ExpectedConditions.textToBePresentInElementLocated(Locators.INVALID_LOGIN_OR_PASSWORD_ALERT, Data.expectedAlert));
        actualAlert = driver.findElement(Locators.INVALID_LOGIN_OR_PASSWORD_ALERT).getText();
        Assert.assertEquals(actualAlert, Data.expectedAlert);
    }
}
