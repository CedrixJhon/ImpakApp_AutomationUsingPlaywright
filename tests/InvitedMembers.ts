import {Page,Locator} from '@playwright/test';
import { AddMember } from './Credentials';

export class InvitedMembers{
    readonly page: Page;
    readonly GetEmailDisplayed: Locator;
    readonly GetFNameDisplayed: Locator;
    readonly GetLNameDisplayed: Locator;

    constructor(page: Page){
        this.page = page;
        this.GetEmailDisplayed = page.getByText(AddMember.email); 
        this.GetFNameDisplayed = page.getByText(AddMember.fname);
        this.GetLNameDisplayed = page.getByText(AddMember.lname);  
    
    }       


}