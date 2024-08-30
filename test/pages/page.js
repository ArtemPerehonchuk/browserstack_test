class Page {
    async tapOnElement(element) {
        await element.click();
        await browser.pause(1000);
    }

    async setInputValue(element, value) {
        await element.setValue(value);
    }

    async checkElementIsDisplayed(element) {
        await expect(element).toBeDisplayed();
    }

    async checkTextInElemnt(element, text) {
        await expect(element).toHaveTextContaining(text);
    }

}

module.exports = Page;