<script lang="ts">
	import { Intro, Work, Skill } from '$lib/components/index.js';
	import { onMount } from 'svelte';

	let timeCommitted: string = $state('');

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

<svelte:head>
	<title>Yongye Tan</title>
	<meta
		name="description"
		content="Welcome to yongye's website where it contains lots of information about myself and many creative ideas 🔥💡"
	/>

	<meta property="og:title" content="Yongye Tan" />
	<meta property="og:description" content="Welcome to yongye's website 🔥💡" />
	<meta property="og:image" content="https://yongyetan.com/profile.jpeg" />
	<meta property="og:url" content="https://yongyetan.com" />
	<meta property="og:type" content="website" />
</svelte:head>

<Intro />
<Work />
<Skill />

<hr class="border-t border-gray-300 mt-4" />

<div class="flex flex-col justify-center items-center ml-1 mr-1 mt-1 mb-2 p-0.5">
	<p class="text-xs items-center">Last updated: {timeCommitted}</p>
</div>
