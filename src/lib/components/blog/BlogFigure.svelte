<script lang="ts">
	interface BlogFigureProps {
		src: string;
		alt: string;
		caption: string;
	}

	let { src, alt, caption }: BlogFigureProps = $props();
</script>

<figure class="flex flex-col items-center">
	<img {src} {alt} class="object-cover w-full md:w-1/2 rounded-md shadow-lg" />
	<figcaption class="mt-3 text-sm text-center text-gray-600">{caption}</figcaption>
</figure>
