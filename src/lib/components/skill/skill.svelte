<script lang="ts">
	import { techStack } from '../logo/logoData';
	import type { Brand } from '../logo/';
	import Logo from '../logo/Logo.svelte';

	const programmingLanguages = Object.keys(techStack)
		.sort()
		.filter((stack) => techStack[stack as Brand].isProgrammingLanguage) as Brand[];

	const tools = Object.keys(techStack)
		.sort()
		.filter((stack) => techStack[stack as Brand].isTechTool) as Brand[];
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
