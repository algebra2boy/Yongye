<script lang="ts">
	import { marked } from 'marked';

	marked.setOptions({
		gfm: true, // GitHub Flavored Markdown
	});

	export let readme: string = '';
</script>

<div class="h-full prose sm:prose-sm lg:prose-lg">
	{@html marked(readme)}
</div>

<!-- <div class="prose prose-sm prose-stone prose-a:font-medium prose-a:text-gray-800 prose-headings:font-serif prose-headings:font-normal prose-code:text-sm prose-pre:rounded-lg prose-pre:!bg-gray-800 prose-pre:px-4 prose-pre:py-3 prose-pre:leading-loose prose-code:before:content-none prose-code:after:content-none before:[&_blockquote_p:first-of-type]:content-none after:[&_blockquote_p:last-of-type]:content-none prose-img:max-h-[80vh] prose-img:mx-auto prose-video:max-h-[80vh] prose-video:mx-auto mt-8">
	{@html marked(readme)}
</div> -->