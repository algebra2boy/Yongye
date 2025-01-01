<script lang="ts">
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';

	interface LayoutProps {
		children: Snippet<[]>;
	}

	let { children }: LayoutProps = $props();
</script>

<div class="p-2 mb-2.5 rounded-lg">
	<small class="flex flex-row items-center gap-2 mb-3">
		{#if page.url.href.endsWith('.md')}
			<a href="/course">← Courses</a>
		{:else if page.url.href.endsWith('/courses')}
			<a href="/">← Home</a>
		{/if}
	</small>

	{@render children?.()}
</div>
