<script lang="ts">
	import { personalProjects } from './personalProjectData.js';
	import Logo from '../../logo/Logo.svelte';
	import type { Brand } from '$lib/components/logo/index.js';
	import { convertDateToString } from '$lib/utils/date.js';

	const projectTechStack = Array.from(
		new Set(personalProjects.map((project) => project.logo).flat())
	).sort();

	let selectedTechStack = 'Tech Stack';

	$: filteredProjects =
		selectedTechStack === 'Tech Stack'
			? personalProjects
			: personalProjects.filter((project) => project.logo.includes(selectedTechStack as Brand));
</script>

<div class="pt-2 pl-2 rounded-lg">
	<div class="flex flex-row items-center gap-2 mb-2">
		<h1 class="text-xl font-normal">Projects</h1>
		<select class="select select-bordered select-xs border-0 shadow-sm outline outline-neutral-500 -mb-1" bind:value={selectedTechStack}>
			<option selected>Tech Stack</option>
			{#each projectTechStack as tech}
				<option value={tech}>{tech}</option>
			{/each}
		</select>
	</div>

	{#each filteredProjects as { name, description, logo, startDate }}
		<div id={name} class="project-entry">
			<div
				class="project-info flex flex-col justify-between items-start md:flex-row md:flex-wrap sm:flex-row sm:flex-wrap py-0.5 pl-0.5"
			>
				<div class="project-details flex flex-row">
					<!-- adding data-sveltekit-reload will cause a full-page navigation when the link is clicked -->
					<a class="flex items-center pr-0.5" href={`/project/personal/${name}`} data-sveltekit-reload>
						<span class="font-medium text-sm underline decoration-gray-900/30 hover:text-gray-900">
							{name + ': ' + description}
						</span>
					</a>
				</div>
				<div class="flex flex-row space-x-0.5 items-center mt-1">
					{#each logo as l}
						<Logo brand={l} />
					{/each}
					<p class="text-sm font-mono tracking-wide ml-2">
						{convertDateToString(startDate)}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>
