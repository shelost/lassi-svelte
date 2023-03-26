<script>

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function remove() {
		dispatch('remove', { id });
	}

	function toggleStatus() {
        let newStatus = !active;
		dispatch('toggle', {
            id,
            newStatus
        });
    }

    export let name;
    export let active;
    export let id;
    export let price;
</script>

<div class = 'card'>

    {#if active}

        <span class="is-complete">{ name }</span>
        <button on:click={toggleStatus}> ✔️ </button>
        <span> {id} </span>
        <span> {price} </span>

    {:else}

        <span class="is-complete">{ name }</span>
        <button on:click={toggleStatus}> ✔️ </button>

    {/if}

    <button on:click={remove}> 🗑 </button>

</div>


<style>

    .card {
        background: #fff7e0;
        background: white;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 15px 15px 30px rgba(0,0,0,0.05), -15px -15px 30px rgba(255,255,255,0.5);
        box-shadow: 0px 15px 50px rgba(0,0,0,0.08);
        padding: 10px;
        margin: 20px;
        border: 2px solid black;
    }

</style>