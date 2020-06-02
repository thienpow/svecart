<script>
  import cartItems from "../../stores/cart-store.js";
  import { goto } from '@sapper/app';


  export let id;
  export let title;
  export let price;
  export let descs = ['abc' , 'eee'];

  function addToCart() {
      // cartItems.set([]);
      cartItems.addItem({ id: id, title: title, price: price });
      goto('cart');
  }
  
</script>
<style>

.single-price-area {
    background: transparent;
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    padding: 6% 10%;
    position: relative;
    overflow: hidden;
}

.single-price-area.active .price-header h2 {
    color: #7142f7;
}

.single-price-area.active {
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.15);
}

.single-price-area.active .single-price-bg{
    opacity: 0.7;
    visibility: visible;
    bottom: -10px;
}

.single-price-area.active .price-header:before,
.single-price-area.active .price-header:after {
    background: #ff60a3;
}

.single-price-area.active .btn-type-5 {
    background-image: -moz-linear-gradient(178deg, rgb(255, 153, 165) 0%, rgb(255, 96, 163) 100%);
    background-image: -webkit-linear-gradient(178deg, rgb(255, 153, 165) 0%, rgb(255, 96, 163) 100%);
    background-image: -ms-linear-gradient(178deg, rgb(255, 153, 165) 0%, rgb(255, 96, 163) 100%);
    color: #fff;
}

.single-price-area.active .btn-type-5 i {
    color: #fff;
    margin-right: 0;
    opacity: 1;
    visibility: visible;
}

.single-price-bg {	
    background-position: center center;
    background-size: cover;
    background-attachment: inherit;
    position: absolute;
    height: 100%;
    background-image: url('../../assets/img/prictable-bg.png');
    background-repeat: no-repeat;
    left: 0;
    right: 0;
    bottom: -30px;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
	z-index: -1;	
}

.single-price-area:hover .price-header:before,
.single-price-area:hover .price-header:after {
    background: #ff60a3;
}

.single-price-area:hover {
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.15);
}

.single-price-area:hover .single-price-bg {
    opacity: 0.7;
    visibility: visible;
    bottom: -10px;
}

.single-price-area:hover .price-header h2 {
    color: #7142f7;
}

.single-price-area.active .price-header h2 {
    color: #7142f7;
}

.single-price-area.active .btn-type-5 i {
    color: #fff;
    margin-right: 0;
    opacity: 1;
    visibility: visible;
}

.btn-type-5 {
background: transparent;
    border: 2px solid #ff60a3;
    color: #1a2b3c;
    width: 220px;
    font-size: 1em;
    font-weight: 500;
    padding: 10px 20px;
    transition: all .3s;
    font-family: 'Poppins', sans-serif;
    border-radius: 30px;
}

.btn-type-5 i {
    margin-right: -18px;
    opacity: 0;
    visibility: hidden;
	transition: all .3s;
}
.btn-type-5:hover i {
	color: #fff;
    margin-right: 0;
    opacity: 1;
    visibility: visible;
}
 .btn-type-5:hover {
	background-image: -moz-linear-gradient( 178deg, rgb(255,153,165) 0%, rgb(255,96,163) 100%);
	background-image: -webkit-linear-gradient( 178deg, rgb(255,153,165) 0%, rgb(255,96,163) 100%);
	background-image: -ms-linear-gradient( 178deg, rgb(255,153,165) 0%, rgb(255,96,163) 100%);
	color: #fff;
}

.price-header h4 {
    font-size: 1.2em;
    font-weight: 500;
    text-transform: capitalize;
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

.price-item-list ul li {
    width: 100%;
    font-size: .8em;
    margin-bottom: 2%;

}

.price-item-list ul li:last-child {
    margin-bottom: 0px;
}

</style>


  <div class="col-xl-4 col-lg-4" style="visibility: visible;">
      <div class="single-price-area text-center mb-30">
      <div class="single-price-bg"></div>
          <div class="price-header">
              <h4>{title}</h4>
              <h2>RM{price}<span class="sep">/</span><span>&nbsp;box</span></h2>
          </div>
          <div class="price-item-list">
              <ul>
                {#each descs as desc}
                  <li>{desc}</li>
                {/each}
              </ul>
          </div>
          <br />
          <div class="price-btn mt-35">
              <button class="btn btn-type-5" on:click|preventDefault={() => addToCart()}><i class="fa fa-check"></i>ORDER NOW</button>
          </div>
      </div>
  </div>
