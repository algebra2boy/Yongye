<script lang="ts">
	import { projects } from './project.js';
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-light">PROJECTS</h1>
	<hr class="divide-solid border-slate-500 mt-1 border-1" />
	{#each projects as { name, description, startDate, endDate, logo }}
		<div class="flex justify-between items-center py-2">
			<a id={name} class="flex items-center gap-2" href={`/project/${name}`}>
				<p class="font-medium underline">{name}</p>
				<span class="underline">:&nbsp;</span>
				<p class="font-light underline">{description}</p>
			</a>
			<div class="flex items-center gap-2">
				<!-- <p>{startDate.getMonth()} {startDate.getYear()}</p>
                <span>-&nbsp;</span>
                <p>{startDate.getMonth()} {startDate.getYear()}</p> -->
			</div>
		</div>
	{/each}
</div>
