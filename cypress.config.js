const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:8000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
  "include": ["**/*.ts", "cypress/**/*.ts"]  
});