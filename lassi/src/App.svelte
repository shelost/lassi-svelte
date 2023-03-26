
<script>
	import Profile from './Profile.svelte';
	import Products from './components/Products.svelte';

	import { auth, googleProvider } from './firebase';
	import { authState } from 'rxfire/auth';
	import { signInWithPopup } from "firebase/auth";

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

	export let url = "";

    function login() {
       signInWithPopup(auth, googleProvider);
    }

</script>

<section>

	<img src = '../../assets/lassi-text.svg' alt = 'logo'>
	<h2> The Refreshing Solution </h2>


	<!--
	<Router url="{url}">
		<nav>
		  <NavLink to="/">Home</NavLink>
		  <NavLink to="store">Store</NavLink>
		  <NavLink to="profile">Blog</NavLink>
		</nav>
		<div>
		  <Route path="store" component="{Store}" />
		  <Route path="blog/*" component="{Page}" />
		  <Route path="/" component="{Page}" />
		</div>
	  </Router>
	  -->


	{#if user}
		<Profile {...user} />
		<button on:click={ () => auth.signOut() }>Logout</button>
		<Products uid={user.uid} />

	{:else}
		<button on:click={login}>
			Signin with Google
		</button>
	{/if}


</section>


<style>

	section{
		margin: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: fit-content;
		background: #fff7e0;
	}

</style>