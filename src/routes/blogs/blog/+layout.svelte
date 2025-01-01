<script lang="ts">
	import type { Snippet } from 'svelte';

	interface LayoutProps {
		children: Snippet<[]>;
	}

	let { children }: LayoutProps = $props();
</script>

<div class="p-2">
	<small class="flex flex-row items-center gap-2 mb-3">
		<a href="/blogs">← Blogs</a>
	</small>
	{@render children?.()}
</div>
