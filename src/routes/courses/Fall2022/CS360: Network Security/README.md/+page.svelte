<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Network Security</title>
	<meta name="description" content="Network Security" />
</svelte:head>

<div class="text-gray-700 p-2">
	<small class="flex flex-row items-center gap-2 mb-2">
		<a href="/courses">← courses</a>
	</small>
	<h1 class="text-xl font-bold text-gray-900">CS360: Network Security</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: This course provides an introduction to the principles and practice of
		computer and network security. A focus on both fundamentals and practical information will be
		stressed. The three key topics of this course are cryptography, privacy, and network security.
		Subtopics include ciphers, hashes, key exchange, security services (integrity, availability,
		confidentiality, etc.), security attacks, vulnerabilities, anonymous communications, and
		countermeasures.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this course in Fall 2022. This course was a great introduction to the principles and
		practice of computer and network security. The most takeway from this course was understanding
		the importance of cryptography, privacy, and network security. The course covered cryptography
		like SHA and AES, public key infrastructure, and network security like firewalls, malwares, and
		so on. For the final project, I worked on a research paper on the topic of
		<a href="/pdf/SQLInjection.pdf" class="underline"> SQL Injection</a>, which you can find the report from the link.
	</p>
</div>

<div class="flex justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/courses/Summer2022/CS345: Data Management/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/courses/Fall2022/CS377: Operating Systems/README.md')}
	>
		Next
	</button>
</div>
