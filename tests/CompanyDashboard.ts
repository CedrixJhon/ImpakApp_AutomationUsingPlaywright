import { Page, Locator, expect } from '@playwright/test';
import { InviteCreds } from './Credentials';
export class CompanyDashboard {
  readonly page: Page;
  readonly InviteBtn: Locator
  readonly Invite_EmailTxt: Locator
  readonly Invite_FirstNameTxt: Locator
  readonly Invite_LastNameTxt: Locator
  readonly Invite_AddNewBtn: Locator
  readonly Invite_inviteButton: Locator
  readonly Invite_EmailField: Locator
  readonly Invite_FNameField: Locator
  readonly Invite_LNameField: Locator
  readonly Invites_Selection: Locator;
  readonly ClosePopUp: Locator;
  readonly Dasboard_Selection: Locator;
  readonly Employee_Selection: Locator;





    constructor(page: Page) {
    this.page = page;
    // Locators for Invite Pop Up Display 
    this.InviteBtn = page.getByRole('button', { name: 'Invite' });
    this.Invite_EmailTxt = page.getByLabel('Email');
    this.Invite_FirstNameTxt = page.getByLabel('First Name');
    this.Invite_LastNameTxt = page.getByLabel('Last Name');
    this.Invite_AddNewBtn = page.getByRole('button',{name: 'Add New'});
    this.Invite_inviteButton = page.locator('#feedback-modal').getByRole('button', { name: 'Invite' });
    
    //Locators for the menu selections
    this.Dasboard_Selection = page.getByText('Dashboard Main Surveys');
    this.Employee_Selection = page.getByRole('link', { name: 'Employees', exact: true });
    this.Invites_Selection = page.getByRole('link', { name: 'Invites'});
    this.ClosePopUp = page.getByRole('button', { name: 'Close' });

    //Locators for the Invite Employees Field
    this.Invite_EmailField = page.locator('input[type="email"]');
    this.Invite_FNameField = page.getByRole('textbox').nth(1);
    this.Invite_LNameField = page.getByRole('textbox').nth(2);
  }

  async verifyCompanyDashboardElements_IsVisible() {
      await this.InviteBtn.isVisible();
      await this.InviteBtn.click();
      await this.Invite_EmailTxt.isVisible();
      await this.Invite_FirstNameTxt.isVisible();
      await this.Invite_LastNameTxt.isVisible();
      await  this.Invite_AddNewBtn.isVisible();
      await  this.Invite_inviteButton.isVisible();
  }

   async InputEmailInvite(){
      await this.InviteBtn.click();
      await this.Invite_EmailField.fill(InviteCreds.userEmail);
      await  this.Invite_FNameField.fill(InviteCreds.userFirstName);
      await  this.Invite_LNameField.fill(InviteCreds.userLastName);
      await  this.Invite_inviteButton.click();

  }
 
    async navigationToInvitedSelection(){
      await this.Dasboard_Selection.click();
      await this.Employee_Selection.click();
      await this.Invites_Selection.click();
  }

    async navigationToClosePopUp(){
        await this.Dasboard_Selection.click();
        await this.Employee_Selection.click();
        await this.Invites_Selection.click();
        await this.ClosePopUp.click();
    }
}







