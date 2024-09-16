class SwipeScreen {
    get compatibleItem () {return $('android=new UiSelector().text("COMPATIBLE")');}
    get browserScreen () {return $('//android.webkit.WebView[@text="Frameworks | WebdriverIO"]');}

    async swipeToCompatibleElement() {
        const maxSwipes = 10; 
        let swipes = 0;

        const { width, height } = await driver.getWindowRect();
        const startX = Math.floor(width * 0.8);
        const endX = Math.floor(width * 0.2);
        const y = Math.floor(height * 0.5);

        while (swipes < maxSwipes) {
            if (await this.compatibleItem.isDisplayed()) {
                return;
            }

            await driver.touchPerform([
                { action: 'press', options: { x: startX, y: y } },
                { action: 'wait', options: { ms: 200 } }, 
                { action: 'moveTo', options: { x: endX, y: y } },
                { action: 'release' }
            ]);

            swipes++;
        }
    }

    async tamOnCompatibleItem() {
        await this.compatibleItem.click();
        await browser.pause(1000);
    }

    async checkBrowserIsDisplayed() {
        await expect(this.browserScreen).toBeDisplayed();
    }

    async checkTextInBrowser() {
        await expect(this.browserScreen).toHaveTextContaining('WebdriverIO');
    }
}

module.exports = SwipeScreen;
