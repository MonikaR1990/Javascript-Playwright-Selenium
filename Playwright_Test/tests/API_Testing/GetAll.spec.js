import {test, expect} from '@playwright/test'
import { request } from 'node:http';

test('Get All Products', async({request})=>{

    const response = await request.get("https://fakestoreapi.com/products");
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.length).toBe(25);
})
test('Get Single Product', async({request})=>{
    const response = await request.get('https://fakestoreapi.com/products/20');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.id).toBe(20);
    expect(body.title).toBeDefined();
    expect(body.price).toBe(12.99);
    expect(body.category).toContain("women's ");
});
test('Get Limited Product', async({request})=>{
    const response = await request.get('https://fakestoreapi.com/products?limit=5');
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.length).toBe(6);
})
test('Create Product', async({request})=>{
    const response = await request.post('https://fakestoreapi.com/products', 
    {
        data:
        {
            "title": "Jega Jewelery Ring",
            "price": 150.95,
            "description": "Your perfect pack for everyday use",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
            "rating": 
            {
            "rate": 3.9,
            "count": 120
            }
        }

    })

    const body = await response.json();
    console.log(body);

    expect(response.status()).toBe(201);

});

test('Update Product', async({request})=>{
    const response = await request.put('https://fakestoreapi.com/products/2',{
        data:
        {
           "price": 50.4 
        }
    })
    const body = await response.json();
    console.log(body);

    expect(response.status()).toBe(200);
});

test('Delete Product', async({request})=>{
    const response = await request.delete('https://fakestoreapi.com/products/3');

    expect(response.status()).toBe(200);
})