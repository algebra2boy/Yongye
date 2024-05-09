<script lang="ts">
	import { page } from '$app/stores';
	import type { PersonalProject } from '$lib/components/project';
	import Logo from '$lib/components/logo/Logo.svelte';
	import { convertDateToString } from '$lib/utils/date';

	const { name, description, logo, startDate, endDate, githubLink, readme } =
		$page.data as PersonalProject;

		

	
</script>

<div id={name} class="rounded-lg p-4">
	<div class="flex justify-between items-center mb-3">
		<h1 class="text-xl font-bold text-gray-900">{name}</h1>
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
			{@html readme}
		</div>
	</div>

	<div class="flex flex-row mt-5 justify-center items-center gap-3">
		<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
			Prev
		  </button>
		  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
			Next
		  </button>
	</div>
</div>
