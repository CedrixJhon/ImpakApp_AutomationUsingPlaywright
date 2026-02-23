import { Page, Locator, expect } from '@playwright/test';

export class Dashboard {

  readonly page: Page;
  readonly navbar_Features: Locator;
  readonly navbar_Pricing: Locator;
  readonly navbar_AboutUs: Locator;
  readonly navbar_Support: Locator;
  readonly Heading: Locator;
  readonly CheckingName: Locator;
  readonly LogOutBtn: Locator;
  readonly ChoseFirstOption: Locator;
  readonly FirstOptionURL: string;

  constructor(page: Page) {
    this.page = page; 
    this.navbar_Features = page.getByRole('link', { name: 'Features' });
    this.navbar_Pricing = page.getByRole('link', { name: 'Pricing' });
    this.navbar_AboutUs = page.getByRole('link', { name: 'About us' });
    this.navbar_Support = page.getByRole('link', { name: 'Support' });
    this.Heading = page.getByRole('heading', { name: '👋 Welcome back!' });
    this.CheckingName = page.getByText('Not Michael Johnston?');
    this.LogOutBtn = page.getByRole('button', { name: 'Log Out' });
    this.ChoseFirstOption = page.getByRole('link',{name: 'Open'}).first();
    this.FirstOptionURL = 'https://chillhubs-company.impak.app/dashboard';
  }
  
  async verifyDashboardElements_IsVisible() {
    await expect(this.navbar_Features).toBeVisible();
    await expect(this.navbar_Pricing).toBeVisible();
    await expect(this.navbar_AboutUs).toBeVisible();
    await expect(this.navbar_Support).toBeVisible();
    await expect(this.Heading).toBeVisible();
    await expect(this.CheckingName).toBeVisible();
    await expect(this.LogOutBtn).toBeVisible();

  }
  
  async verifyDashboardElements_HaveText() {    
    await expect(this.navbar_Features).toHaveText('Features');
    await expect(this.navbar_Pricing).toHaveText('Pricing');
    await expect(this.navbar_AboutUs).toHaveText('About us');
    await expect(this.navbar_Support).toHaveText('Support');
    await expect(this.Heading).toHaveText('👋 Welcome back!');
    await expect(this.CheckingName).toHaveText('Not Michael Johnston?');
    await expect(this.LogOutBtn).toHaveText('Log Out');
  }

}
