<script lang="ts">
	import {
		Intro,
		Work,
		PersonalProject,
		SchoolProject,
		Skill
	} from '$lib/components/index.js';
	import { onMount } from 'svelte';


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

<svelte:head>
	<title>Yongye Tan</title>
	<meta name="description" content="Yongye Tan, Yongye, Website" />
</svelte:head>

<Intro />
<Work />
<PersonalProject />
<SchoolProject />
<Skill />

<hr class="border-t border-gray-300 mt-4" />

<div class="flex flex-col justify-center items-center ml-1 mr-1 mt-1 mb-2 p-0.5">
	<p class="text-xs items-center">Last updated: {timeCommitted}</p>
</div>
