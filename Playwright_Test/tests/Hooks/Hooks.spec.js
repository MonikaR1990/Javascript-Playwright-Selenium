import {test} from '@playwright/test'

test.beforeAll(async()=> 
{
    console.log("Runs once before all Test Cases");
});

test.afterAll(async()=>{
    console.log("Runs once after all test cases");
});

test.beforeEach(async()=>{
    console.log("Runs before every test");
});


test.afterEach(async()=>{
    console.log("Runs after every test");
});

test('Testcase 1', async()=>{
    console.log("Testcase 1 Executed");
})

test('Testcase 2', async()=>{
    console.log("Testcase 2 Executed");
});

test('Testcase 3', async()=>{
    console.log("Testcase 3 Executed");
});

test('Testcase 4', async()=>{
    console.log("Testcase 4 Executed");
})




//Types of Hooks

//beforeAll - Runs once before all Test Cases
//afterAll - Runs once after all test cases
//beforeEach - Runs before every test
//afterEach - Runs after every test