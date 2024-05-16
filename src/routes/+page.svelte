<script lang="ts">
	import {
		Intro,
		Education,
		Work,
		PersonalProject,
		SchoolProject,
		Skill
	} from '$lib/components/index.js';
	import { onMount } from 'svelte';

	type ComponentOption =
		| typeof Intro
		| typeof Education
		| typeof Work
		| typeof PersonalProject
		| typeof SchoolProject
		| typeof Skill;

	let components: ComponentOption[] = [
		Intro,
		Education,
		Work,
		PersonalProject,
		SchoolProject,
		Skill
	];

	let positions: number[] = [0, 1, 2, 3, 4, 5];

	function shuffle() {
		for (let i = positions.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = positions[i];
			positions[i] = positions[j];
			positions[j] = temp;
		}
	}

	$: {
		components = positions.map((p) => components[p]);
	}

	let timeCommitted: string;

	async function checkMostRecentCommittedTime() {
		try {
			const response = await fetch('https://api.github.com/repos/algebra2boy/yongye/branches/main');
			const data = await response.json();

			timeCommitted = new Date(data.commit.commit.author.date).toLocaleString();
		} catch (error) {
			console.error(error);
		}
	}

	onMount(async () => await checkMostRecentCommittedTime());
</script>

{#each components as component}
	<svelte:component this={component} />
{/each}

<div class="flex flex-row justify-center items-center mt-2">
	<button
		class="text-xs hover:bg-yellow-300 text-black border-2 border-black font-medium py-0.5 px-1 rounded focus:outline-none focus:shadow-outline"
		on:click={shuffle}
	>
		Magic Button
	</button>
	<p class="ml-1 text-xs items-center">This website is entirely designed by Yongye Tan.</p>
</div>

<div class="flex flex-row justify-center items-center mt-1">
	<p class="ml-1 text-xs items-center">Last updated: {timeCommitted}</p>
</div>
