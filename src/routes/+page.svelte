<script lang="ts">
	import { Intro, Education, Work, Project, Skill } from '$lib/components/index.js';

	type ComponentOptions = typeof Intro | typeof Education | typeof Work | typeof Project;

	type ComponentOrder = {
		[key: string]: ComponentOptions;
	};

	const componentOrder: ComponentOrder = {
		'1': Intro,
		'2': Education,
		'3': Work,
		'4': Project,
		'5': Skill
	};
</script>

{#each Object.keys(componentOrder) as key}
	<svelte:component this={componentOrder[key]} />
{/each}
