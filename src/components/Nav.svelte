<script>
	import Collapse from 'sveltestrap/src/Collapse.svelte';
	import Navbar from 'sveltestrap/src/Navbar.svelte';
	import NavbarToggler from 'sveltestrap/src/NavbarToggler.svelte';
	import NavbarBrand from 'sveltestrap/src/NavbarBrand.svelte';
	import Nav from 'sveltestrap/src/Nav.svelte';
	import NavItem from 'sveltestrap/src/NavItem.svelte';
	import NavLink from 'sveltestrap/src/NavLink.svelte';

	let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
	}
	
</script>

<Navbar color="light" light expand="md">
  <NavbarBrand href="."><img src="logo.png" height="30" alt="AADI" /></NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ml-auto" navbar>
      <NavItem><NavLink href="cart"><i class="fa fa-shopping-cart" />&nbsp;Cart </NavLink></NavItem>
      <NavItem><NavLink href="blog"><i class="fa fa-rss" />&nbsp;Blog</NavLink></NavItem>
    </Nav>
  </Collapse>
</Navbar>