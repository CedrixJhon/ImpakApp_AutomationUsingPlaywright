import { Page, Locator, expect } from '@playwright/test';
export class DashboardPage {

  // 1. Define types for your locators
  readonly page: Page;
  readonly navBar_Features: Locator;
  readonly navBar_Pricing: Locator;
  readonly navBar_AboutUs: Locator;
  readonly navBar_Support: Locator;
  readonly Heading: Locator;
  readonly LogOutBtn: Locator;
  readonly verifyAdminNameDisplays: Locator;
  readonly ChoseFirstCompany: Locator;
 

  constructor(page: Page) {
    this.page = page;
    // 2. Initialize locators (No '@FindBy' needed!)

    // Dashboard Header and Title locators
    this.navBar_Features = page.getByRole('link', { name: 'Features' });
    this.navBar_Pricing = page.getByRole('link', { name: 'Pricing' });
    this.navBar_AboutUs = page.getByRole('link', { name: 'About us' });
    this.navBar_Support = page.getByRole('link', { name: 'Support' });
    this.Heading = page.getByRole('heading', { name: '👋 Welcome back!' });
    this.LogOutBtn = page.getByRole('button', { name: 'Log Out' });
    this.verifyAdminNameDisplays = page.getByText('Not Michael Johnston?');
    this.ChoseFirstCompany = page.getByRole('link',{name: 'Open'}).first();
  }

  async verifyDashboardDisplays() {
    await expect(this.navBar_Features).toHaveText('Features');
    await expect(this.navBar_Pricing).toHaveText('Pricing');
    await expect(this.navBar_AboutUs).toHaveText('About us');
    await expect(this.navBar_Support).toHaveText('Support');
    await expect(this.Heading).toHaveText('👋 Welcome back!');
    await expect(this.LogOutBtn).toHaveText('Log Out');
    await expect(this.verifyAdminNameDisplays).toHaveText('Not Michael Johnston?');

    await expect(this.navBar_Features).toBeVisible();
    await expect(this.navBar_Pricing).toBeVisible();
    await expect(this.navBar_AboutUs).toBeVisible();
    await expect(this.navBar_Support).toBeVisible();
    await expect(this.Heading).toBeVisible();
    await expect(this.LogOutBtn).toBeVisible();
    await expect(this.verifyAdminNameDisplays).toBeVisible();
  }
   
}