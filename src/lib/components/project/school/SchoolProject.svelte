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
		// 'Fall 2023',
		// 'Spring 2024'
	];
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-extralight">SCHOOL PROJECTS & LOGISTICS</h1>
	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	{#each semesters as semester, index}
		<Folder name={semester} files={schoolProjects[index]} expanded />
	{/each}
</div>
