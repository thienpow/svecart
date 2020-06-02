<script>

	import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
	import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";

	import Cart from "./cart/Cart.svelte";

</script>
<style>
</style>

<svelte:head>
	<title>AADI EyeCare - Cart</title>
</svelte:head>

<Breadcrumb >
  <BreadcrumbItem><a href=".">Home</a></BreadcrumbItem>
  <BreadcrumbItem active>Cart</BreadcrumbItem>
</Breadcrumb>

  
<Cart />