<script lang="ts">
	import type { Snippet } from 'svelte';

	interface LayoutProps {
		children: Snippet<[]>;
	}

	let { children }: LayoutProps = $props();
</script>

<h2 class="text-sm font-medium text-gray-600 mt-1">
	{@render children?.()}
</h2>
