export class ProductPage
{
    constructor(page)
    {
        this.page = page;
        this.productHeader = this.page.locator('h2:has-text("All Products")');
        //this.page.locator('text=All Products');
        this.productCard = this.page.locator('.product-image-wrapper');
        this.addtocardBtn = this.page.locator('a:has-text("Add to cart")');
        this.continueBtn = this.page.locator('button:has-text("Continue Shopping")');
        this.cartLink = this.page.locator('[href="/view_cart"]').first();
    }

    async gotoProductPage()
    {
        await this.page.goto("https://automationexercise.com/products");
    }
    async isAllProductLoaded()
    {
         return await this.productHeader.isVisible();
    }
    async addProductToCard(index)
    {
        const product = this.productCard.nth(index);

        await product.hover();
        await product.locator('.product-overlay .add-to-cart').click();
    }     
    async clickContinueShopping()
    {
        await this.continueBtn.click();
    } 
    async clickAddToCartLink()
    {
        await this.cartLink.click();
    }


}