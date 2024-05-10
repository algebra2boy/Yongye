<script lang="ts">
	import type { ComponentType } from "svelte";

	let readme: ComponentType;

	export let name: string;

    // dynamically import the README component based on the name
	$: if (name) {
		loadReadme();
	}

	async function loadReadme() {
		readme = (await import(`../personal/readme/${name}.svelte`)).default;
	}
</script>

<svelte:component this={readme} />
