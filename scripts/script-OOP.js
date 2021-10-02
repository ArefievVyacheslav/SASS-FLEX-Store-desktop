'use strict';

class Products {
    constructor(img, name, price) {
        this.img = img;
        this.name = name;
        this.price = price;
    }
    render() {
        return `<div class="item">
                    <a href="single-page.html" class="product_cart">
                        <img src=${this.img} class="icon" alt="product icon">
                        <span class="product_desc">${this.name}</span>
                        <span class="product_price">${this.price}</span>
                    </a>
                    <div class="add-box">
                        <a class="add-to-cart" href="#">
                            <img src="img/icon_cart.svg" alt="add to cart">
                            <span>Add to Cart</span>
                        </a>
                    </div>
                </div>`;
    }
}

const listItems = [
    { img: 'img/product_1.jpg', name: 'Mango people T-Shirt', price: '$52' },
    { img: 'img/product_2.jpg', name: 'T-Shirt Mango people', price: '$76' },
    { img: 'img/product_3.jpg', name: 'Mango T-Shirt people', price: '$85' },
    { img: 'img/product_4.jpg', name: 'Mango people T-Shirt', price: '$35' },
    { img: 'img/product_5.jpg', name: 'Mango people T-Shirt', price: '$28' },
    { img: 'img/product_6.jpg', name: 'Mango people T-Shirt', price: '$73' },
    { img: 'img/product_7.jpg', name: 'Mango people T-Shirt', price: '$84' },
    { img: 'img/product_8.jpg', name: 'Mango T-Shirt people', price: '$103' }
];

let readyProducts = [];

listItems.forEach((product) => {
    let readyProduct = new Products(product.img, product.name, product.price).render()
    readyProducts.push(readyProduct);
});

document.querySelector('.products_block').innerHTML = readyProducts.toString().replace(/,/g, '');