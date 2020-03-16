let cart = null;

module.exports = class Cart {
    static save(prod) {
        if (cart) {

        } else {
            cart = {
                products: [],
                totalPrice: 0
            };
            prod.qty = 1;
            cart.products.push(prod);
            cart.totalPrice = prod.price;
        }
    }

    static getCart() {
        return cart;
    }
}