<script>
	import { goto } from '$app/navigation';
	import Code from '$lib/components/highlight/Code.svelte';

    let query = 
`
SELECT * 
FROM STUDENT
WHERE name='Yongye';
`    
</script>

<svelte:head>
	<title>Data Management</title>
	<meta name="description" content="Data Management" />
</svelte:head>

<div class="text-gray-700 p-2">
	<h1 class="text-xl font-bold text-gray-900">CS345: Data Management</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: Modern computer systems make ample use of databases from where to share and
		synchronize many types of information. For example, commercial websites store information about
		clients and products in databases. Likewise, news organizations store news items and user
		preferences which can then be accessed from a variety of devices, and through a variety of
		formats. COMPSCI 345 provides a comprehensive introduction to the use of data management systems
		that can be used in such applications, with a strong emphasis on the relational database model.
		Some of the covered topics include application-driven database design, schema refinement,
		implementation of basic transactions, data on the web, and data visualization.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this course in Summer 2022. This course was a great introduction to the use of data
        management systems with an demonstration on SQL. The most takeway from this course
        was understanding the relational database model, entity relationship diagrams, SQL queries,
        and how to implement basic transactions and optimize queries, and providing security to different roles.
        Professor Jaime Davila was a great instructor and answered a lot of my questions via email. 
        Functional dependencies, normalization, and indexing were some of the topics that I enjoyed learning.
	</p>

    <Code language="sql" code={query}/>
        
</div>

<div class="flex mt-5 justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Spring2022/CS198C: C Programming Language/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Fall2022/CS360: Network Security/README.md')}
	>
		Next
	</button>
</div>
