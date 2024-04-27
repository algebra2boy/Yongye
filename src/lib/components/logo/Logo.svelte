<script lang="ts">
	import { logoData, type Brand } from './logoData.js';
	export let brand: Brand = 'github';

	const logo = logoData[brand];
	const imageUrl = logo.imageURL;
	const websiteUrl = logo.websiteURL;
</script>

{#if websiteUrl}
	<a href={websiteUrl}>
		<img src={imageUrl} alt={imageUrl} />
	</a>
{:else}
	<img src={imageUrl} alt={imageUrl} />
{/if}
