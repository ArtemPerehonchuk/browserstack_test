const HomeScreen = require("../pages/home.screen.js");
const SwipeScreen = require("../pages/swipe.screen.js");

const homeScreen = new HomeScreen();
const swipeScreen = new SwipeScreen();

describe('Test swipe screen', () => {
    it('Should swipe to element, click on it and check URL', async () => {
        await homeScreen.tapOnSwipeTab();
        await swipeScreen.swipeToCompatibleElement();
        await swipeScreen.tamOnCompatibleItem();
        await swipeScreen.checkBrowserIsDisplayed;
        await swipeScreen.checkTextInBrowser();
    })
})
