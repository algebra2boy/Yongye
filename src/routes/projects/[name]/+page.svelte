<script lang="ts">
	import Logo from '$lib/components/logo/Logo.svelte';
	import { convertDateToString } from '$lib/utils/date';
	import { personalProjects } from '$lib/components/project/personalProjectData.js';
	import README from '$lib/components/project/README.svelte';

	export let data;

	// whenever route changes that causes refetching, these variables should be recreated
	$: ({ name, description, logo, startDate, endDate, githubLink, readme } = data);

	const projectNames = personalProjects.map((p) => p.name);

	// prevName and nextName relies on "name" reactivity
	$: prevName = projectNames[projectNames.indexOf(name) - 1];
	$: nextName = projectNames[projectNames.indexOf(name) + 1];
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={name} />
</svelte:head>

<div id={name} class="rounded-lg p-2">
	<small class="flex flex-row items-center gap-2 mb-3">
		<a href="/projects">← Projects</a>
	</small>

	<div class="flex justify-between items-center mb-3">
		<h1 class="text-xl font-bold text-gray-900">{name}</h1>
	</div>

	<div class="flex mb-3">
		<h2 class="text-lg font-semibold text-gray-700">
			{convertDateToString(startDate)} - {convertDateToString(endDate)}
		</h2>
	</div>

	<div class="flex items-center mb-3 gap-2 flex-wrap">
		<h3 class="text-sm font-medium text-gray-600">Tech Stack:</h3>
		{#each logo as l}
			<Logo brand={l} />
		{/each}
	</div>

	<div class="flex items-center mb-3">
		<span class="text-sm font-medium text-gray-600">GitHub: </span>
		<span class="flex-shrink-0">&nbsp;</span>
		{#if githubLink}
			<a
				href={githubLink}
				class="hover:text-blue-600 underline break-all flex-grow min-w-0"
				title={githubLink}>{githubLink.split('github.com/')[1]}</a
			>
		{:else}
			<span class="text-gray-500">Private</span>
		{/if}
	</div>

	<p class="text-sm font-medium text-gray-600 mb-3">Description: {description}</p>

	<hr class="border-t border-gray-300" />

	<div class="README flex flex-row mt-3">
		<README {readme} />
	</div>

	<div class="flex justify-center items-center gap-3 mb-6 mt-4">
		<button
			class="bg-green-500 text-white font-bold py-2 px-4 rounded"
			disabled={!prevName}
			class:disable={!prevName}
			class:hover={prevName}
		>
			{#if prevName}
				<a href="/projects/{prevName}" data-sveltekit-replacestate>Prev</a>
			{:else}
				<span>Prev</span>
			{/if}
		</button>
		<button
			class="bg-blue-500 text-white font-bold py-2 px-4 rounded"
			disabled={!nextName}
			class:disable={!nextName}
			class:hover={nextName}
		>
			{#if nextName}
				<a href="/projects/{nextName}" data-sveltekit-replacestate>Next</a>
			{:else}
				<span>Next</span>
			{/if}
		</button>
	</div>
</div>

<style lang="postcss">
	.disable {
		@apply bg-gray-400;
	}

	.hover {
		@apply hover:bg-green-500;
	}
</style>
