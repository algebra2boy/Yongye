<script>
	import { H2, P, BulletList, code, bold, Code } from '$lib/components/readme';
</script>

<H2 text="Description" />

<P
	text="Step into a thrilling text adventure game, Clue, set on a 3 x 3 gameboard. Use your wits and
deductive abilities to uncover the secrets behind a mysterious murder. Rumors suggest that Anan
has been murdered, with Jeff suspecting that Matt may have strangled Anan with a rope in the study
room. Navigate through rooms, investigate weapons, and interact with characters: Anan, Jeff, Matt,
Eric, and Adam, to unveil the truth."
/>

<H2 text="Implementation Overview" />

<BulletList
	items={[
		{
			name: `${bold('Gameboard Configuration:')}`,
			children: [
				{
					name: `Created using a 2D array with ${code('malloc')}, making each room a pointer.`
				},
				{
					name: 'Each room is a pointer containing:',
					children: [
						{ name: 'Pointers to adjacent rooms (North, South, East, West).' },
						{ name: 'Name of the NPC.' },
						{
							name: 'LinkedList storing items in the room (at the start, each room contains at most oneitem).'
						},
						{ name: '4 pointers per room, 36 pointers in total.' }
					]
				},
				{
					name: 'LinkedList for items is implemented with pointers; the next item in the list is another item pointer.'
				},
				{
					name: `The avatar\'s information, including its location and inventory, is stored in a struct called ${code(
						'Avatar'
					)}.`
				}
			]
		},
		{
			name: `${bold('Memory Management:')}`,
			children: [
				{
					name: "After the program concludes, memory allocated for the board, avatar's current room, inventory, and name are deallocated."
				},
				{ name: 'Memory of nodes removed from a LinkedList is also deallocated.' },
				{ name: 'Includes edge-case handling for invalid user inputs.' }
			]
		}
	]}
/>

<BulletList
	items={[
		{
			name: '<strong>Requirements Satisfied:</strong>',
			children: [
				{ name: 'Game has 9 rooms, including the starting room, connected via pointers.' },
				{ name: 'Rooms are randomly initialized on the game board at the start.' },
				{ name: "Game features at least 6 items and 5 characters apart from the player's avatar." },
				{ name: "A room, an item, and a character are randomly chosen as the game's answer." },
				{ name: 'Each room has a LinkedList of items.' },
				{ name: 'The avatar has an inventory.' },
				{
					name: `Command table (all commands are in ${code(
						'adventure.c'
					)} within the main function): ${
						code('helo') +
						', ' +
						code('list') +
						', ' +
						code('look') +
						', ' +
						code('go') +
						', ' +
						code('take') +
						', ' +
						code('drop') +
						', ' +
						code('inventory') +
						', ' +
						code('clue') +
						' (with sub-actions detailed under ' +
						code('clue') +
						').'
					}`
				}
			]
		}
	]}
/>

<H2 text="Compilation" />

<Code
	code="gcc adventure.c room.c -o myProgram
./myProgram
"
	language="c"
	theme="githubDarkDimmed"
/>

<H2 text="User Input Guide" />
<BulletList
	items={[
		{ name: 'Input commands are case-sensitive.' },
		{ name: `Use ${code('scanf("%s %s", first, second)')} for reading two-word commands.` },
		{
			name: `For commands with a single word, append a "~": e.g., ${code('help ~')} or ${code(
				'look ~'
			)}.`
		},
		{
			name: `For directional commands: ${code('go north')}, ${code(
				'go south'
			)}, etc. (Don't use room names like ${code('go Bathroom')}).`
		},
		{
			name: `For item commands: use the item name, e.g., ${code('take bible')}. Valid items: ${code(
				'axe'
			)}, ${code('poison')}, ${code('knife')}, ${code('gun')}, ${code('bible')}, ${code('rope')}.`
		},
		{
			name: `For clues: use the character name, e.g., ${code(
				'clue Adam'
			)}. Valid characters: ${code('Anan')}, ${code('Jeff')}, ${code('Matt')}, ${code(
				'Eric'
			)}, ${code('Adam')}.`
		}
	]}
/>
