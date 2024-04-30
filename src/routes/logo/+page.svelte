<script lang="ts">
	import { techStack } from '$lib/components/logo/logoData';
	import type { Brand } from '$lib/components/logo/index.d.ts';
	import Logo from '$lib/components/logo/Logo.svelte';

	const brands = Object.keys(techStack) as Brand[];
</script>

<div class="logo-house flex flex-wrap gap-1.5">
	{#each brands as brand}
		{#if !techStack[brand].isPersonalRelated}
			<Logo {brand} size="large" />
		{/if}
	{/each}
</div>
