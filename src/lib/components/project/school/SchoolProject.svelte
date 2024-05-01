<script lang="ts">
	import Folder from './Folder.svelte';
	import { schoolProjects } from './schoolProjectData.js';

	const semesters: string[] = [
		'Fall 2021',
		'Spring 2022',
		'Summer 2022',
		'Fall 2022',
		'Spring 2023',
		'Summer 2023',
		'Fall 2023',
		'Spring 2024'
	];

	let isSemesterFolderExpanded: boolean = false;

	const toggleSemesterFolder = () => (isSemesterFolderExpanded = !isSemesterFolderExpanded);
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-extralight">SCHOOL PROJECTS & LOGISTICS</h1>
	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<div class="flex flex-row items-center gap-1 mt-1.5">
		<button
			class="text-xs hover:bg-blue-300 text-black border-2 border-black font-medium py-0.5 px-1 rounded focus:outline-none focus:shadow-outline"
			on:click={toggleSemesterFolder}
		>
			Open Folder
		</button>
		<p class="text-xs items-center">Click on folders and README.md for more details.</p>
	</div>

	{#each semesters as semester, index}
		<Folder name={semester} files={schoolProjects[index]} expanded={isSemesterFolderExpanded} />
	{/each}
</div>
