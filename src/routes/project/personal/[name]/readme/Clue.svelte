<h2 id="description" class="text-2xl font-semibold mb-4">Description</h2>
<p class="text-base mb-6">
	Step into a thrilling text adventure game, Clue, set on a 3 x 3 gameboard. Use your wits and
	deductive abilities to uncover the secrets behind a mysterious murder. Rumors suggest that Anan
	has been murdered, with Jeff suspecting that Matt may have strangled Anan with a rope in the study
	room. Navigate through rooms, investigate weapons, and interact with characters: Anan, Jeff, Matt,
	Eric, and Adam, to unveil the truth.
</p>
<h2 id="implementation-overview" class="text-2xl font-semibold mb-4">Implementation Overview</h2>
<ul class="list-disc pl-5 mb-6">
	<li>
		<p class="font-semibold">Gameboard Configuration:</p>
		<ul class="list-disc pl-5 mb-4">
			<li>
				Created using a 2D array with <code class="bg-gray-100 p-1 rounded">malloc</code>, making
				each room a pointer.
			</li>
			<li>
				Each room is a pointer containing:
				<ul class="list-disc pl-5">
					<li>Pointers to adjacent rooms (North, South, East, West).</li>
					<li>Name of the NPC.</li>
					<li>
						LinkedList storing items in the room (at the start, each room contains at most one
						item).
					</li>
					<li>4 pointers per room, 36 pointers in total.</li>
				</ul>
			</li>
			<li>
				LinkedList for items is implemented with pointers; the next item in the list is another item
				pointer.
			</li>
			<li>
				The avatar's information, including its location and inventory, is stored in a struct called <code
					class="bg-gray-100 p-1 rounded">Avatar</code
				>.
			</li>
		</ul>
	</li>
	<li>
		<p class="font-semibold">Memory Management:</p>
		<ul class="list-disc pl-5 mb-4">
			<li>
				After the program concludes, memory allocated for the board, avatar's current room,
				inventory, and name are deallocated.
			</li>
			<li>Memory of nodes removed from a LinkedList is also deallocated.</li>
			<li>Includes edge-case handling for invalid user inputs.</li>
		</ul>
	</li>
	<li>
		<p class="font-semibold">Requirements Satisfied:</p>
		<ol class="list-decimal pl-5">
			<li>Game has 9 rooms, including the starting room, connected via pointers.</li>
			<li>Rooms are randomly initialized on the game board at the start.</li>
			<li>Game features at least 6 items and 5 characters apart from the player's avatar.</li>
			<li>A room, an item, and a character are randomly chosen as the game's answer.</li>
			<li>Each room has a LinkedList of items.</li>
			<li>The avatar has an inventory.</li>
			<li>
				Command table (all commands are in <code class="bg-gray-100 p-1 rounded">adventure.c</code>
				within the main function):
				<ul class="list-disc pl-5 mb-4">
					<li>
						<code class="bg-gray-100 p-1 rounded">help</code>,
						<code class="bg-gray-100 p-1 rounded">list</code>,
						<code class="bg-gray-100 p-1 rounded">look</code>,
						<code class="bg-gray-100 p-1 rounded">go</code>,
						<code class="bg-gray-100 p-1 rounded">take</code>,
						<code class="bg-gray-100 p-1 rounded">drop</code>,
						<code class="bg-gray-100 p-1 rounded">inventory</code>,
						<code class="bg-gray-100 p-1 rounded">clue</code>
						(with sub-actions detailed under <code class="bg-gray-100 p-1 rounded">clue</code>).
					</li>
				</ul>
			</li>
		</ol>
	</li>
</ul>
<h2 id="compilation" class="text-2xl font-semibold mb-4">Compilation</h2>
<pre class="bg-gray-100 bg-opacity-100 p-3 rounded mb-6">
<code class="lang-c"
		>gcc adventure.c room.c -o myProgram
./myProgram</code
	></pre>
<h2 id="user-input-guide" class="text-2xl font-semibold mb-4">User Input Guide</h2>
<ul class="list-disc pl-5 mb-6">
	<li>Input commands are case-sensitive.</li>
	<li>
		Use <code class="bg-gray-100 p-1 rounded">scanf("%s %s", first, second)</code> for reading two-word
		commands.
	</li>
	<li>
		For commands with a single word, append a "~": e.g., <code class="bg-gray-100 p-1 rounded"
			>help ~</code
		>
		or
		<code class="bg-gray-100 p-1 rounded">look ~</code>.
	</li>
	<li>
		For directional commands: <code class="bg-gray-100 p-1 rounded">go north</code>,
		<code class="bg-gray-100 p-1 rounded">go south</code>, etc. (Don't use room names like
		<code class="bg-gray-100 p-1 rounded">go Bathroom</code>).
	</li>
	<li>
		For item commands: use the item name, e.g., <code class="bg-gray-100 p-1 rounded"
			>take bible</code
		>. Valid items:
		<code class="bg-gray-100 p-1 rounded">axe</code>,
		<code class="bg-gray-100 p-1 rounded">poison</code>,
		<code class="bg-gray-100 p-1 rounded">knife</code>,
		<code class="bg-gray-100 p-1 rounded">gun</code>,
		<code class="bg-gray-100 p-1 rounded">bible</code>,
		<code class="bg-gray-100 p-1 rounded">rope</code>.
	</li>
	<li>
		For clues: use the character name, e.g., <code class="bg-gray-100 p-1 rounded">clue Adam</code>.
		Valid characters:
		<code class="bg-gray-100 p-1 rounded">Anan</code>,
		<code class="bg-gray-100 p-1 rounded">Jeff</code>,
		<code class="bg-gray-100 p-1 rounded">Matt</code>,
		<code class="bg-gray-100 p-1 rounded">Eric</code>,
		<code class="bg-gray-100 p-1 rounded">Adam</code>.
	</li>
</ul>
