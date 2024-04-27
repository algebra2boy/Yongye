<script lang="ts">
	import Logo from '../logo/Logo.svelte';
</script>

<div class="flex items-center">
	<img src="/profile.jpeg" alt="Yongye Tan's profile" class="rounded-full w-24 h-24 md:w-18 md:h-18 sm:w-14 sm:h-14" />
	<div class="pl-3 pt-1">
		<h1 class="text-2xl font-thin">Yongye Tan</h1>
		<div class="flex gap-1.5">
			<Logo brand="Github" />
			<Logo brand="Linkedin" />
			<Logo brand="Gmail" />
		</div>
		<p class="text-sm pt-2">I am a third year undergraduate trying to learn many cool stuff.</p>
	</div>
</div>
