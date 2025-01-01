<script lang="ts">
	import type { Snippet } from 'svelte';

	interface LayoutProps {
		children: Snippet<[]>;
	}

	let { children }: LayoutProps = $props();
</script>

<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

<div class="text-gray-700 text-sm font-mono space-y-2">
	{@render children?.()}
</div>
