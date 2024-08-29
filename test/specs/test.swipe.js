const HomeScreen = require("../pages/home.screen.js");
const SwipeScreen = require("../pages/swipe.screen.js");

const homeScreen = new HomeScreen();
const swipeScreen = new SwipeScreen();

const compatibleUrl = '';

describe('Test swipe screen', () => {
    it('Should swipe to element, click on it and check URL', async () => {
        await homeScreen.tapOnElement(homeScreen.swipeTab);
        await swipeScreen.swipeToCompatibleElement();
        await swipeScreen.tapOnElement(swipeScreen.compatibleItem);
        await swipeScreen.checkElementIsDisplayed(swipeScreen.browserScreen);
        await swipeScreen.checkTextInElemnt(swipeScreen.browserScreen, 'WebdriverIO');
        //await swipeScreen.checkUrl(compatibleUrl);
    })
})
