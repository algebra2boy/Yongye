<script lang="ts">
	export let title: string = '';
	export let date: string = '';
	export let subTitle: string = '';
	export let websiteURL: string = '';
	export let location: string = '';
	export let listItems: string[] = [];
</script>

<div class="mt-1">
	<div class="flex justify-between items-center">
		<p class="text-lg">{@html title}</p>
		<p class="font-light text-sm">{@html date}</p>
	</div>
	<div class="flex justify-between items-center pt-0">
		<a class="font-light text-sm italic" href={websiteURL} title={websiteURL} target="_blank"
			>{@html subTitle}</a
		>
		<p class="font-light text-sm italic">{@html location}</p>
	</div>
	<ul class="list-disc pl-6">
		{#each listItems as item}
			<li class="font-light text-sm">{@html item}</li>
		{/each}
	</ul>
</div>
