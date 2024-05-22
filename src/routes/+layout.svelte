<script>
	import '../app.pcss';
	import Navbar from './Navbar.svelte';
</script>

<div class="flex justify-center min-h-screen bg-gray-100 text-gray-700">
	<div class="md:w-3/5 w-full overflow-auto pl-4 pr-4 pt-10">
		<Navbar />
		<slot />
	</div>
</div>