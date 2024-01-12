const {test, expect} = require('@playwright/test');    //importing @playwright/tests folder

test('Google title assertion',async({page})=>           //page fixture
    {
        //Login page
        test.slow();
        await page.goto("https://adactinhotelapp.com/");           //await only used with async fun
        await expect(page).toHaveTitle("Adactin.com - Hotel Reservation System");
        await page.locator('id=username').type('amarjasonawane');  //id locator
        await page.locator('//input[@id="password"]').type('Amarja@123');   //xpath
        await page.locator('//input[@id="login"]').click();
       // const success = await (await page.locator('id=username_show').textContent()).trim();
     //  page.waitForTimeout(60000);
       const loc = await page.locator('//input[@id="username_show"]').getAttribute('value');
       console.log("Attribute Value is :"+loc);
      // expect(loc).toHaveAttribute('value','Hello amarjasonawane!');

      //Search hotel page
      await expect(page).toHaveTitle("Adactin.com - Search Hotel");
      await expect (loc).toBe('Hello amarjasonawane!');

      await page.locator('//select[@id="location"]').selectOption('Sydney');
      await page.locator('//select[@id="hotels"]').selectOption({index:1});
      await page.locator('//select[@id="room_type"]').selectOption({label:'Deluxe'});
      await page.locator('//select[@id="room_nos"]').selectOption({index:2});
      await page.locator('//input[@id="Submit"]').click();

      //Select Hotel page
      //await page.click("//input[@id='radiobutton_0']");
      await expect(page).toHaveTitle("Adactin.com - Select Hotel");
      await page.check("//input[@id='radiobutton_0']");
      //await expect(page.locator("//input[@id='radiobutton_0']")).toBeChecked();
      expect(await page.locator("//input[@id='radiobutton_0']").isChecked).toBeTruthy();
     // expect(await page.locator("//input[@id='radiobutton_0']").isChecked).toBeFalsy();
     await page.locator('//input[@id="continue"]').click();

     //book a hotel
     await expect(page).toHaveTitle("Adactin.com - Book A Hotel");  
     await page.locator('//input[@id="first_name"]').fill('Amarja');
     await page.locator('//input[@id="last_name"]').fill('Sonawane');
     await page.locator('//textarea[@id="address"]').fill('Mumbai');
     await page.locator('//input[@id="cc_num"]').click('1234567891234567');
     await page.locator('//select[@id="cc_type"]').selectOption({index:2});
     await page.locator('//select[@id="cc_exp_month"]').selectOption({index:8});
     await page.locator('//select[@id="cc_exp_year"]').selectOption({index:16});
     await page.locator('//input[@id="cc_cvv"]').fill('999');
     await page.locator('//input[@id="book_now"]').click();
     
    //Booking Confirmation
    await expect(page).toHaveTitle("Adactin.com - Hotel Booking Confirmation"); 
    const orderNo = await page.locator('//input[@id="order_no"]').getAttribute('value');
    console.log("Order Number is :"+orderNo);
    await page.locator('//input[@id="my_itinerary"]').click();
     
    //Booked Itinerary Page
    await expect(page).toHaveTitle("Adactin.com - Select Hotel"); 
    await page.click("(//input[@type='checkbox'])[2]");
    await page.check("(//input[@type='checkbox'])[3]");
    await page.uncheck("(//input[@type='checkbox'])[3]");

     expect(await page.locator("(//input[@type='checkbox'])[2]").isChecked()).toBeTruthy();
     expect(await page.locator("(//input[@type='checkbox'])[3]").isChecked()).toBeFalsy();
    }
);




//tagname.attributename=attrvalue
