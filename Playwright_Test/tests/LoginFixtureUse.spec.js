import {test, expect} from '../tests/CustomFixture.spec'

test('TestCase 1', async({loginPage})=>{
     await expect(loginPage).toHaveTitle('Swag Labs');
});

test('TestCase 2', async({loginPage})=>{
    await expect(loginPage).toHaveURL('https://www.saucedemo.com/inventory.html')
})

test('TestCase 3', async({invalidPage})=>{

    await expect(invalidPage).toHaveURL('https://www.saucedemo.com/')
});








