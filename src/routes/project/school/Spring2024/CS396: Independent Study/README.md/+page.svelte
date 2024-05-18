<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Independent Study</title>
	<meta name="description" content="Independent Study" />
</svelte:head>

<div class="mt-2 text-gray-700">
	<h1 class="text-xl font-bold text-gray-900">CS396: Independent Study</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: The main objective of this proposal is to delve into cloud migration
		andcontainerization within the framework of a microservice architecture using the Javascript
		orTypescript programming language, but not limited to these languages. Another
		importantobjective is to focus on API version management and explore GraphQL, as well as
		acquiringskills to manage software workflows through CI/CD methodologies
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this independent study in the Spring of 2024. First of all, thank you Tim, as known as my
		advisor, mentor, professor, and friend. I really wanted to learn more about advanced web topics and decided
        to reach out to my favorite professor, Tim Richards, to see if he would be interested in advising me on an independent study.
        This course was a great opporunity for me to learn independently and explore the topics that I am interested in. There 
		are many web topics that I explored and this Notion page is a reflection of my learning journey: 
		<a href="https://yongye.notion.site/Advanced-Web-Topics-a306d6ba3c934af09bffa17ae318d875?pvs=25" class="underline">Advanced Web programming.</a>
	</p>
</div>

<div class="flex mt-5 justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Spring2024/CS520: Theory and Practice of Software Engineering/README.md')}
	>
		Prev
	</button>
</div>
