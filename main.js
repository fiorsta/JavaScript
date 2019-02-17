new Vue({
    el: '#app',
    data: {
        products: [],
        productsToAdd: [
            {
                "img": 'https://placehold.it/200x150',
                "id_product": 123,
                "product_name": "Ноутбук",
                "price": 45600,
            },
            {
                "img": 'https://placehold.it/200x150',
                "id_product": 124,
                "product_name": "Mouse",
                "price": 600,
            },
            {
                "img": 'https://placehold.it/200x150',
                "id_product": 125,
                "product_name": "Keyboard",
                "price": 1600,
            }
        ],
        countGoods: 0,
        amount: 0
    },
    mounted() {
        that = this;
        fetch('getCart.json')
            .then(result => result.json())
            .then(data => {
                that.products = data.contents;
                this.countGoods = data.countGoods;
                this.amount = data.amount
            });
    },
    /*computed: {
        getCountGoods: function () {
            return this.countGoods
        },
        getAmount: function () {
            return this.amount
        }
    },*/
    methods: {
        addToCart: function (element) {
            let productId = +element.getAttribute('data-id');
            let find = this.products.find(product => product.id_product === productId);
            if (find) {
                find.quantity++;
                this.countGoods++;
                this.amount += find.price;
            } else {
                let product = {
                    id_product: productId,
                    price: +element.getAttribute('data-price'),
                    product_name: element.getAttribute('data-title'),
                    quantity: 1
                };
                this.products.push(product);
                this.amount += product.price;
                this.countGoods += product.quantity
            }
        },
        removeOfCart: function (element) {
            let productId = +element.getAttribute('data-id');
            let find = this.products.find(product => product.id_product === productId);
            let index = this.products.indexOf(find);
            if (find) {
                find.quantity--;
                //если больше таких элементов в корзине нет, удаляем его из массива товаров корзины
                if (find.quantity == 0) {
                    this.products.splice(index, 1);
                }
                this.countGoods--;
                this.amount -= find.price
            }
        } //removeOfCart
    } //methods
});
