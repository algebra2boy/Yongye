<script lang="ts">
	import Folder from './Folder.svelte';
	import type { FileStructure } from './';
	import { filesExpandedStore } from '$lib/stores/filesExpandedStore.js';
	import File from './File.svelte';
	import { slide } from 'svelte/transition';

	interface FolderProps {
		expanded?: boolean;
		name: string;
		path: string;
		files?: FileStructure[];
	}

	let { expanded = $bindable(false), name, path, files }: FolderProps = $props();

	const toggle = () => (expanded = !expanded);
</script>

<button class:expanded onclick={toggle}>{name}</button>

{#if expanded}
	<ul transition:slide|global={{ duration: 180 }}>
		{#each files || [] as file}
			<li>
				{#if file.type === 'folder'}
					<!-- recursive component build tree -->
					{#if $filesExpandedStore}
						<Folder name={file.name} files={file.files} path={path + '/' + file.name} expanded />
					{:else}
						<Folder name={file.name} files={file.files} path={path + '/' + file.name} />
					{/if}
				{:else if file.type === 'file'}
					<File name={file.name} path={path + '/' + file.name} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}

<style lang="postcss">
	button {
		background: url('/icons/folder.svg') 0 0.2em no-repeat;
		@apply text-sm border-none cursor-pointer text-left font-semibold py-0 pl-5 pr-1 bg-[length:1em_1em];
	}

	.expanded {
		background-image: url(/icons/folder-open.svg);
		@apply text-orange-500;
	}

	ul {
		@apply pl-2 m-0 ml-2 list-none border-l border-gray-500;
	}

	li {
		@apply py-0.5;
	}
</style>
