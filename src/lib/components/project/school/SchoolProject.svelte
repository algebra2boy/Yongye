<script lang="ts">
	import Folder from './Folder.svelte';
	import type { FileStructure } from './index.d.ts';

	let root: FileStructure[] = [
		{
			type: 'folder',
			name: 'Important work stuff',
			files: [{ type: 'file', name: 'TODO.md' }]
		},
		{ type: 'file', name: 'TODO.md' },
		{ type: 'file', name: 'TODO.md' },
		{ type: 'file', name: 'TODO.md' },
		{ type: 'file', name: 'abc.pdf' }
	];
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-extralight">SCHOOL PROJECTS</h1>
	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<Folder name="Home" files={root} expanded />
</div>
