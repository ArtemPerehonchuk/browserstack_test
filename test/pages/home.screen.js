const Page = require('./page.js')

class HomeScreen extends Page {
    get loginTab () {return $('~Login')}
    get swipeTab () {return $('~Swipe')}
}

module.exports = HomeScreen;