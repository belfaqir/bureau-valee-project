const path = require('path');
const fs = require('fs');

exports.config = {

    //
    // ====================
    // Configuration du Runner
    // ====================
    //
    // Machine locale ou distante
    // "local" | "remote"
    // Valeur par defaut : local
    runner: 'local',
    // ------------------
    // features a executer
    // ------------------
    // Definition du ou des dossiers a prendre en compte pour l'execution.
    specs: [

        './src/features/**/**/**/**.feature'
    ],
    // Suites de tests
    suites: {
        complet: [
            './src/features/**/**/**/**.feature'
        ]
    },
    // Dossiers a exclure de l'execution
    exclude: [ 
    ],
    //
    //
    //
    // ============
    // Capabilities
    // ============
    // ------------
    // Defintion du nombre d'instance a lancer en parallele (tous navigateurs confondus)
    maxInstances: 4,
    // Definition du ou des navigateurs
    // Commenter / Decommenter en focntion des besoins
    capabilities: [
        {
        // ------------
        // Chrome
        // ------------
        // Defintion du nombre d'instance a lancer en parallele (Chrome)
        maxInstances: 2,
        browserName: 'chrome',
        'goog:chromeOptions': {
            extensions: [],
            args: [
                // Defintion du mode headless
                // Commenter la ligne pour voir l'execution
                '--headless',
                // Arguments chrome necessaires aux tests autos stables
                "--disable-infobars",
                "--allow-running-insecure-content",
                "--disable-background-timer-throttling",
                "--disable-backgrounding-occluded-windows",
                "--disable-hang-monitor",
                "--disable-popup-blocking",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--window-position=0,0",
                "--window-size=1280,870"
            ]
        },
    },
 /*    {
        // ------------
        // Edge
        // ------------
        // Defintion du nombre d'instance a lancer en parallele (Edge)
        maxInstances: 2,
        browserName: 'edge',
        'ms:edgeOptions': {
            extensions: [],
            args: [
                // Defintion du mode headless
                // Commenter la ligne pour voir l'execution
                '--headless',
                // Arguments chrome necessaires aux tests autos stables
                "--disable-infobars",
                "--allow-running-insecure-content",
                "--disable-background-timer-throttling",
                "--disable-backgrounding-occluded-windows",
                "--disable-hang-monitor",
                "--disable-popup-blocking",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--window-position=0,0",
                "--window-size=1280,870"
            ]
        },
        } */
],
    //
    //
    //
    // ===================
    // Configuration des tests
    // ===================
    //
    //
    //
    // ------------
    // Logs
    // ------------
    // Niveau verbeux des logs
    // trace | debug | info | warn | error | silent
    logLevel: 'error',
    outputDir: "",
    //
    //
    //
    // ------------
    // Bail
    // ------------
    // Definition du nombre de tests FAILED avant de stopper l'execution
    // Si 0 : L'execution ne sera pas stoppee, peu importe le nombre de tests FAILED (valeur par defaut)
    bail: 0,
    //
    //
    //
    // ------------
    // baseUrl
    // ------------
    // Defintion de la plateforme sur laquelle lancer les tests
    // Decommenter la plateforme voulue
    // Plateforme 1
     baseUrl: "https://www.google.com",
    //
    //
    //
    // ------------
    // Timeouts
    // ------------
    // Definition du timeout en ms pour les steps waitFor*
    waitforTimeout: 30000,
    // Definition du timeout en ms pour les requetes
    connectionRetryTimeout: 30000,
    // Definition du nombre de retry par defaut
    connectionRetryCount: 2,
    //
    //
    //
    // ===================
    // Services
    // ===================
    // Framework a utiliser
    framework: 'cucumber',
    //
    //
    //
    // ------------
    // Reporting
    // ------------
    reporters: [
        ['cucumberjs-json', {
            jsonFolder: 'reporting/rapports',
            language: 'en',
        },],

    ],
    //
    //
    //
    // ------------
    // Configuration de Cucumber
    // ------------
    // Laisser les valeurs non expliquees par defaut
    cucumberOpts: {
        backtrace: false,
        requireModule: [],
        failAmbiguousDefinitions: true,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        snippets: true,
        source: true,
        profile: [],
        require: ['./src/**/*.js'],
        snippetSyntax: undefined,
        strict: true,

        // Tags a executer ou exclure
        //tagExpression: 'not @BUG and not @NA and not @TODO', '@INIT'
        tagExpression:'@INIT',

        tagsInTitle: false,

        // Timeout d'un step par defaut
        timeout: 180000
    },
    //
    //
    //
    // ===================
    // Hooks
    // ===================
    //
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function (config, capabilities) {
    },
    /**
     * Gets executed before a worker process is spawned and can be used to initialize specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    onWorkerStart: function (cid, caps, specs, args, execArgv) { },
    /**
     * Gets executed just before initializing the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    beforeSession: function (config, capabilities, specs) { },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    before: function (capabilities, specs, browser) {
        browser.url('/')
    },
    /**
     * Gets executed before the suite starts.
     * @param {Object} suite suite details
     */
    beforeSuite: function (suite) { },
    /**
     * This hook gets executed _before_ every hook within the suite starts.
     * (For example, this runs before calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.)
     *
     * (`stepData` and `world` are Cucumber-specific.)
     *
     */
    beforeHook: function (test, context /*, stepData, world*/) { },
    /**
     * Hook that gets executed _after_ every hook within the suite ends.
     * (For example, this runs after calling `before`, `beforeEach`, `after`, `afterEach` in Mocha.)
     *
     * (`stepData` and `world` are Cucumber-specific.)
     */
    afterHook: function (test, context, {
        error,
        result,
        duration,
        passed,
        retries
    } /*, stepData, world*/) { },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    beforeTest: function (test, context) { },
    /**
     * Runs before a WebdriverIO command is executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that the command would receive
     */
    beforeCommand: function (commandName, args) { },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object, if any
     */
    afterCommand: function (commandName, args, result, error) { },
    /**
     * Function to be executed after a test (in Mocha/Jasmine)
     */
    afterTest: function (test, context, {
        error,
        result,
        duration,
        passed,
        retries
    }) { },
    /**
     * Hook that gets executed after the suite has ended.
     * @param {Object} suite suite details
     */
    afterSuite: function (suite) { },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    after: function (result, capabilities, specs) { },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession: function (config, capabilities, specs) { },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    onReload: function (oldSessionId, newSessionId) { },
    /**
     * Cucumber-specific hooks
     */
    beforeFeature: function (uri, feature, scenarios) { },
    beforeScenario: function (uri, feature, scenario, sourceLocation, context) { },
    beforeStep: function ({
        uri,
        feature,
        step
    }, context) { },
    afterStep: function ({
        uri,
        feature,
        step
    }, context, {
        error,
        result,
        duration,
        passed
    }) {
        if (error) {
            const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
            cucumberJson.attach(browser.takeScreenshot(), 'image/png');
        }

    },
    afterScenario: function (uri, feature, scenario, result, sourceLocation, context) { },
    afterFeature: function (uri, feature, scenarios) { }
}
