<script lang="ts">
	let positions: number[] = [1, 2, 3, 4, 5];

	function shuffle() {
		for (let i = positions.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = positions[i];
			positions[i] = positions[j];
			positions[j] = temp;
		}
	}
</script>

<div class="flex justify-center">
	<div class="flex-row italic">Drag me to see what happens</div>
</div>
<div class="flex justify-center">
	<div class="flex-row">
		{#each positions as position}
			<button class="container" on:click={shuffle}>
				{position}
			</button>
		{/each}
	</div>
</div>

<style>
	.container {
		width: 50px;
		height: 50px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: skyblue;
		margin: 5px;
		font-size: 20px;
	}
</style>
