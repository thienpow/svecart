
<script>

    import PromoItem from './PromoItem.svelte';
    import { products } from '../../stores/products-store';
        
</script>

<style>

</style>

<section>

  <div class="mt-110 mb-110">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 col-lg-8 mx-auto">
                <div class="section-title text-center mb-80">
                    <h2>Promotions</h2>
                    <p>3 packages available. Buy more save more!</p>
                </div>
            </div>
        </div>
        <br />

        <div class="row">
            {#each $products as product (product.id)}
                <PromoItem 
                    id="{product.id}" 
                    title={product.title}
                    price={product.price}
                    descs={product.descs} />
            {/each}
        </div>

    </div>
  </div>
</section>