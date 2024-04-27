<script lang="ts">
	import { logoData, type Brand } from '$lib/components/logo/logoData';
	import Logo from '$lib/components/logo/Logo.svelte';

	const brands = Object.keys(logoData) as Brand[];
</script>

<div class="logo-house flex flex-wrap gap-1.5">
	{#each brands as brand}
		{#if !logoData[brand].isPersonalRelated}
			<Logo {brand} size="large" />
		{/if}
	{/each}
</div>
