<script lang="ts">
	import type { ListItem } from './list';

	export let items: ListItem[] = [
		{
			name: 'item1',
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

<ol class="list-decimal pt-1 pl-4">
	{#each items as item}
		<li class="font-normal">
			{@html item.name}
			{#if hasChildren(item)}
				<svelte:self items={item.children} />
			{/if}
		</li>
	{/each}
</ol>
