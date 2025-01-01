<script lang="ts">
	import Highlight from 'svelte-highlight';
	import { loadLanguage, loadTheme, type Language, type Theme } from './highlightCode';

	interface CodeProps {
		language?: Language;
		theme?: Theme;
		code?: string;
	}

	let {
		language = 'typescript',
		theme = 'github',
		code = `
			const add = (a: number, b: number) => a + b;
			const result = add(1, 2);
			function greetings() {
			console.log("How are you?!")
		}`
	}: CodeProps = $props();
</script>

<svelte:head>
	{@html loadTheme(theme)}
</svelte:head>

<Highlight language={loadLanguage(language)} code={code.trim()} />
