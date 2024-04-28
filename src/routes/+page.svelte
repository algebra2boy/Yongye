<script lang="ts">
	import { Intro, Education, Work, Project } from '$lib/components/index.js';

	type ComponentOptions = typeof Intro | typeof Education | typeof Work | typeof Project

	type ComponentOrder = {
		[key: string]: ComponentOptions
	}

	const componentOrder: ComponentOrder = {
		'1': Intro,
		'2': Education,
		'3': Work,
		'4': Project
	}
</script>

{#each Object.keys(componentOrder) as key}
	<svelte:component this={componentOrder[key]} />
{/each}