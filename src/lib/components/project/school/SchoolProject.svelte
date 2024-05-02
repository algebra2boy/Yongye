<script lang="ts">
	import Folder from './Folder.svelte';
	import { filesExpandedStore } from '$lib/stores/filesExpandedStore.js';
	import { schoolProjects } from './schoolProjectData.js';

	const semesters: string[] = [
		'Fall2021',
		'Spring2022',
		'Summer2022',
		'Fall2022',
		'Spring2023',
		'Summer2023',
		'Fall2023',
		'Spring2024'
	];

	let isSemesterFolderExpanded: boolean = false;

	const toggleSemesterFolder = () => (isSemesterFolderExpanded = !isSemesterFolderExpanded);
	const toggleAllFiles = () => filesExpandedStore.update((expanded) => !expanded);
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-extralight">SCHOOL PROJECTS & LOGISTICS</h1>
	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<div class="flex flex-row items-center gap-1 mt-1.5">
		<button
			class="text-xs hover:bg-blue-300 text-black border-2 border-black font-medium py-0.5 px-1 rounded focus:outline-none focus:shadow-outline"
			class:disable={$filesExpandedStore}
			on:click={toggleSemesterFolder}
			disabled={$filesExpandedStore}
		>
			{isSemesterFolderExpanded ? 'Close Folders' : 'Open Folders'}
		</button>
		<button
			class="text-xs hover:bg-blue-300 text-black border-2 border-black font-medium py-0.5 px-1 rounded focus:outline-none focus:shadow-outline"
			class:disable={!isSemesterFolderExpanded}
			on:click={toggleAllFiles}
			disabled={!isSemesterFolderExpanded}
		>
			{$filesExpandedStore ? 'Close Files' : 'Open Files'}
		</button>
		<p class="text-xs items-center">Click on folders and README.md for details.</p>
	</div>

	{#each semesters as semester, index}
		<Folder
			name={semester}
			files={schoolProjects[index]}
			path={'/project/school/' + semester}
			expanded={$filesExpandedStore || isSemesterFolderExpanded}
		/>
	{/each}
</div>

<style lang="postcss">
	.disable {
		@apply bg-black text-white;
	}
</style>