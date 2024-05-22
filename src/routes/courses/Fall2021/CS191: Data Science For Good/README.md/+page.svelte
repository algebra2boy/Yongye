<script>
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Data Science For Good</title>
	<meta name="description" content="Data Science For Good" />
</svelte:head>

<div class="text-gray-700 p-2">
	<small class="flex flex-row items-center gap-2 mb-2">
		<a href="/courses">← courses</a>
	</small>
	
	<h1 class="text-xl font-bold text-gray-900">CS191: Data Science For Goods</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: An exploration of computer science for first-year CICS students
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

    <h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this seminar in Fall 2021, and the course went over a brief
		introduction about K nearest neighbors and training and testing using a sample to perform
		predictive analysis, logistic regression, and the use of the Random Forest to evaluate the
		model. At the end of the course, we were tasked with a final project to analyze a dataset and
		present our findings. The final project was about predicting breast cancer from FNA Using
		Machine, and you can find the report from here:
		<a href="/pdf/CS_191_Project.pdf" class="underline"> CS 191 Project </a>
	</p>
</div>


<div class="flex justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/courses/Spring2022/CS198C: C Programming Language/README.md')}
	>
		Next
	</button>
</div>
