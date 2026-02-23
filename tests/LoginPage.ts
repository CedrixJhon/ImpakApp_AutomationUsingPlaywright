import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {

  // 1. Define types for your locators
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly header: Locator;
  readonly emailTxt: Locator;
  readonly passTxt: Locator;
  readonly forgotPassTxt: Locator;
  readonly infoTxt: Locator;
  readonly InvalidLoginError: Locator;

  
  constructor(page: Page) {
    this.page = page;
    // 2. Initialize locators (No '@FindBy' needed!)
    // Text Display locators
    this.header = page.getByRole('heading', { name: 'Welcome back! ✨'});
    this.emailTxt = page.getByText('Email Address *');
    this.passTxt = page.getByText('Password', { exact: true });
    this.forgotPassTxt = page.getByRole('link', { name: 'Forgot Password?' });
    this.infoTxt = page.getByText('Don\'t you have an account?');

    //TextBox fill and button click locators
    this.usernameInput = page.getByRole('textbox', { name: 'email' });
    this.passwordInput = page.getByRole('textbox', { name: 'password' });
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.InvalidLoginError = page.getByText('Invalid username or password entered.');

    // Dashboard locators
  }
  // 3. Define Actions
  async goto() {
    await this.page.goto('https://impak.app/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
  async verifyLoginTextDisplays() {
    await expect(this.header).toBeVisible();
    await expect(this.emailTxt).toBeVisible();
    await expect(this.passTxt).toBeVisible();
    await expect(this.forgotPassTxt).toBeVisible();
    await expect(this.infoTxt).toBeVisible();
  }
}