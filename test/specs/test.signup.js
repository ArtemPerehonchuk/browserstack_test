const { faker } = require('@faker-js/faker');
const HomeScreen = require('../pages/home.screen.js');
const LoginScreen = require('../pages/login.screen.js');

const homeScreen = new HomeScreen();
const loginScreen = new LoginScreen();

let randomEmail, randomPassword, randomWord;

describe('Test sign up form', () => {
    it('test case 3: Should check sign up form with invalid email', async () => {
        randomWord = faker.word.noun();
        randomPassword = faker.internet.password({min: 8})

        await homeScreen.tapOnLoginTab();
        await loginScreen.tapOnSignUpTab();
        await loginScreen.fillSignUpInputs(randomWord, randomPassword);
        await loginScreen.tapOnSignUpBtn();
        await loginScreen.checkEmailErrorIsDisplayed();
        await loginScreen.checkEmailErrorText();
    });

    it('Should sign up with valid credentials', async () => {
        randomEmail = faker.internet.email();
        randomPassword = faker.internet.password({min: 8})

        await homeScreen.tapOnLoginTab();
        await loginScreen.tapOnSignUpTab();
        await loginScreen.fillSignUpInputs(randomEmail, randomPassword);
        await loginScreen.tapOnSignUpBtn();
        await loginScreen.checkSuccessSignUpMsgIsDisplayed();
        await loginScreen.checkSuccessSignUpMsgText();
    });
})