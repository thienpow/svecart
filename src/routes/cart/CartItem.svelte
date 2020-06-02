<script>
  import cartItems from "../../stores/cart-store.js";
  import { products } from "../../stores/products-store.js";
  import Button from 'sveltestrap/src/Button.svelte'

  export let title;
  export let price;
  export let id;

  function removeFromCart() {
    cartItems.removeItem(id);
  }
</script>

<style>
  
.price-header h4 {
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1em;
    color: #30323d;
    font-family: 'Poppins', sans-serif;
}


.price-header {
    position: relative;
    margin-bottom: 25px;
    border-bottom: 1px solid #f6f2fe;
    padding-bottom: 25px;
    margin-bottom: 35px;
}

.price-header:before {
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    background: #1a2b3c;
    right: 0;
    bottom: -3px;
    border-radius: 100%;
}

.price-header:after {
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    background: #1a2b3c;
    left: 0;
    bottom: -3px;
    border-radius: 100%;
}

.price-header h2 {
    font-size: 2em;
    color: #ff60a3;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    transition: all .3s;
}

.price-header h2 > span.sep {
    font-size: .5em;
    color: #30323d;
}

.price-header h2 > span {
    font-size: .5em;
    color: #30323d;
}


.btn-type-5 {
background: transparent;
    border: 2px solid #ff60a3;
    color: #1a2b3c;
    width: 90%;
    max-width: 160px;
    font-size: 1em;
    font-weight: 500;
    padding: 10px 20px;
    transition: all .3s;
    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
}

</style>

<section style="text-align: center;">

    <div class="price-header container">
      <div class="row">
        <div class="col-6">

    <h4>{title}</h4>
    <h2>RM{price}<span class="sep">/</span><span>&nbsp;box</span></h2>

        </div>
        <div class="col">

    <button class="btn btn-type-5" on:click={removeFromCart}>Remove</button>

        </div>
      </div>
    </div>
      
</section>