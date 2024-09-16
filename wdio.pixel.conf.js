exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'artem_OihWy2',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'm3J6UR26LFaMyzkYkvrv',
  
    updateJob: false,
    specs: [
      './test/specs/**.js'
    ],
    exclude: [],
  
    capabilities: [{
      project: "Webdriverio Browserstack Android Project",
      build: 'Webdriverio Pixel',
      name: 'browserstack-tests',
      device: 'Google Pixel 3',
      os_version: "9.0",
      app: process.env.BROWSERSTACK_APP_ID || 'bs://6dd2bf3ec49ee40d38bf3ad8a87321f535a0524f',
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