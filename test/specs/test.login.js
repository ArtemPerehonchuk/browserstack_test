const { faker } = require('@faker-js/faker');
const HomeScreen = require('../pages/home.screen.js');
const LoginScreen = require('../pages/login.screen.js');

const homeScreen = new HomeScreen();
const loginScreen = new LoginScreen();

let randomEmail, randomPassword;

describe('Test sign up form', () => {
    it('Should check login form with invalid passvord', async () => {
        randomEmail = faker.internet.email();
        randomPassword = faker.internet.password({length: 7})

        await homeScreen.tapOnElement(homeScreen.loginTab);
        await loginScreen.setInputValue(loginScreen.emailInput, randomEmail);
        await loginScreen.setInputValue(loginScreen.passwordInput, randomPassword);
        await loginScreen.tapOnElement(loginScreen.loginBtn);
        await loginScreen.checkElementIsDisplayed(loginScreen.invalidPasswordErrorMessage);
    });

    it('Should login with valid credentials', async () => {
        randomEmail = faker.internet.email();
        randomPassword = faker.internet.password({min: 8})

        await homeScreen.tapOnElement(homeScreen.loginTab);
        await loginScreen.setInputValue(loginScreen.emailInput, randomEmail);
        await loginScreen.setInputValue(loginScreen.passwordInput, randomPassword);
        await loginScreen.tapOnElement(loginScreen.loginBtn);
        await loginScreen.checkElementIsDisplayed(loginScreen.successMessage);
        await loginScreen.checkTextInElemnt(loginScreen.successMessage, 'Success');
    });
})