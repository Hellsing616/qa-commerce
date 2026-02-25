const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  
  reporter: 'cypress-multi-reporters',
  reporterOptions:{
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJUnitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório de testes',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  chromeWebSecurity: false,

  e2e: {
    baseUrl: 'http://localhost:3000/',

    // 👇 importante para o cucumber
    specPattern: "**/*.feature",

    async setupNodeEvents(on, config) {
      
      // Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    },
  },
});
