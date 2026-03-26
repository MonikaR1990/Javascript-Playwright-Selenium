import {test, expect} from '@playwright/test'

test('request api', async({page})=>{
    await page.goto("https://reqres.in/");

    const [response] = await Promise.all([
        page.waitForResponse(res=>
            res.url().includes('/api/users?page=1') &&
        res.status() ===  200),
    page.evaluate(()=>{
        return fetch('https://reqres.in/api/users?page=1');
    })
    ]);

    const data = await response.json();

    console.log(data.data.length);

    expect(response.status()).toBe(200);
    expect(data.data.length).toBeGreaterThan(0);


});

