<script lang="ts">
	import { projects } from './project.js';
	import Logo from '../logo/Logo.svelte';

	function convertDateToString(date: Date) {
		return date.getMonth() + '/' + date.getFullYear();
	}
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-extralight">PROJECTS</h1>
	<hr class="divide-solid border-slate-500 mt-1 border-1" />
	{#each projects as { name, description, startDate, endDate, logo }}
		<div id={name} class="project-entry">
			<!-- when it is on smaller size (md:), use flex-row and flex-wrap -->
			<!-- justify-between to push the logo and date to the other side -->
			<div
				class="project-info flex flex-col justify-between items-start md:flex-row md:flex-wrap sm:flex-row sm:flex-wrap py-0.5 pl-0.5"
			>
				<div class="project-details flex flex-row">
					<a class="flex items-center pr-0.5" href={`/project/${name}`}>
						<span class="font-light text-sm underline">
							{name + ': ' + description}
						</span>
					</a>
				</div>
				<div class="flex flex-row">
					<div class="programming-stack flex flex-row space-x-0.5">
						{#each logo as l}
							<Logo brand={l} />
						{/each}
					</div>
					<div class="date-info ml-1">
						<p class="font-extralight italic">
							{convertDateToString(startDate)}-{convertDateToString(endDate)}
						</p>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
