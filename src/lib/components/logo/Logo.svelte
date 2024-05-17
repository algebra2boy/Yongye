<script lang="ts">
	import { techStack } from './logoData.js';
	import type { Brand } from './index.js';

	type Size = 'small' | 'medium' | 'large';

	interface SizeProps {
		[key: string]: string;
	}

	export let brand: Brand = 'AWS';
	export let size: Size = 'small';

	const logo = techStack[brand];
	const imageUrl = logo.imageURL;

	const width = { small: '18', medium: '30', large: '42' } as SizeProps;
	const height = { small: '20', medium: '30', large: '40' } as SizeProps;
</script>

<div class="relative group">
	<img
		src={imageUrl}
		alt={imageUrl}
		width={width[size]}
		height={height[size]}
		class="relative z-10"
	/>
	<div class="absolute top-0 sm:-right-20 md:-right-1 lg:-right-1 group-hover:block pt-6 pr-1 hidden z-20">
		<div class="bg-gray-200 px-1 py-0.5">
			<p class="text-sm font-medium">{brand}</p>
		</div>
	</div>
</div>
