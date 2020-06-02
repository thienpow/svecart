<script>
  import cartItems from "../../stores/cart-store.js";
  import Button from 'sveltestrap/src/Button.svelte'
  import { goto } from '@sapper/app';

  export let id;
  export let title;
  export let price;
  export let description;

  function addToCart() {
    // cartItems.set([]);
    cartItems.addItem({ id: id, title: title, price: price });
    goto('cart');
  }
</script>

<style>

  .product {
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "Roboto Slab", serif;
    margin: 0;
  }

  h2 {
    font-size: 3rem;
    margin: 0;
    color: #df4529dc;
  }

  p {
    margin: 0;
  }

</style>

<div class="product">
  <div>
    <h1>{title}</h1>
    <h2>RM {price}</h2>
    <p>{description}</p>
  </div>
  <div>
    <Button color="success" size="sm" on:click={addToCart}>Add to Cart</Button>
  </div>
</div>
