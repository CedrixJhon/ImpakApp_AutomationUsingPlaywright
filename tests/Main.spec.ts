import { expect } from '@playwright/test';
import { test } from './Fixtures';
import { CredentialData } from './Credentials';
import { Dashboard } from './Dashboard';
import { InviteCreds } from './Credentials';





test.describe('Login Tests', () => {

  for (const data of CredentialData) {
    test(`Scenario: ${data.id}`, async ({ urlNav }) => {
    await urlNav.login(data.username, data.password);

    if (data.IsError) {
      await expect(urlNav.InvalidLoginError).toHaveText(data.ExpectedError!);
      } else {
      await expect(urlNav.page).toHaveURL(data.ExpectedURL!); 
      }
    });
  }
});


test('Verify Login Text displays', async ({ urlNav }) => {
  await urlNav.verifyLoginTextDisplays();
});

test('Verify Dashboard Elements are visible and have correct text', async ({ urlNav, page }) => {
  await urlNav.login('cjbusa143@gmail.com', 'Password@123');
  const dashboard = new Dashboard(page);
  await dashboard.verifyDashboardElements_IsVisible();
  await dashboard.verifyDashboardElements_HaveText();
});
test('Verify navigation when succesful click on first Company happened', async ({ urlNav, page,DashboardNav }) => {
    await urlNav.login('cjbusa143@gmail.com', 'Password@123');
    await DashboardNav.ChoseFirstOption.click();
    await expect(page).toHaveURL(DashboardNav.FirstOptionURL);
});

test('Verify Company Dashoard Invite Button is clicked', async ({ urlNav,DashboardNav,CompanyDashboardNav }) => {
  await urlNav.login('cjbusa143@gmail.com', 'Password@123');
  await DashboardNav.ChoseFirstOption.click();
  await expect(CompanyDashboardNav.InviteBtn).toBeVisible();
  await CompanyDashboardNav.InviteBtn.click();
});

test('Verify Company Dasboard Invite Pop Up Display', async ({ urlNav,DashboardNav,CompanyDashboardNav }) =>{
  await urlNav.login('cjbusa143@gmail.com', 'Password@123');
  await DashboardNav.ChoseFirstOption.click();
  await CompanyDashboardNav.verifyCompanyDashboardElements_IsVisible();
});

test('Verify Company Dasboard Invite Pop Successful Invite', async ({ urlNav,DashboardNav,CompanyDashboardNav }) =>{
  await urlNav.login('cjbusa143@gmail.com', 'Password@123');
  await DashboardNav.ChoseFirstOption.click();
  await CompanyDashboardNav.InputEmailInvite();
});


test('Verify Invited Displayed on Invite Section --> Second User', async({page,urlNav,DashboardNav,CompanyDashboardNav,InvitedMembers}) =>{
    await urlNav.login('cjbusa143@gmail.com', 'Password@123');
    await DashboardNav.ChoseFirstOption.click();
    await CompanyDashboardNav.navigationToInvitedSelection();
    await InvitedMembers.AddMemberViaInvite(CompanyDashboardNav);
    await page.reload();
    await CompanyDashboardNav.ClosePopUp.click();
    await page.reload();
    await InvitedMembers.VerifyInvited_Displays();
    
    
});
test('Verify Invited Email Already Exists Error -->SecondUser', async({page,urlNav,DashboardNav,CompanyDashboardNav,InvitedMembers}) =>{
  await urlNav.login('cjbusa143@gmail.com', 'Password@123');
  await DashboardNav.ChoseFirstOption.click();
  await CompanyDashboardNav.navigationToInvitedSelection();
  await InvitedMembers.AddMemberViaInvite(CompanyDashboardNav);
  await page.reload();
  await InvitedMembers.AddMemberViaInvite(CompanyDashboardNav);
  await expect(InvitedMembers.EmailAlreadyExistsError).toBeVisible();
});

test('Verify Delete Invited Member --> Second User', async({page,urlNav,DashboardNav,CompanyDashboardNav,InvitedMembers}) =>{
  await urlNav.login('cjbusa143@gmail.com', 'Password@123');
  await DashboardNav.ChoseFirstOption.click();
  await CompanyDashboardNav.navigationToClosePopUp();
  await InvitedMembers.DeleteInvitedMember(CompanyDashboardNav);

});


test('Test for Changes only', async({urlNav}) =>{
  await urlNav.login('cjbusa143@gmail.com', 'Password@123');
  

});