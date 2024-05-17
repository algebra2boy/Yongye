<script>
	import { goto } from '$app/navigation';
	import Code from '$lib/components/highlight/Code.svelte';

	let code = `
type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type HTTPStatus = 200 | 201 | 204 | 400 | 401 | 403 | 404 | 500;
type HTTPRequest = {
    method: HTTPMethod;
    url: string;
    headers: Record<string, string>;
    body: string;
};
    `;
</script>

<svelte:head>
	<title>Programming Methodology</title>
	<meta name="description" content="Programming Methodology" />
</svelte:head>

<div class="mt-2 text-gray-700">
	<h1 class="text-xl font-bold text-gray-900">CS220: Programming Methodology</h1>

	<h2 class="text-sm font-semibold text-gray-700 mt-1">
		Course Description: The goal of COMPSCI220 Programming Methodology is to turn you into an
		advanced programmer with a deep understanding of modern programming methodology. We will
		emphasize good software engineering skills, including programming abstractions, testing, and
		debugging. Although the programming language that we will use is JavaScript, we will emphasize
		general programming principles. Everything that you will learn in the class will be applicable
		to other modern languages, including (for example) C++, C#, D, Go, Java, Python, Rust, and
		Swift.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-extralight mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 font-serif">
		I took this course in Fall 2023. A lot of design patterns, and software engineering principles taught by
        professor Marius Minea. This course is indeed very time consuming, and but it is super worth and rewarding.
        You learn how to write good code and think more critically about the code you write. The course is very
        project-based and intense. Project every single week was a lot of work, but it was a great learning experience.
        It was great to learn about typescript, observables, promises, async/await, and building an interpreters, and 
        fluent design, black box testing, and functional programming.
	</p>

	<h1 class="text-xl font-extralight mt-1">Code demonstration of Typescript</h1>

	<Code language="typescript" {code} />
</div>

<div class="flex mt-5 justify-center items-center gap-3">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Summer2023/CS490STA: Scalable Web Systems/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Spring2024/CICS305: Junior Year Writting/README.md')}
	>
		Next
	</button>
</div>
