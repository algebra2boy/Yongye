<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	interface LayoutProps {
		children: Snippet<[]>;
	}

	let { children }: LayoutProps = $props();
</script>

<div class="p-2">
	<small class="flex flex-row items-center gap-2 mb-3">
		{#if page.url.href.endsWith('/blogs')}
			<a href="/">← Home</a>
		{:else}
			<a href="/blogs">← Blogs</a>
		{/if}
	</small>
	{@render children?.()}
</div>
