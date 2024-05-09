<script lang="ts">
	import Highlight from 'svelte-highlight';
	import github from 'svelte-highlight/styles/github';
	import { loadLanguage, type Language } from './Highlight';

	export let language: Language = 'typescript';
	export let code: string = `const add = (a: number, b: number) => a + b;
const result = add(1, 2);
function greetings() {
    console.log("How are you?!")
}
`;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<Highlight language={loadLanguage(language)} {code} />
