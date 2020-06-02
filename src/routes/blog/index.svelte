<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>

	import Breadcrumb from "sveltestrap/src/Breadcrumb.svelte";
	import BreadcrumbItem from "sveltestrap/src/BreadcrumbItem.svelte";
	
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<Breadcrumb>
  <BreadcrumbItem>
    <a href=".">Home</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Blog</BreadcrumbItem>
</Breadcrumb>


<section>

  <div class="mt-110 mb-110">
    <div class="container">
        <div class="row">
            <div class="col-xl-8 col-lg-8 mx-auto">
                <div class="section-title text-center mb-80">
                    <h2>Recent Posts</h2>
                    <p>Customers reviews and our news.</p>
                </div>
            </div>
        </div>
        <br />

				<ul>
					{#each posts as post}
						<!-- we're using the non-standard `rel=prefetch` attribute to
								tell Sapper to load the data for the page as soon as
								the user hovers over the link or taps it, instead of
								waiting for the 'click' event -->
						<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
					{/each}
				</ul>
    </div>
  </div>
</section>