Vue.component('product-item', {
    props: ['prod'],
    template: `
    <div class="product">
      <img :src=prod.img>
      <div class="desc">
          <p>{{prod.product_name}}</p>
          <p>Цена <span>{{prod.price}}</span>$</p>
          <button @click="$emit('add-to-cart', $event.target)" class="buy-btn" 
          :data-id="prod.id_product"
          :data-title="prod.product_name"
          :data-price="prod.price">Купить</button>
    </div>
    </div>
   `
});

Vue.component('cart', {
    props: ['prod'],
    template: `
    <div class="cart-item" :data-product="prod.id_product">
        <p>{{prod.product_name}}</p>
        <p class="product-quantity">{{prod.quantity}}</p>
        <p class="product-price">{{prod.price}}</p>
        <button @click="$emit('remove-of-cart', $event.target)" class="del-btn"
        :data-id="prod.id_product">X</button>
    </div>
`
});
