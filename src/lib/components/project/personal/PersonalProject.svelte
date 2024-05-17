<script lang="ts">
	import { sortedProjects } from './personalProjectData.js';
	import Logo from '../../logo/Logo.svelte';
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-normal mb-2">Projects</h1>

	{#each sortedProjects as { name, description, logo }}
		<div id={name} class="project-entry">
			<!-- when it is on smaller size (md:), use flex-row and flex-wrap -->
			<!-- justify-between to push the logo and date to the other side -->
			<div
				class="project-info flex flex-col justify-between items-start md:flex-row md:flex-wrap sm:flex-row sm:flex-wrap py-0.5 pl-0.5"
			>
				<div class="project-details flex flex-row">
					<a class="flex items-center pr-0.5" href={`/project/personal/${name}`}>
						<span class="font-medium text-sm underline decoration-gray-900/30 hover:text-gray-900">
							{name + ': ' + description}
						</span>
					</a>
				</div>
				<div class="programming-stack flex flex-row space-x-0.5 items-center mt-1">
					{#each logo as l}
						<Logo brand={l} />
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
