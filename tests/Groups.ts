import {Page,expect, Locator} from '@playwright/test';


export class Groups {
    readonly page: Page
    readonly verifyGroupHeaderDisplays: Locator;
    readonly CommunittyMenuDropdown: Locator;
    readonly GroupsMenuOption: Locator;
    readonly CreateGroupBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.CommunittyMenuDropdown = page.getByText('Community');
        this.GroupsMenuOption = page.getByRole('link', { name: 'Groups' });
        this.CreateGroupBtn = page.getByRole('button', { name: 'Create' });
        this.verifyGroupHeaderDisplays = page.getByRole('heading', { name: 'Groups 👥' });
    }
    async ClickCommunityMenu(){
       
        await this.CommunittyMenuDropdown.click();
        await this.GroupsMenuOption.click();
    }
    async VerifyGroupDashboardDisplays(){
        await expect(this.CreateGroupBtn).toBeVisible();
        await expect(this.CreateGroupBtn).toHaveText('Create');
        await expect(this.verifyGroupHeaderDisplays).toBeVisible();
        await expect(this.verifyGroupHeaderDisplays).toHaveText('Groups 👥');
    }
    

}