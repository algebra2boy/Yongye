<script lang="ts">
	interface BlogPreviewProps {
		title: string;
		subtitle: string;
		date: Date;
		imageURL: string;
	}

	let {
		title = 'Title',
		subtitle = 'Subtitle',
		date = new Date(2024, 12, 31),
		imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRG94baP7Te4yVwWpicSAMvz46oIHYHzLo-w&s'
	}: BlogPreviewProps = $props();
</script>

<div class="flex flex-col w-full p-4 space-y-3">
	<!-- body section -->
	<div class="flex flex-row items-center">
		<!-- keep both in around 100 words -->
		<div class="flex flex-col w-3/4 space-y-2">
			<h1 class="text-lg font-semibold md:text-base sm:text-sm">
				{title}
			</h1>
			<h2 class="text-sm font-extralight md:text-xs sm:text-[10px]">
				{subtitle}
			</h2>
		</div>

		<div class="flex w-1/4 items-center justify-center">
			<img
				src={imageURL}
				alt={imageURL}
				class="w-36 h-32 md:w-28 md:h-20 sm:w-20 sm:h-16 object-cover shadow-lg rounded-sm"
			/>
		</div>
	</div>

	<!-- footer section -->
	<div class="flex flex-row justify-start">
		<p class="text-sm md:text-xs sm:text-[10px]">{date.toLocaleDateString()}</p>
	</div>
</div>
