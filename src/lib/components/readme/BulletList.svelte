<script lang="ts">
	import type { ListItem } from './list';

	export let items: ListItem[] = [
		{
			name: 'Item 1',
			children: [
				{ name: 'Subitem 1.1' },
				{
					name: 'Subitem 1.2',
					children: [{ name: 'Subitem 1.2.1' }, { name: 'Subitem 1.2.2' }]
				}
			]
		}
	];

	const hasChildren = (item: ListItem) => item.children && item.children.length > 0;
</script>

<ul class="list-disc pt-1 pl-4 mb-3">
	{#each items as item}
		<li class="font-medium">
			{@html item.name}
			{#if hasChildren(item)}
				<svelte:self items={item.children} />
			{/if}
		</li>
	{/each}
</ul>
