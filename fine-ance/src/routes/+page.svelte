<script>
    import { Category } from '$helpers/category.js';
    import CategoryCont from '$components/category.svelte'

    let categories = [];

    const add_category = () => {
        let name = prompt("Please name the new category:")
        let c = new Category(name);
        categories.push(c);
        categories = categories;
    }
    
</script>

<div id="add_category" class="button" on:click={add_category}>
    Add a category
</div>

<div class="container">
    {#each categories as c}
        <CategoryCont cat={c} />
    {/each}
</div>