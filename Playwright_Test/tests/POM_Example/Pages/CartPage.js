export class CartPage
{
    constructor(page)
    {
        this.page = page;
        this.cartItems = this.page.locator('.cart_product');
        this.productName = this.page.locator('.cart_description h4 a')
        /*//td[@class='cart_description']//h4//a*/
        this.productPrice = this.page.locator('.cart_price p');
        this.productQuantity = this.page.locator('.cart_quantity button');
        this.produtTotalPrice = this.page.locator('.cart_total p');
        
        this.shoppingCartText = this.page.locator("//li[text()='Shopping Cart']");
    }
    async isCartPageLoaded()
    {
        return await this.shoppingCartText.isVisible();
    }
    async getCartItems()
    {
        return await this.cartItems.count();
    }
    async getProductName(index)
    {
        return await this.productName.nth(index).textContent();
    }
    async getProductQuantity(index)
    {
        return await this.productQuantity.nth(index).textContent();
    }
    async getProductPrice(index)
    {
        return await this.productPrice.nth(index).textContent();
    }

}