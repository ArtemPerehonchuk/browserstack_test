exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'bsuser_vBCR3p',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'zCeKwstezez9xywupp74',
  
    updateJob: false,
    specs: [
      './test/specs/**.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "Webdriverio Browserstack Project",
      build: 'Webdriverio Xiaomi',
      name: 'browserstack-tests',
      device: 'Xiaomi Redmi Note 9',
      os_version: "10.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://829619f067f2c725ddd9727664f3d8bfac0cccc7',
      'browserstack.debug': true
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    }
  };