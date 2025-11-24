const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

// Launch Onion application
Given('user launches Onion application', async function () {
  await this.page.goto('https://dev.onion.gnapitech.org/');
});

When('user enters username {string}', async function (username) {
  await this.page.locator('#username').fill("bhargavi.tallapaneni@gnapi.tech");
});

When('user enters password {string}', async function (password) {
  await this.page.locator('#password').fill("Nethra@12345");
});

When('user clicks login button', async function () {
  await this.page.locator('button[type="submit"]').click();
});

Then('user should land on dashboard page', async function () {
  await this.page.waitForLoadState('networkidle');
  await expect(this.page).toHaveURL("https://dev.onion.gnapitech.org/");
});
