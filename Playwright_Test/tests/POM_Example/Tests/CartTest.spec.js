import {test, expect} from '@playwright/test';

import { ProductPage } from '../Pages/ProductPage';
import { CartPage } from '../Pages/CartPage';

test('Add Product to Cart and Validate', async({page})=>{
    const product = new ProductPage(page);
    const cart = new CartPage(page);

    //1. Open Product Page
    await product.gotoProductPage();

    //2. Verify Product Page is Loaded
    expect(await product.isAllProductLoaded()).toBeTruthy();

    //3. Add First Product
    await product.addProductToCard(0);
    await product.clickContinueShopping();

    //4. Add Second Product
    await product.addProductToCard(1);
    await product.clickContinueShopping();

    //5. Click Add to Cart Link
    await product.clickAddToCartLink();

    //6. Confirm Cart Page is Loaded.
    expect(await cart.isCartPageLoaded()).toBeTruthy();

    //7. Validate Product Count
    expect(await cart.getCartItems()).toBe(2);

    //8. Validate Product Name
    expect(await cart.getProductName(1)).toContain('Tshirt');

    //9. Validate Product Quantity
    expect(await cart.getProductQuantity(0)).toContain("1");








})