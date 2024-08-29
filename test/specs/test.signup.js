const { faker } = require('@faker-js/faker');
const HomeScreen = require('../pages/home.screen.js');
const LoginScreen = require('../pages/login.screen.js');

const homeScreen = new HomeScreen();
const loginScreen = new LoginScreen();

let randomEmail, randomPassword, randomWord;

describe('Test sign up form', () => {
    it('Should check sign up form with invalid email', async () => {
        randomWord = faker.word.noun();
        randomPassword = faker.internet.password({min: 8})

        await homeScreen.tapOnElement(homeScreen.loginTab);
        await loginScreen.tapOnElement(loginScreen.signUpTab);
        await loginScreen.setInputValue(loginScreen.emailInput, randomWord);
        await loginScreen.setInputValue(loginScreen.passwordInput, randomPassword);
        await loginScreen.setInputValue(loginScreen.confirmInput, randomPassword);
        await loginScreen.tapOnElement(loginScreen.signUpBtn);
        await loginScreen.checkElementIsDisplayed(loginScreen.invalidEmailErrorMessage);
    });

    it('Should sign up with valid credentials', async () => {
        randomEmail = faker.internet.email();
        randomPassword = faker.internet.password({min: 8})

        await homeScreen.tapOnElement(homeScreen.loginTab);
        await loginScreen.tapOnElement(loginScreen.signUpTab);
        await loginScreen.setInputValue(loginScreen.emailInput, randomEmail);
        await loginScreen.setInputValue(loginScreen.passwordInput, randomPassword);
        await loginScreen.setInputValue(loginScreen.confirmInput, randomPassword);
        await loginScreen.tapOnElement(loginScreen.signUpBtn);
        await loginScreen.checkElementIsDisplayed(loginScreen.successMessage);
        await loginScreen.checkTextInElemnt(loginScreen.successMessage, 'Signed Up!');
    });
})