import { test as base } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { Dashboard } from './Dashboard';
import { CompanyDashboard } from './CompanyDashboard';
import { Invited_Members } from './Invited_Members';


//Defne the types for our fixtures
type MyFixtures = {
  urlNav: LoginPage;
  DashboardNav: Dashboard;
  CompanyDashboardNav: CompanyDashboard;
  InvitedMembers: Invited_Members;
};

//Extend the base test with our fixtures
export const test = base.extend<MyFixtures>({
  urlNav: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    
    await use(loginPage);
  },

  // For Dasboard Fixtures where dasboard page is present
  DashboardNav: async ({ page }, use) => {
    const dashboard = new Dashboard(page);
    await use(dashboard);
  },

  CompanyDashboardNav: async ({ page }, use) => {
    const companyDashboard = new CompanyDashboard(page);
    await use(companyDashboard);
  },

  InvitedMembers: async({page}, use) => {
    const invitedmem = new Invited_Members(page);
    await use(invitedmem);
  }



});

