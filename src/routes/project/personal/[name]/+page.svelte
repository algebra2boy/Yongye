<script lang="ts">
	import Logo from '$lib/components/logo/Logo.svelte';
	import { convertDateToString } from '$lib/utils/date';
	import { sortedProjects } from '$lib/components/project/personal/personalProjectData';
	import README from '$lib/components/project/personal/README.svelte';

	export let data;

	// whenever route changes that causes refetching, these variables should be recreated
	$: ({ name, description, logo, startDate, endDate, githubLink } = data);

	const projectNames = sortedProjects.map((p) => p.name);

	// prevName and nextName relies on "name" reactivity
	$: prevName = projectNames[projectNames.indexOf(name) - 1];
	$: nextName = projectNames[projectNames.indexOf(name) + 1];
</script>

<div id={name} class="rounded-lg p-4">
	<div class="flex justify-between items-center mb-3">
		<h1 class="text-xl font-bold text-gray-900">{name}</h1>
		<button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-2 rounded">
			<a href="/" class="flex">
				<img src="/icons/home.svg" alt="Home Page" class="px-0.5" />
				<span>Home</span>
			</a>
		</button>
	</div>

	<div class="flex mb-3">
		<h2 class="text-lg font-semibold text-gray-700">
			{convertDateToString(startDate)} - {convertDateToString(endDate)}
		</h2>
	</div>

	<div class="flex items-center mb-3 space-x-2">
		<h3 class="text-sm font-medium text-gray-600">Tech Stack:</h3>
		{#each logo as l}
			<Logo brand={l} />
		{/each}
	</div>

	<div class="flex items-center mb-3">
		<span class="text-sm font-medium text-gray-600">GitHub: </span>
		<span>&nbsp;</span>
		{#if githubLink}
			<a href={githubLink} class="hover:text-blue-600 underline break-all" title={githubLink}
				>{githubLink}</a
			>
		{:else}
			<span class="text-gray-500">Private</span>
		{/if}
	</div>

	<p class="text-gray-800 mb-3">Description: {description}</p>

	<hr class="border-t border-gray-300" />

	<div class="README mt-4">
		<h1 class="text-xl font-bold text-gray-900">README</h1>
		<div class="text-gray-700 mt-2">
			<README {name} />
		</div>
	</div>

	<div class="flex flex-row mt-5 justify-center items-center gap-3">
		<button
			class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
			disabled={!prevName}
			class:disable={!prevName}
		>
			{#if prevName}
				<a href="/project/personal/{prevName}">Prev</a>
			{:else}
				<span>Prev</span>
			{/if}
		</button>
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			disabled={!nextName}
			class:disable={!nextName}
		>
			{#if nextName}
				<a href="/project/personal/{nextName}">Next</a>
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
</style>
