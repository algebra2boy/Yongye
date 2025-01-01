<script lang="ts">
	import Code from '$lib/components/highlight/Code.svelte';
	import { type Language } from '../highlight/highlightCode';

	interface CourseCodeProps {
		language: Language;
		code: string;
	}

	let { language, code }: CourseCodeProps = $props();
</script>

<Code {language} {code} />
