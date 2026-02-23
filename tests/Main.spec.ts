import { expect } from '@playwright/test';
import { Credentials } from './Credentials';
import { AddMember } from './Credentials';
import { test } from './Fixtures';


test.describe('Login Test for Valid and Invalid Credentials', () => {
  
  // If 'Credentials' is still red, try: (Credentials as any[])
  for (const scenario of Credentials) {
    
    test(`Scenario: ${scenario.name}`, async ({ loginPage }) => {
      
      await loginPage.login(scenario.username, scenario.password);

      if (scenario.shouldError) {
        // Validation for negative scenarios: Check for the error message
       await expect(loginPage.ErrorCredsMsg).toHaveText(scenario.expectedError!);
        await loginPage.verifyErrorMessage();
      } else {
        // Checking the URL after a successful login
        await expect(loginPage.page).toHaveURL(scenario.expectedURL!);
      }
    });
  }
});

test('Login - Verify Login Text displays', async ({ loginPage }) => {

  await loginPage.verifyLoginTextDisplays();

});

test('Dashboard - Verify Displayed Text is visible and matched on the Expected Display', async ({ loginPage,dashboardPage }) => {
  await loginPage.login('cjbusa143@gmail.com', 'Password@123');
  await dashboardPage.verifyDashboardDisplays();
});

test('Dashboard - Verify when choosing the first company will navigate to the main dashboard', async({loginPage,dashboardPage})=>{
    await loginPage.login('cjbusa143@gmail.com', 'Password@123');
    await dashboardPage.ChoseFirstCompany.click(); 
});

test('CompanyDashboard - Verify Invite Button Pop Up Displays', async({loginPage,dashboardPage,compDashboard})=>{
    await loginPage.login('cjbusa143@gmail.com', 'Password@123');
    await dashboardPage.ChoseFirstCompany.click(); 
    await compDashboard.verifyPopUpDisplays();
   
});

test('Invited Members - Verify Added Member is added Successfully', async({loginPage,dashboardPage,compDashboard})=>{
    await loginPage.login('cjbusa143@gmail.com', 'Password@123');
    await dashboardPage.ChoseFirstCompany.click(); 
    await compDashboard.addMemberViaDashboard(AddMember.email,AddMember.fname,AddMember.lname);

});
test('Invited Members - Verify Added Member is displayed in the Invited Members List', async({loginPage,dashboardPage,compDashboard,invitedMembers})=>{
    await loginPage.login('cjbusa143@gmail.com', 'Password@123');
    await dashboardPage.ChoseFirstCompany.click(); 
    await compDashboard.goToInvitedMemberMenu();
    await compDashboard.CloseBtn.click();
    await expect(invitedMembers.GetEmailDisplayed).toBeVisible();
    await expect(invitedMembers.GetFNameDisplayed).toBeVisible();
    await expect(invitedMembers.GetLNameDisplayed).toBeVisible();

});