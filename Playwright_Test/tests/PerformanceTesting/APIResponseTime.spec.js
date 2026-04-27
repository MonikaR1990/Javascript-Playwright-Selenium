import {test, expect} from '@playwright/test'

test('API Response Time', async({request})=>{
    
    const startTime = Date.now();
    const response = await request.get('https://fakestoreapi.com/products/');

    const endTime = Date.now();

    const responseTime = endTime - startTime;

    expect(response.status()).toBe(200); //API Testing

    expect(responseTime).toBeLessThan(100); //Performance Testing


})