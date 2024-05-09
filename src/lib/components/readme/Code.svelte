<script lang="ts">
	import { onMount } from 'svelte';
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import github from 'svelte-highlight/styles/github';

	export let language: string = 'typescript';
	export let theme: string = 'github';
	export let code: string = `const add = (a: number, b: number) => a + b;
const result = add(1, 2);
function greetings() {
    console.log("How are you?!")
}
`;

	let HighlightLanguage: any;
	let HighlightTheme: any;

	// dynamic import
	onMount(() => loadImports());
	// const languageImport = `svelte-highlight/languages/${language}`;
	// HighlightLanguage = (await import(/* @vite-ignore */ languageImport))
	// 	.default;
	// HighlightTheme = (await import(/* @vite-ignore */ `svelte-highlight/styles/${theme}`)).default;

	async function loadImports() {
		const languageImport = `svelte-highlight/languages/${language}`;
		HighlightLanguage = (await import('svelte-highlight/languages/typescript')).default;
	}
</script>

<svelte:head>
	{@html github}
</svelte:head>

<Highlight language={typescript} {code} />
