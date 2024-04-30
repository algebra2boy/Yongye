<script lang="ts">
	export let name: string;

	// "happy.gif" -> "gif"
	$: type = name.slice(name.lastIndexOf('.') + 1);
</script>

<span style="background-image: url(/icons/{type}.svg)">{name}</span>

<style lang="postcss">
	span {
		@apply py-0 px-6 bg-no-repeat bg-[position:0_0.1em] bg-[size:1em_1em];
	}
</style>
