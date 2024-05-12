<script lang="ts">
	import type { TODO } from './list';

	export let todos: TODO[] = [
		{
			name: 'item1',
			isCompleted: false
		},
		{
			name: 'item2',
			isCompleted: true
		},
		{
			name: 'item3',
			isCompleted: false
		}
	];
</script>

{#each todos as todo}
    <div class="pt-1">
        <input type="checkbox" checked={todo.isCompleted} disabled class="mr-1" />
        {@html todo.name}
    </div>
{/each}
