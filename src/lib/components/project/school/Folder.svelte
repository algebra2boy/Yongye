<script lang="ts">
	import type { FileStructure } from './index.d.ts';
	import File from './File.svelte';
	import { slide } from 'svelte/transition';

	export let expanded: boolean = false;
	export let name: string;
	export let files: FileStructure[];

	const toggle = () => (expanded = !expanded);
</script>

<button class:expanded on:click={toggle}>{name}</button>

{#if expanded}
	<ul transition:slide={{ duration: 300 }}>
		{#each files as file}
			<li>
				{#if file.type === 'folder'}
					<svlete:self {...file} />
				{:else}
					<File {...file} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style>
	button {
		padding: 0 0 0 1.5em;
		background: url(/icons/folder-close.svg) 0 0.1em no-repeat;
		background-size: 1em 1em;
		font-weight: bold;
		cursor: pointer;
		border: none;
		font-size: 14px;
	}

	.expanded {
		background-image: url(/icons/folder-open.svg);
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid #eee;
	}

	li {
		padding: 0.2em 0;
	}
</style>
