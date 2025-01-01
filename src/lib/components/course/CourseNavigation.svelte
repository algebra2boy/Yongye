<script lang="ts">
	import { goto } from '$app/navigation';

	interface CourseNavigationProps {
		prevLink?: string;
		nextLink?: string;
	}

	let { prevLink, nextLink }: CourseNavigationProps = $props();
</script>

{#snippet previousButton(link: string)}
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		onclick={() => goto(`/courses/${link}/README.md`)}
	>
		Prev
	</button>
{/snippet}

{#snippet nextButton(link: string)}
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		onclick={() => goto(`/courses/${link}/README.md`)}
	>
		Next
	</button>
{/snippet}

<div class="flex justify-center items-center gap-3 mb-6 mt-4">
	{#if prevLink}
		{@render previousButton(prevLink)}
	{:else if nextLink}
		{@render nextButton(nextLink)}
	{/if}
</div>
