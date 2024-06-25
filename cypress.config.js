const { defineConfig } = require("cypress");

module.exports = defineConfig(
  {
  defaultCommandTimeout:8000,
  reporter: 'cypress-mochawesome-reporter',//reporter
  video: true,
  videosFolder: 'cypress/videos',
  env:{
    url : "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);/// reporter 
    },
    specPattern:'cypress/integration/examples/*.js'
  },
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "types": [
      "cypress"
    ]
  },
  "include": ["**/*.ts", "cypress/**/*.ts"],  

});
