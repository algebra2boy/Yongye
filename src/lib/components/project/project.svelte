<script lang="ts">
	import { projects } from './project.js';
	import Logo from '../logo/Logo.svelte';

	function convertDateToString(date: Date) {
		return date.toLocaleString('default', { month: 'long' }) + ' ' + date.getFullYear();
	}
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-light">PROJECTS</h1>
	<hr class="divide-solid border-slate-500 mt-1 border-1" />
	{#each projects as { name, description, startDate, endDate, logo }}
		<div id={name} class="project-entry">
			<!-- when it is on smaller size (md:), use flex-row and flex-wrap -->
			<div
				class="project-info flex flex-col md:flex-row md:flex-wrap sm:flex-row sm:flex-wrap items-center py-2"
			>
				<div class="project-details flex-1 min-w-0">
					<a class="flex items-center pr-0.5" href={`/project/${name}`}>
						<p class="font-medium underline">{name}</p>
						<span>:&nbsp;</span>
						<p class="font-light underline">{description}</p>
					</a>
				</div>
				<div class="flex flex-row items-center">
					<div class="programming-stack">
						{#each logo as l}
							<Logo brand={l} />
						{/each}
					</div>
					<div class="date-info ml-1">
						<p>{convertDateToString(startDate)}-{convertDateToString(endDate)}</p>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
