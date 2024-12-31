<script lang="ts">
	import { onMount } from 'svelte';
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

	let tooltipPosition: 'left' | 'right' = $state('right');

	onMount(() => {
		const logoElement = document.getElementById(`logo-${brand}`);
		if (logoElement) {
			const rect = logoElement.getBoundingClientRect();
			const tooltipWidth = 300; // Approximate width of the tooltip
			if (rect.right + tooltipWidth > window.innerWidth) {
				tooltipPosition = 'left';
			}
		}
	});
</script>

<div class="relative group" id={`logo-${brand}`}>
	<img
		src={imageUrl}
		alt={imageUrl}
		width={width[size]}
		height={height[size]}
		class="relative z-10"
	/>
	<div
		class={`absolute top-0 ${
			tooltipPosition === 'right' ? 'left-full ml-0.5' : 'right-full mr-0.5'
		} group-hover:block mt-3.5 px-2 py-1 bg-gray-200 text-xs font-medium hidden z-20 rounded`}
	>
		{brand}
	</div>
</div>
