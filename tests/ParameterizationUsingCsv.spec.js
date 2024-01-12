import {test} from '@playwright/test';
import{parse} from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

const credrecords = parse(fs.readFileSync(path.join(__dirname,'Credentials.csv')),{
 columns:true,
 skip_empty_lines:true   
});
console.log(credrecords);

for(const cred of credrecords){
    test(`testing with ${cred.login}`,async({page})=>
    {
        await page.goto("https://adactinhotelapp.com/"); 
    //    await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
        await page.locator('id=username').type(cred.login);  //id locator
        await page.locator('//input[@id="password"]').type(cred.password);   //xpath
        await page.locator('//input[@id="login"]').click();
      //  await expect(page).toHaveTitle("Adactin.com - Search Hotel");
    }
    )
}
