<script>
    import { onMount } from 'svelte';
    import { report } from './store';
    import Report from './container/report.svelte';

	export let name;

    onMount(() => {
        tryFastp();
        window.addEventListener("fastp-data", (e) => {
            console.log(e.detail)
            report.set(e.detail)
        })
    })

</script>

<div>
    <h1>fastpe</h1>
    {#if !report}
        <div>upload report</div>
    {/if}
    {#if report}
        <Report data={report} />
    {/if}
</div>


<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

    div {
        outline: solid 1px magenta;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>