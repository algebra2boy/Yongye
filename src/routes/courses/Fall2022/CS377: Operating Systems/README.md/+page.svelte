<script>
	import { goto } from '$app/navigation';
	import Code from '$lib/components/highlight/Code.svelte';

    let code = `
    void simple_shell::parse_command(char *cmd, char **cmdTokens)
    `
</script>

<svelte:head>
	<title>Operating System</title>
	<meta name="description" content="Operating System" />
</svelte:head>

<div class="text-gray-700 p-2">
	<small class="flex flex-row items-center gap-2 mb-2">
		<a href="/courses">← courses</a>
	</small>
	<h1 class="text-xl font-bold text-gray-900">CS377: Operating System</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: In this course we examine the important problems in operating system design
		and implementation. The operating system provides a well-known, convenient, and efficient
		interface between user programs and the bare hardware of the computer on which they run. The
		operating system is responsible for allowing resources (e.g., disks, networks, and processors)
		to be shared, providing common services needed by many different programs (e.g., file service,
		the ability to start or stop processes, and access to the printer), and protecting individual
		programs from one another. The course will start with a brief historical perspective of the
		evolution of operating systems over the last fifty years, and then cover the major components of
		most operating systems. This discussion will cover the tradeoffs that can be made between
		performance and functionality during the design and implementation of an operating system.
		Particular emphasis will be given to three major OS subsystems: process management (processes,
		threads, CPU scheduling, synchronization, and deadlock), memory management (segmentation,
		paging, swapping), file systems, and operating system support for distributed systems.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 font-serif" >
        I took this course in Fall 2022. Excellent class taught by Professor Tim Richards. 
        A lot more in depth than I expected. I learned about virtualization, memory management, multhreading with semophores and mutexes,
        and file systems. One of the most fun project I did was the Producer and Consumer, which is a classic problem in multithreading.
        Multiple producer produces items and put them into a buffer, and multiple consumer consumes the items from the buffer. Ensuring
        that the producer and consumer do not access the buffer at the same time using semophores and mutexes.
    </p>

    <h1 class="text-xl font-normal font-mono mt-1">Code demonstration for Shell Program</h1>
    <Code language="cpp" code={code} />
</div>


<div class="flex justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/courses/Fall2022/CS360: Network Security/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/courses/Spring2023/CS326: Web Programming/README.md')}
	>
		Next
	</button>
</div>
