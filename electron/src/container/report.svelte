<script>
    import Categories from '../component/categories.svelte';
    export let data;
</script>

<div class="report-container">
    <Categories categoryScores={[]} />
    {JSON.stringify(data)}
</div>

<style lang="scss">
    .report-container {
        display: grid;
        grid-template-columns: 1fr 5fr;
        grid-template-rows: 1fr;
    }
</style>
