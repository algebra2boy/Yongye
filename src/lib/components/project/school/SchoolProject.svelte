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

	let isAllSemesterFolderOpen: boolean = true;
	let isAllFileOpen: boolean = false;

	const openSemesterFolder = () => (isAllSemesterFolderOpen = !isAllSemesterFolderOpen);
	// const openAllFile = () => {
	// 	const allfolder = document.querySelectorAll('.folder');
	// 	allfolder.forEach((folder) => {
	// 		folder.classList.add('expanded');
	// 		folder.
	// 	})
	// };
 
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-extralight">SCHOOL PROJECTS & LOGISTICS</h1>
	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<div class="flex flex-row bg-blue-100">
		<button on:click={openSemesterFolder}>
			<p>Open root folder</p>
		</button>
	</div>
<!-- 
	<div class="flex flex-row bg-blue-100">
		<button on:click={openAllFile}>
			<p>Open all file</p>
		</button>
	</div> -->

	{#each semesters as semester, index}
		<Folder name={semester} files={schoolProjects[index]} expanded={isAllSemesterFolderOpen} />
	{/each}
</div>
