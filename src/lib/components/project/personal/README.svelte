<script lang="ts">
	import { marked } from 'marked';

	marked.setOptions({
		gfm: true // GitHub Flavored Markdown
	});

	export let readme: string = '';
</script>

<!-- https://stackoverflow.com/questions/74914969/override-65ch-max-width-in-tailwind-css-typography -->
<div
	class="w-full prose prose-sm !max-w-none
	prose-a:font-medium prose-a:text-gray-800
	prose-headings:font-mono prose-headings:font-normal
	prose-code:text-sm prose-pre:rounded-lg prose-pre:!bg-gray-800 prose-pre:px-3 prose-pre:py-3 prose-pre:leading-loose prose-code:before:content-none prose-code:after:content-none before:[&_blockquote_p:first-of-type]:content-none after:[&_blockquote_p:last-of-type]:content-none
	prose-img:max-h-[80vh] prose-img:mx-auto
	prose-video:max-h-[80vh] prose-video:mx-auto"
>
	{@html marked(readme)}
</div>
