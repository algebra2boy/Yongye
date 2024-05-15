<script lang="ts">
	import { marked } from 'marked';

	marked.setOptions({
		gfm: true, // GitHub Flavored Markdown
	});

	export let readme: string = '';
</script>

<div class="w-full h-full prose prose:lg">
	{@html marked(readme)}
</div>
