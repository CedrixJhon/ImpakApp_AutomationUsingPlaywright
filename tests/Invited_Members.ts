import { Page, Locator, expect } from '@playwright/test';
import { InviteCreds } from './Credentials';
import { CompanyDashboard } from './CompanyDashboard';
export class Invited_Members {
    readonly page: Page;
    readonly InviteBtnPopUp: Locator
    readonly EmailAlreadyExistsError: Locator;
    readonly SecondUser_InviteCard: Locator;
    readonly SecondUser_threeDots: Locator;
    readonly SecondUser_Delete: Locator;

    constructor(page: Page ){
        this.page = page;
        this.InviteBtnPopUp = page.locator('#feedback-modal').getByRole('button', { name: 'Invite' });
        this.EmailAlreadyExistsError = page.getByText('This email is already invited / part of your company.');
        this.SecondUser_InviteCard = this.page.getByText('Menu Remove ' + InviteCreds.SecondUserFirstName +' ' + InviteCreds.SecondUserLastName);
        ;
        this.SecondUser_threeDots =  page.getByRole('button', { name: 'Menu' }).nth(3);
        this.SecondUser_Delete = page.getByRole('link', { name: 'Remove' });
    }

    async AddMemberViaInvite(CompanyDash: CompanyDashboard){
        await CompanyDash.Invite_EmailField.fill(InviteCreds.SecondUserEmail);
        await CompanyDash.Invite_FNameField.fill(InviteCreds.SecondUserFirstName);
        await CompanyDash.Invite_LNameField.fill(InviteCreds.SecondUserLastName);
        await this.InviteBtnPopUp.click();
    }
     
    async VerifyInvited_Displays(){
        await expect(this.page.getByRole('link',  { name: InviteCreds.SecondUserFirstName + ' ' + InviteCreds.SecondUserLastName })).toBeVisible(); 
        //await expect(this.page.getByRole('link', {exact: true, name: InviteCreds.SecondUserLastName })).toBeVisible();
        await expect(this.page.getByText(InviteCreds.SecondUserEmail )).toBeVisible();
    }

    async DeleteInvitedMember(CompanyDashboardNav: CompanyDashboard){

        const targetEmail = InviteCreds.SecondUserEmail;
        await expect(this.SecondUser_InviteCard).toBeVisible();
        await this.SecondUser_threeDots.click();
       /* await this.SecondUser_Delete.click();
        await this.page.reload();
        await CompanyDashboardNav.ClosePopUp.click();
        await expect(this.page.getByText(targetEmail)).not.toBeVisible();
       */
    }
 
};