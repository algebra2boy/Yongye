<script>
	import '../app.pcss';
</script>

<svelte:head>
	<title>Yongye's website</title>
</svelte:head>

<div class="flex justify-center min-h-screen bg-lime-50 px-3 py-3">
	<div class="md:w-2/3 w-full overflow-auto p-4 bg-amber-50 shadow-xl rounded-xl">
		<slot />
	</div>
</div>
