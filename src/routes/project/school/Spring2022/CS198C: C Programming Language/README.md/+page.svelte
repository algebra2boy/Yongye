<script>
	import { goto } from '$app/navigation';
	import Code from '$lib/components/highlight/Code.svelte';

	let codeExample = `
    #include <stdio.h>;
int main(int argc, char* argv[]) {
    printf("Hello, 198C!\\n");
    return 0;
}
    `;
</script>

<svelte:head>
	<title>C Programming Language</title>
	<meta name="description" content="C Programming Language" />
</svelte:head>

<div class="text-gray-700 p-2">
	<h1 class="text-xl font-bold text-gray-900">CS 198C: C Programming Language</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: This practicum assumes general background and experience in computer
		programming (such as that provided by COMPSCI 121 or a similar introductory programming course)
		and some knowledge of data structures (such as that provided by COMPSCI 187). Content will
		include basic C data types, declarations, expressions, statements, and functions; simple use of
		macros; some common library calls (such as formatted input/output); basic pointer manipulation
		using linked lists; and introduction to using standard tools (gcc and make).
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

    <h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this course in Spring 2022. In my honest opinion, I think this
		course prepared really well for my C programming. There were 13 challenges in total, I enjoyed
		most of them, except the last one, which was a bit hard for me to understand, which is makefile.
		I understood most of the fundamental concepts of C. You can read more about the topics from this
		link:
		<a href="https://sites.google.com/view/umasscs198c/schedule?authuser=0" class="underline">
			https://sites.google.com/view/umasscs198c/schedule?authuser=0
		</a>
	</p>
	<p class="mt-1 text-gray-700 text-sm font-mono">
		One of the biggest takeaway from this class is that I learned how to interact with the shell,
		and how to use different commands to complie and run programs. Another takeaway is that I
		learned how SSH and SFTP works, and how to use them to transfer files between my local machine
		and the server. Having a good grasp of pointers and memory management is crucial to help me how
		machine works underneath my code. I am writting this post on 5/16/2024 at this moment, and I am
		currently making my own command line library in Node.js with Command.js, and having the
		knowledge of understanding how flag works in C and clear documentation (man page) is really
		helpful. Not to mention, the amount of command line that I have to use every single day, such as
		git, docker, npm, pip, pm2, and many more. I am really glad that I took this course.
	</p>

	<Code language="c" code={codeExample} />
</div>

<div class="flex mt-5 justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Fall2021/CS191: Data Science For Good/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Spring2022/CS230: Computer Systems Principles/README.md')}
	>
		Next
	</button>
</div>
