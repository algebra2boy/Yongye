<script lang="ts">
	import { programmingLanguages, tools } from '../logo/logoData';
	import Logo from '../logo/Logo.svelte';
</script>

<div class="pt-2 pl-2 rounded-lg">
	<h1 class="text-xl font-normal mb-2">Technical skills</h1>
	<div class="programming-language flex">
		<div class="flex flex-wrap gap-0.5 items-center">
			<p class="font-normal pr-1">Programming Languages:</p>
			{#each programmingLanguages as language}
				<Logo brand={language} />
			{/each}
		</div>
	</div>
	<div class="tech-stack flex">
		<div class="flex flex-wrap gap-0.5 items-center">
			<p class="font-normal pr-1">TechStack:</p>
			{#each tools as tool}
				<Logo brand={tool} />
			{/each}
		</div>
	</div>
</div>
