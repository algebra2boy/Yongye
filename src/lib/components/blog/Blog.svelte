<script lang="ts">
	import BlogPreview from './BlogPreview.svelte';
</script>

<div class="p-2 mb-2.5 rounded-lg">
	<small class="flex flex-row items-center gap-2 mb-3">
		<a href="/">← Home</a>
	</small>

	<BlogPreview
		title={'First Blog Post'}
		subtitle={'Happy New Year - 2025, the year of the blog'}
		date={new Date(2024, 11, 31)}
		imageURL={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRG94baP7Te4yVwWpicSAMvz46oIHYHzLo-w&s'}
	/>
</div>
