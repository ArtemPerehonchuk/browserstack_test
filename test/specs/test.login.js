const { faker } = require('@faker-js/faker');
const HomeScreen = require('../pages/home.screen.js');
const LoginScreen = require('../pages/login.screen.js');

const homeScreen = new HomeScreen();
const loginScreen = new LoginScreen();

let randomEmail, randomPassword;

describe('Test login form', () => {
    xit('test case 1: Should check login form with invalid passvord', async () => {
        randomEmail = faker.internet.email();
        randomPassword = faker.internet.password({length: 7})

        await homeScreen.tapOnLoginTab();
        await loginScreen.fillInputs(randomEmail, randomPassword);
        await loginScreen.tapOnLoginBtn;
        await loginScreen.checkPasswordErrorIsDisplayed();
        await loginScreen.checkPasswordErrorText();
    });

    xit('test case 2: Should login with valid credentials', async () => {
        randomEmail = faker.internet.email();
        randomPassword = faker.internet.password({min: 8})

        await homeScreen.tapOnLoginTab();
        await loginScreen.tapOnSignUpTab();
        await loginScreen.fillLoginInputs(randomEmail, randomPassword);
        await loginScreen.tapOnLoginBtn();
        await loginScreen.checkSuccessMsgIsDisplayed();
        await loginScreen.checkSuccessMsgText();
    });
})