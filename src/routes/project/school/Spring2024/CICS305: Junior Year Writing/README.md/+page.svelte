<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Junior Year Writting</title>
	<meta name="description" content="Junior Year Writting" />
</svelte:head>

<div class="mt-2 text-gray-700">
	<h1 class="text-xl font-bold text-gray-900">CICS305: Junior Year Writting</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: CICS 305 satisfies the Junior Year Writing (JYW) requirement for CS and
		Informatics Majors at UMass. It is also an important course in the undergraduate curriculum for
		learning more about ethics and the social implications of computing. Topics vary each semester
		as many readings are taken from current events. At minimum, students should expect to learn more
		about how computing intersects with race, gender, access, identity, social class, priviledge,
		language, and the environment. Previous topics covered in class include: Gamergate, CS for All,
		algorithmic bias, inclusivity in CS, planned obsolescence, right to repair, energy consumption,
		speed of technological advance (and resultant societal effects), AI personhood, AI development,
		automation, and autonomous vehicles. Discussions are used to help students practice critical
		thinking about current issues in computing through a lens informed by social theories.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this course in the Spring of 2024. This course was interesting. First homework
        was to build a resume and cover letter. Second homework was to write a letter to a manager about 
        advertisement. Third homework was to argue about unethical and ethical tools. Fourth homework was
        to write about a research paper. Fifth homework was to convince a high up manager to change a policy based on the research paper.
        For the research paper, I wrote about how Duolingo impacted the language learning enviornment in education. You can read the paper
        from here: <a href="/pdf/Duolingo.pdf" class="underline">Duolingo</a>.
	</p>
</div>

<div class="flex mt-5 justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Fall2023/CS220: Programming Methodology/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Spring2024/CS496: Web Systems Dev Real-World/README.md')}
	>
		Next
	</button>
</div>
