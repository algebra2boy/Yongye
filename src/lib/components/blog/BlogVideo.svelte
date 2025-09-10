<script lang="ts">
	interface BlogVideoProps {
		src: string;
		caption: string;
	}

	let { src, caption }: BlogVideoProps = $props();
</script>

<figure class="flex flex-col items-center">
	<!-- svelte-ignore a11y_media_has_caption -->
	<video controls class="w-full md:w-1/2 rounded-md shadow-lg">
		<source {src} type="video/mp4" />
	</video>
	<figcaption class="mt-3 text-sm text-gray-600">{caption}</figcaption>
</figure>
