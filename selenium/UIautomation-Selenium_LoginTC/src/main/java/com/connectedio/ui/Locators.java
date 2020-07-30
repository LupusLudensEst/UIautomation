package com.connectedio.ui;

import org.openqa.selenium.By;

public class Locators {
    public static final By EMAIL_ADDRESS_INPUT_FIELD = By.cssSelector("input[placeholder='Email address']");
    public static final By PASSWORD_INPUT_FIELD = By.cssSelector("input[placeholder='Password']");
    public static final By LOGIN_BUTTON = By.cssSelector("button[type='submit']");
    public static final By ACTUAL_TITLE_DASHBOARD_PAGE = By.xpath("//h5");
    public static final By INVALID_LOGIN_OR_PASSWORD_ALERT = By.xpath("//div[@class='alert alert-danger']");
    public static final By OK_BUTTON = By.xpath("//button[@class='swal2-confirm btn btn-outline-primary btn-sm btn-custom swal2-styled']");
}
