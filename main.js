$(document).ready(() => {
    //Товары
    let product1 = new Product(123, 'Ноутбук', 45600);
    let product2 = new Product(124, 'Mouse', 600);
    let product3 = new Product(125, 'Keyboard', 1600);

    // Корзина
    let cart = new Cart('getCart.json');

    // Добавление товара
    $('.buy-btn').click(e => {
        cart.addProduct(e.target);
    });

    // Удаление товара из корзины
    $('#cart').on('click', '.del-btn', e => {
        cart.removeProductOfCart(e.target);
    });

    //Отзывы
    let review = new Feedback('feedback.json');

    let review1 = new Review(5, 'Mary', 'new text', false);
    let review2 = new Review(6, 'Ann', 'new text', false);
    let review3 = new Review(7, 'John', 'new text', false);

    // Одобрить отзыв
    $('#reviews').on('click', '.approve-btn', e => {
        review.approveReview(e.target);
    });

    // Отклонить отзыв
    $('#reviews').on('click', '.notApprove-btn', e => {
        review.banReview(e.target);
    });

});
