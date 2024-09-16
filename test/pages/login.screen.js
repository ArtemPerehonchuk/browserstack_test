class LoginScreen {

    get signUpTab () {return $('~button-sign-up-container')}
    get emailInput () {return $('~input-email')}
    get passwordInput () {return $('~input-password')}
    get confirmInput () {return $('~input-repeat-password')}
    get loginBtn () {return $('~button-LOGIN')}
    get signUpBtn () {return $('~button-SIGN UP')}
    get invalidEmailErrorMessage () {return $('//android.widget.TextView[@text="Please enter a valid email address"]')}
    get invalidPasswordErrorMessage () {return $('//android.widget.TextView[@text="Please enter at least 8 characters"]')}
    get successMessage () {return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')}

    async fillLoginInputs(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
    }

    async fillSignUpInputs(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.confirmInput.setValue(password);
    }

    async tapOnLoginBtn() {
        await this.loginBtn.click();
        await browser.pause(1000);
    }

    async tapOnSignUpBtn() {
        await this.signUpBtn.click();
        await browser.pause(1000);
    }

    async checkPasswordErrorIsDisplayed() {
        await expect(this.invalidPasswordErrorMessage).toBeDisplayed();
    }

    async checkPasswordErrorText() {
        await expect(this.invalidPasswordErrorMessage).toHaveTextContaining('Please enter at least 8 characters');
    }

    async checkEmailErrorIsDisplayed() {
        await expect(this.invalidEmailErrorMessage).toBeDisplayed();
    }

    async checkEmailErrorText() {
        await expect(this.invalidEmailErrorMessage).toHaveTextContaining('Please enter a valid email address');
    }

    async tapOnSignUpTab() {
        await this.signUpTab.click();
        await browser.pause(1000);
    }

    async checkSuccessLoginMsgIsDisplayed() {
        await expect(this.successMessage).toBeDisplayed();
    }

    async checkSuccessLoginMsgText() {
        await expect(this.successMessage).toHaveTextContaining('Success');
    }

    async checkSuccessSignUpMsgIsDisplayed() {
        await expect(this.successMessage).toBeDisplayed();
    }

    async checkSuccessSignUpMsgText() {
        await expect(this.successMessage).toHaveTextContaining('Signed Up!');
    }
}

module.exports = LoginScreen;