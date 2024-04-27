<script lang="ts">
	import { projects } from './project.js';
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-light">PROJECTS</h1>
	<hr class="divide-solid border-slate-500 mt-1 border-1" />
	{#each projects as { name, description, startDate, endDate, logo }}
		<div class="flex justify-between items-center py-2">
			<a id={name} class="flex items-center underline" href={`/project/${name}`}>
				<p class="font-medium">{name}</p>
				<span class="pr-0.5">:</span>
				<p class="font-light">{description}</p>
			</a>
			<div class="">
				{#each logo as l}
					<p>{l}</p>
				{/each}
			</div>
			<div class="flex items-center font-light">
				<p>{startDate.toLocaleString('default', { month: 'long' })} {startDate.getFullYear()}</p>
				<span>-</span>
				<p>{endDate.toLocaleString('default', { month: 'long' })} {endDate.getFullYear()}</p>
			</div>
		</div>
	{/each}
</div>
