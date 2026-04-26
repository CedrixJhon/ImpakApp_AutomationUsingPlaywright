import { expect } from '@playwright/test';
import { test } from './Fixtures';
import { CredentialData } from './Credentials';
import { Dashboard } from './Dashboard';




//Login Tests
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

// Dashboard Tests - Company Listed on the Dashboard
test('Verify Login Text displays', async ({ urlNav }) => {
  await urlNav.verifyLoginTextDisplays();
});

test('Verify Dashboard Elements are visible and have correct text', async ({urlNav, page}) => {
  await urlNav.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  const dashboard = new Dashboard(page);
  await dashboard.verifyDashboardElements_IsVisible();
  await dashboard.verifyDashboardElements_HaveText();
});

// Company Dashboard Tests
test('Verify navigation when succesful click on first Company happened', async ({ urlNav, page,DashboardNav }) => {
    await urlNav.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
    await DashboardNav.ChoseFirstOption.click();
    await expect(page).toHaveURL(DashboardNav.FirstOptionURL);
});

test('Verify Company Dashoard Invite Button is clicked', async ({ urlNav,DashboardNav,CompanyDashboardNav }) => {
  await urlNav.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD! );
  await DashboardNav.ChoseFirstOption.click();
  await expect.soft(CompanyDashboardNav.InviteBtn).toBeVisible();
  await CompanyDashboardNav.InviteBtn.click();
});

test('Verify Company Dasboard Invite Pop Up Display', async ({ urlNav,DashboardNav,CompanyDashboardNav }) =>{
  await urlNav.login(process.env.TEST_USERNAME! , process.env.TEST_PASSWORD!);
  await DashboardNav.ChoseFirstOption.click();
  await CompanyDashboardNav.verifyCompanyDashboardElements_IsVisible();
});

test('Verify Company Dasboard Invite Pop Successful Invite', async ({ urlNav,DashboardNav,CompanyDashboardNav }) =>{
  await urlNav.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  await DashboardNav.ChoseFirstOption.click();
  await CompanyDashboardNav.InputEmailInvite();
});

// Invite Section Test Cases
test('Verify Invited Displayed on Invite Section --> Second User', async({page,urlNav,DashboardNav,CompanyDashboardNav,InvitedMembers}) =>{
    await urlNav.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
    await DashboardNav.ChoseFirstOption.click();
    await CompanyDashboardNav.navigationToInvitedSelection();
    await InvitedMembers.AddMemberViaInvite(CompanyDashboardNav);
    await page.reload();
    await CompanyDashboardNav.ClosePopUp.click();
    await page.reload();
    await InvitedMembers.VerifyInvited_Displays();
     
});
test('Verify Invited Email Already Exists Error -->SecondUser', async({page,urlNav,DashboardNav,CompanyDashboardNav,InvitedMembers}) =>{
  await urlNav.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  await DashboardNav.ChoseFirstOption.click();
  await CompanyDashboardNav.navigationToInvitedSelection();
  await InvitedMembers.AddMemberViaInvite(CompanyDashboardNav);
  await page.reload();
  await InvitedMembers.AddMemberViaInvite(CompanyDashboardNav);
  await expect(InvitedMembers.EmailAlreadyExistsError).toBeVisible();
});

test('Verify Delete Invited Member --> Second User', async({page,urlNav,DashboardNav,CompanyDashboardNav,InvitedMembers}) =>{
  await urlNav.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  await DashboardNav.ChoseFirstOption.click();
  await CompanyDashboardNav.navigationToClosePopUp();
  await InvitedMembers.DeleteInvitedMember(CompanyDashboardNav);

});


// Groups Test Cases
test ('Verify Navigattion to Groups Page', async({urlNav,DashboardNav,GroupsNav}) => {
  await urlNav.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  await DashboardNav.ChoseFirstOption.click();
  await GroupsNav.ClickCommunityMenu();

  });

test('Verify Groups Header Displayed', async({urlNav,DashboardNav,GroupsNav}) => {
  await urlNav.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  await DashboardNav.ChoseFirstOption.click();
  await GroupsNav.ClickCommunityMenu();
  await GroupsNav.VerifyGroupDashboardDisplays()
  
});

// Department Test Cases
test ('Verify Navigattion to Departments Page', async({urlNav,DashboardNav,DepartmentsNav}) => {
  await urlNav.login(process.env.TEST_USERNAME!, process.env.TEST_PASSWORD!);
  await DashboardNav.ChoseFirstOption.click();
  await DepartmentsNav.GoToDepartmentsPage();
});
