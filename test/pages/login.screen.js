const Page = require('./page.js')

class LoginScreen extends Page {

    get signUpTab () {return $('~button-sign-up-container')}
    get emailInput () {return $('~input-email')}
    get passwordInput () {return $('~input-password')}
    get confirmInput () {return $('~input-repeat-password')}
    get loginBtn () {return $('~button-LOGIN')}
    get signUpBtn () {return $('~button-SIGN UP')}
    get invalidEmailErrorMessage () {return $('//android.widget.TextView[@text="Please enter a valid email address"]')}
    get invalidPasswordErrorMessage () {return $('//android.widget.TextView[@text="Please enter at least 8 characters"]')}
    get successMessage () {return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')}
}

module.exports = LoginScreen;