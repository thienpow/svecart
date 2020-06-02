<script>
  import { onDestroy } from "svelte";
  import cartItems from "../../stores/cart-store.js";
  import { timer } from "../../timer-store.js";
  import CartItem from "./CartItem.svelte";

  const unsubscribe = timer.subscribe(count => {
    //console.log("Cart: " + count);
  });

    onDestroy(() => {
      if (unsubscribe) {
        unsubscribe();
      }
    });
</script>

<style>
</style>

<section>


  <div class="mt-110 mb-110">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 col-lg-8 mx-auto">
                <div class="section-title text-center mb-80">
                    <h2>Cart</h2>
                    <p>Check your orders and press Checkout.</p>
                </div>
            </div>
        </div>
        <br />

          {#each $cartItems as item (item.id)}
            <CartItem id={item.id} title={item.title} price={item.price} />
          {:else}
            <p>No items in cart yet!</p>
          {/each}
    </div>
  </div>

</section>
