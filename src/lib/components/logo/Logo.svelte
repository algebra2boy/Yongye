<script lang="ts">
	import { techStack } from './logoData.js';
	import type { Brand } from './index.js';

	type Size = 'small' | 'medium' | 'large';

	interface SizeProps {
		[key: string]: string;
	}

	interface LogoProps {
		brand?: Brand;
		size?: Size;
	}

	let { brand = 'AWS', size = 'small' }: LogoProps = $props();

	let logo = $derived(techStack[brand]);
	let imageUrl = $derived(logo.imageURL);

	const width = { small: '18', medium: '30', large: '42' } as SizeProps;
	const height = { small: '20', medium: '30', large: '40' } as SizeProps;
</script>

<div class="relative group">
	<img src={imageUrl} alt={brand} width={width[size]} height={height[size]} class="relative z-10" />
	<div
		class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 group-hover:block px-2 py-1 bg-gray-200 text-xs font-medium hidden z-20 rounded tooltip"
	>
		{brand}
	</div>
</div>

<style>
	.tooltip {
		transition: opacity 0.3s ease;
		opacity: 0;
	}

	.group:hover .tooltip {
		opacity: 1;
	}
</style>
