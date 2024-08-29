const Page = require('./page.js');

class SwipeScreen extends Page {
    get compatibleItem () {return $('android=new UiSelector().text("COMPATIBLE")');}
    get browserScreen () {return $('//android.webkit.WebView[@text="Frameworks | WebdriverIO"]');}

    async swipeToCompatibleElement() {
        const maxSwipes = 10; // Максимальна кількість спроб свайпу
        let swipes = 0;

        // Отримання розмірів вікна
        const { width, height } = await driver.getWindowRect();
        const startX = Math.floor(width * 0.8); // Початок свайпу з правого краю
        const endX = Math.floor(width * 0.2);   // Кінець свайпу з лівого краю
        const y = Math.floor(height * 0.5);     // Вертикальна середина екрана

        while (swipes < maxSwipes) {
            // Перевірка, чи елемент відображається
            if (await this.compatibleItem.isDisplayed()) {
                return; // Виходимо, якщо елемент знайдено
            }

            // Виконання свайпу
            await driver.touchPerform([
                { action: 'press', options: { x: startX, y: y } },
                { action: 'wait', options: { ms: 200 } }, // Коротка пауза під час свайпу
                { action: 'moveTo', options: { x: endX, y: y } },
                { action: 'release' }
            ]);

            swipes++;
        }

        // Викидаємо помилку, якщо елемент не знайдено після максимального числа свайпів
        //throw new Error('Element "COMPATIBLE" not found after maximum swipes.');
    }
}

module.exports = SwipeScreen;
