<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Theory and Practice of Software Engineering</title>
	<meta name="description" content="Junior Year Writting" />
</svelte:head>

<div class="text-gray-700 p-2">
	<small class="flex flex-row items-center gap-2 mb-2">
		<a href="/courses">← courses</a>
	</small>
	<h1 class="text-xl font-bold text-gray-900">
		CS520: Theory and Practice of Software Engineering
	</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: CS 520 introduces students to the principal activities and state-of-the-art
		techniques involved in developing high-quality software systems. Topics include: requirements
		analysis, formal specification methods, software design, software testing and debugging, program
		analysis, and automated software engineering.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this course in the Spring of 2024. I learned the most were advanced git concepts (cherry
		picking, rebasing, squashing, and merging), software design patterns, and software testing, and
		automated testing using Randoop. The course was project-based and we worked in a team to build a
		software system. We used Notion to document everything, and you can find our offical page of our
		final project, <a
			href="https://yongye.notion.site/Ice-Queb-6b2c3f17a1fc45389f03c585d92f2afb?pvs=25"
			class="underline">Ice-Queb</a
		>.
	</p>
</div>


<div class="flex justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/courses/Spring2024/CS496: Web Systems Dev Real-World/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/courses/Spring2024/CS396: Independent Study/README.md')}
	>
		Next
	</button>
</div>
