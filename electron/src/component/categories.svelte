<script>
    export let categoryScores = null;

    let categories = {
        "statistics" : {
            "name": "General statistics",
            "quality": "pass"
        },
        "base-sequence-quality" : {
            "name": "Per-base sequence quality",
            "quality": "pass"
        },
    }

    console.log(Object.entries(categories))

</script>

<div>
    {#each Object.entries(categories) as cat, index}
        <div>
            <h3>{cat[1].name}</h3>
            <h3>{cat[1].quality}</h3>
        </div>
    {/each}
</div>

<style lang='scss'>

</style>
