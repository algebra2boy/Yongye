<script lang="ts">
	import Highlight from 'svelte-highlight';
	import { loadLanguage, loadTheme, type Language, type Theme } from './highlightCode';
	export let language: Language = 'typescript';
	export let theme: Theme = "github";
	export let code: string = `
const add = (a: number, b: number) => a + b;
const result = add(1, 2);
function greetings() {
	console.log("How are you?!")
}
`;
</script>

<svelte:head>
	{@html loadTheme(theme)}
</svelte:head>

<Highlight language={loadLanguage(language)} code={code.trim()} />
