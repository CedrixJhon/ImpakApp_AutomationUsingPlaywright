import {test as base} from '@playwright/test';
import { LoginPage } from "./LoginPage";
import { DashboardPage } from './Dashboard';
import { companyDashboard } from './CompanyDashboard';
import { InvitedMembers } from './InvitedMembers';



type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  compDashboard: companyDashboard;
  invitedMembers: InvitedMembers;

};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
  
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
  compDashboard: async ({ page }, use) => {
    const compDashboard = new companyDashboard(page);
    await use(compDashboard);
  },
  invitedMembers: async ({ page }, use) => {
    const invitedMembers = new InvitedMembers(page);
    await use(invitedMembers);
  }

});




