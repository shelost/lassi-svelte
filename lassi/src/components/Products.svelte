<script>
    import Product from './Product.svelte';
    import { db } from '../firebase';
    import { collection, doc, getDocs, setDoc, where, query, onSnapshot, addDoc, deleteDoc } from "firebase/firestore";
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    // User ID passed from parent
    export let uid;

    // Form Text
    let text = 'My Product';

    // Query requires an index, see screenshot below
    const p = collection(db, "products")
    const q = query(p, where("uid", "==", uid));

    // Get products
    async function getProducts(){
        let result = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            result = [...result, doc.data()]
        });
        return result
    }

    // Update products
    onSnapshot(q, (querySnapshot) => {
        let result = [];
        querySnapshot.forEach((doc) => {

            let record = doc.data()
            record.id = doc.id

            result = [...result, record]
        });
        console.log(products)
        products = [...result]
    });

    let products = getProducts()


    // Add product
    function add() {
        const docRef = addDoc(p, {
            name: text,
            uid: uid,
            active: true,
            price: 2.00,
            discount: 1.00,
            created: Date.now()
        })
        text = ''
    }


    function updateStatus(event) {
        const { id, newStatus } = event.detail;
        db.collection('products').doc(id).update({ active: false });
    }

    function removeItem(event) {
        const { id } = event.detail;
        deleteDoc(doc(db, "products", id))
    }


</script>

<style>
    input { display: block }
</style>

<ul>

    {#await products}

        <p> Waiting...</p>

    {:then products}

        {#each products as product}

            <Product {...product} on:remove={removeItem} on:toggle={updateStatus} />

        {/each}

    {:catch}

        <p> Oops </p>

    {/await}



</ul>

<input bind:value={text}>

<button on:click={add}> Add Product </button>
