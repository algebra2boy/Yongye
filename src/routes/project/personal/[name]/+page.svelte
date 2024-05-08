<script lang="ts">
	import { page } from '$app/stores';
    import type { PersonalProject } from '$lib/components/project';
    import Logo from '$lib/components/logo/Logo.svelte';
    import { convertDateToString } from '$lib/utils/date';

	const { name, description, logo, startDate, endDate, githubLink, readme } = ($page.data) as PersonalProject;
</script>

<div id={name}>
    <div class="flex flex-row justify-between">
        <h1>{name}</h1>
        <p>{convertDateToString(startDate)} - {convertDateToString(endDate)}</p>
    </div>

    <!-- <div class="flex flex-row">
        <span>Tech Stack:</span>
        {#each logo as l}
            <Logo brand={l} />
        {/each}
    </div>


    <div class="flex flex-row">
        <span>Github Link</span>
        <span>:&nbsp;</span>
        {#if githubLink}
            <a href={githubLink} class="underline">{githubLink}</a>
        {:else}
            <span>Private</span>
        {/if}
    </div>
    <p>One line description: {description}</p>

    <hr class="divide-solid border-slate-500 mt-1 border-1" />

    <div class="README">
        <h1>README</h1>
        <p>{@html readme}</p>
    </div> -->
</div>

<p1>{JSON.stringify($page.data)}</p1>
