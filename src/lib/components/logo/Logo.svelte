<script lang="ts">
	import { techStack } from './logoData.js';
	import type { Brand } from './index.js';

	type Size = 'small' | 'medium' | 'large';

	interface SizeProps {
		[key: string]: string;
	}

	export let brand: Brand = 'Github';
	export let size: Size = 'small';

	const logo = techStack[brand];
	const imageUrl = logo.imageURL;
	const websiteUrl = logo.websiteURL;

	const width = { small: '18', medium: '30', large: '42' } as SizeProps;
	const height = { small: '20', medium: '30', large: '40' } as SizeProps;
</script>

{#if websiteUrl}
	<a href={websiteUrl}>
		<!-- no need to set logo for simple icon since they are fixed width -->
		<img src={imageUrl} alt={imageUrl} height={height[size]} title={websiteUrl} />
	</a>
{:else}
	<img
		src={imageUrl}
		alt={imageUrl}
		width={width[size]}
		height={height[size]}
		title={brand}
		class="cursor-pointer"
	/>
{/if}
