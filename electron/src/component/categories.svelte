<script>
    import Icon from './icon.svelte';


    export let categoryScores = null;

    let categories = {
        "statistics" : {
            "name": "General statistics",
            "quality": "pass"
        },
        "base-sequence-quality" : {
            "name": "Per-base sequence quality",
            "quality": "fail"
        },
        "other" : {
            "name": "whether i like it",
            "quality": "warn"
        },
    }

    console.log(Object.entries(categories))

</script>

<div class="category-container">
    {#each Object.entries(categories) as cat, index}
        <button class="category">
            <Icon type={cat[1].quality} />
            <h3>{cat[1].name}</h3>
        </button>
    {/each}
</div>

<style lang='scss'>
    .category-container {
        padding: 0em 1em;
        box-sizing: border-box;
    }
    .category {
        width: 100%;
        padding: 2em 1em;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.5em;
        border-bottom: solid 1px #aaa;
        box-sizing: border-box;
        transition: all 0.2s ease;
    }
    .category:hover {
        background: #efefef;
        cursor: pointer;
    }
    .category:active {
        background: #dedede;
        cursor: pointer;
    }

    .category h3 {
        margin-block: 0;
        white-space: nowrap;
        user-select: none;
    }
</style>
