<script lang="ts">
	interface BlogPreviewProps {
		title?: string;
		subtitle?: string;
		date?: Date;
		imageURL?: string;
	}

	let {
		title = 'title',
		subtitle = 'subtitle',
		date = new Date(2024, 11, 31),
		imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRG94baP7Te4yVwWpicSAMvz46oIHYHzLo-w&s'
	}: BlogPreviewProps = $props();

	const blogURL = `/blogs/${title.toLowerCase().split(' ').join('-')}`;
</script>

<div class="flex flex-col w-full p-4 space-y-3">
	<a href={blogURL}>
		<div class="flex flex-row items-start space-x-2">
			<!-- Content section -->
			<div class="flex flex-col w-3/4 space-y-2">
				<div class="flex flex-row items-center">
					<h1 class="font-black lg:text-xl md:text-lg sm:text-base text-base">
						{title}
					</h1>
				</div>
				<div class="flex flex-row">
					<h2 class="font-light lg:text-base md:text-base sm:text-sm text-sm">
						{subtitle}
					</h2>
				</div>
				<div class="flex flex-row justify-start items-center space-x-2">
					<p class="text-sm md:text-xs sm:text-[10px]">{date.toDateString()}</p>
				</div>
			</div>

			<!-- Image section -->
			<div class="flex items-center justify-center w-1/4">
				<img
					src={imageURL}
					alt={imageURL}
					class="lg:w-44 lg:h-28 md:w-40 md:h-24 sm:w-36 sm:h-20 object-cover shadow-lg rounded-sm"
				/>
			</div>
		</div>
	</a>

	<hr class="mx-auto w-full h-0.5 bg-gray-150" />
</div>
