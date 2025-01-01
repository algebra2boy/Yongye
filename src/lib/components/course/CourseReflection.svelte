<script lang="ts">
	import type { Snippet } from 'svelte';

	interface LayoutProps {
		children: Snippet<[]>;
	}

	let { children }: LayoutProps = $props();
</script>

<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

<p class="mt-1 text-gray-700 text-sm font-mono">
	{@render children?.()}
</p>
