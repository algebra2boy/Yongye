<script lang="ts">
	import { onMount } from 'svelte';

	interface BlogVideoProps {
		src: string;
		caption: string;
	}

	let { src, caption }: BlogVideoProps = $props();

	let posterDataUrl: string | null = $state(null);

	onMount(() => {
		// Generate the poster once the component is mounted
		generatePoster();
	});

	async function generatePoster() {
		const video = document.createElement('video');
		video.src = src;
		video.crossOrigin = 'anonymous'; // Required if video is on another domain
		video.muted = true; // Required by some browsers to auto-play
		video.playsInline = true;

		// Wait for metadata to load (get dimensions)
		await new Promise<void>((resolve) => {
			video.addEventListener('loadeddata', () => resolve(), { once: true });
		});

		// Seek to 1 second into the video
		video.currentTime = 1;

		// Wait for seek to complete
		await new Promise<void>((resolve) => {
			video.addEventListener('seeked', () => resolve(), { once: true });
		});

		// Draw frame to canvas
		const canvas = document.createElement('canvas');
		canvas.width = video.videoWidth;
		canvas.height = video.videoHeight;

		const ctx = canvas.getContext('2d');
		if (ctx) {
			ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
			posterDataUrl = canvas.toDataURL('image/jpeg');
		}
	}
</script>

<figure class="flex flex-col items-center">
	<!-- svelte-ignore a11y_media_has_caption -->
	<video
		controls
		class="w-1/2 rounded-md shadow-lg"
		{src}
		poster={posterDataUrl || undefined}
	>
		<source {src} type="video/mp4" />
	</video>
	<figcaption class="mt-3 text-sm text-gray-600">{caption}</figcaption>
</figure>
