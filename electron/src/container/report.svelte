<script>
    import Categories from '../component/categories.svelte';
    import General from '../element/general.svelte';
    import { report } from '../store';
</script>

<div class="report-container">
    <Categories categoryScores={[]} />
    <div>
        <General />
    </div>
</div>

<style lang="scss">
    .report-container {
        display: grid;
        grid-template-columns: 400px 70%;
        box-sizing: border-box;
        overflow: hidden;
    }
</style>
