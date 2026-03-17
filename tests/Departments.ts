import {test,Page,Locator,expect} from '@playwright/test';

export class Departments {
    readonly page: Page;
    readonly CommunittyMenuDropdown: Locator;
    readonly DepartmentsMenuOption: Locator;


    constructor(page: Page){
        this.page = page;
        this.CommunittyMenuDropdown = page.getByText('Community');
        this.DepartmentsMenuOption = page.getByRole('link', { name: 'Departments' });

    }
    async GoToDepartmentsPage(){
        await this.CommunittyMenuDropdown.click();
        await this.DepartmentsMenuOption.click();   
    }
}