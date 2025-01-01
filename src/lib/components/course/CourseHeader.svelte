<script lang="ts">
	import type { Snippet } from 'svelte';

	interface LayoutProps {
		children: Snippet<[]>;
	}

	let { children }: LayoutProps = $props();
</script>

<h1 class="text-xl font-bold text-gray-900">
	{@render children?.()}
</h1>
