
<script>

	import Products from '../components/Products.svelte';

    export let user

</script>


<section>

    <h1> My Store </h1>

    <Products uid={user.uid} />

</section>