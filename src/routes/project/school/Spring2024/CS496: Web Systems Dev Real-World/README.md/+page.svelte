<script>
	import { goto } from '$app/navigation';
	import Code from '$lib/components/highlight/Code.svelte';
</script>

<svelte:head>
	<title>Web Systems Dev Real-World</title>
	<meta name="description" content="Web Systems Dev Real-World" />
</svelte:head>

<div class="mt-2 text-gray-700">
	<h1 class="text-xl font-bold text-gray-900">CS496: Web Systems Dev Real-World</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: This course is an engaging course designed for students to apply their web
		programming skills in building actual systems for real clients. This hands-on, project-based
		course starts with a review of essential web technologies and advances to topics like responsive
		design and database integration. Students will interact directly with clients, work in teams to
		develop functional web systems, and learn about project management, including agile
		methodologies. Emphasis is also placed on testing, deployment, and portfolio development. Ideal
		for those with advanced web programming knowledge, this course not only enhances technical
		skills but also prepares students for professional web development roles by offering a blend of
		theoretical knowledge and practical, real-world experience.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this course in the Spring of 2024. This course is special. You can learn more about what
		we do from <a href="/project/personal/Chemistry-Web-App" class="underline">here</a>.
	</p>
</div>

<div class="flex mt-5 justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Spring2024/CICS305: Junior Year Writing/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() =>
			goto('/project/school/Spring2024/CS520: Theory and Practice of Software Engineering/README.md')}
	>
		Next
	</button>
</div>
