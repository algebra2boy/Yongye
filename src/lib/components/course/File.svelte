<script lang="ts">
	interface FileProps {
		name: string; // ex. basicSelect.sql
		path: string; // ex. Summer2022/CS 345: Data Management/basicSelect.sql
	}

	let { name, path }: FileProps = $props();

	// "happy.gif" -> "gif"
	let type = $derived(name.slice(name.lastIndexOf('.') + 1));
</script>

{#if type === 'md' || type === 'pdf'}
	<a href={path}>
		<span style="background-image: url(/icons/{type}.svg)">{name}</span>
	</a>
{:else}
	<span style="background-image: url(/icons/{type}.svg)">{name}</span>
{/if}

<style lang="postcss">
	span {
		@apply py-0 px-6 bg-no-repeat bg-[position:0_0.1em] bg-[size:1em_1em];
	}
</style>
