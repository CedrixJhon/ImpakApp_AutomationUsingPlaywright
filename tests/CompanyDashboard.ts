import{expect,Page,Locator} from '@playwright/test';


export class companyDashboard{
    readonly page: Page;
    readonly InviteBtn: Locator;
    readonly CloseBtn: Locator;
    readonly EmailTxtDisplay: Locator;
    readonly FNameTxtDisplay: Locator;
    readonly LNameTxtDisplay: Locator;
    readonly DashboardMenu: Locator;
    readonly EmployeeMenu: Locator;
    readonly InvitesMenu: Locator;
    readonly EmailField: Locator;
    readonly FnameField: Locator;
    readonly LNameField: Locator;
    readonly InviteBtnPopUp: Locator;

    constructor(page: Page){
        this.page = page;
        this.InviteBtn = page.getByRole('button', { name: 'Invite' });
        this.CloseBtn = page.getByRole('button', { name: 'Close' });
        this.EmailTxtDisplay = page.getByText('Email');
        this.FNameTxtDisplay = page.getByText('First Name');
        this.LNameTxtDisplay = page.getByText('Last Name');
        this.DashboardMenu = page.getByRole('link', { name: 'Dashboard' });
        this.EmployeeMenu = page.getByRole('link', { name: 'Employees', exact: true });
        this.InvitesMenu = page.getByRole('link', { name: 'Invites' });
        this.EmailField = page.locator('input[type="email"]');
        this.FnameField = page.getByRole('textbox').nth(1);
        this.LNameField = page.getByRole('textbox').nth(2);
        this.InviteBtnPopUp =  page.locator('#feedback-modal').getByRole('button', { name: 'Invite' });
    }

    async verifyPopUpDisplays(){
        await this.InviteBtn.click();
        await expect(this.EmailTxtDisplay).toBeVisible();
        await expect(this.FNameTxtDisplay).toBeVisible();
        await expect(this.LNameTxtDisplay).toBeVisible();
        await this.CloseBtn.click();
    }

    async goToInvitedMemberMenu(){
        await this.DashboardMenu.click();
        await this.EmployeeMenu.click();
        await this.InvitesMenu.click();
    }
    async addMemberViaDashboard(email:string,fnmae:string,lname:string){
        await this.InviteBtn.click();
        await this.EmailField.fill(email);
        await this.FnameField.fill(fnmae);
        await this.LNameField.fill(lname);
        await this.InviteBtnPopUp.click();

    }



}
