class HomeScreen {
    get loginTab () {return $('~Login')}
    get swipeTab () {return $('~Swipe')}

    async tapOnLoginTab() {
        await this.loginTab.click();
        await browser.pause(1000);
    }

    async tapOnSwipeTab() {
        await this.swipeTab.click();
        await browser.pause(1000);
    }
}

module.exports = HomeScreen;