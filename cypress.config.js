const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://growth.deel.training/dev/salary-insights',
  },

  env: {
    titles: ['Accountant', 'QA Engineer', 'Software Engineer'], 
    countries: ['Brazil', 'Canada', 'Japan'],
  }
});
