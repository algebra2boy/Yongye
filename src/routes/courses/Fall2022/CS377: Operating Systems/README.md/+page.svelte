<script>
	import {
		CourseHeader,
		CourseDescription,
		CourseReflection,
		CourseNavigation,
		CourseDivider,
		CourseDemonstration,
		CourseCode
	} from '$lib/components/course';

	let code = `
    void simple_shell::parse_command(char *cmd, char **cmdTokens)
    `;
</script>

<svelte:head>
	<title>Operating System</title>
	<meta name="description" content="Operating System" />
</svelte:head>

<CourseHeader>CS377: Operating System</CourseHeader>

<CourseDescription>
	Course Description: In this course we examine the important problems in operating system design
	and implementation. The operating system provides a well-known, convenient, and efficient
	interface between user programs and the bare hardware of the computer on which they run. The
	operating system is responsible for allowing resources (e.g., disks, networks, and processors) to
	be shared, providing common services needed by many different programs (e.g., file service, the
	ability to start or stop processes, and access to the printer), and protecting individual programs
	from one another. The course will start with a brief historical perspective of the evolution of
	operating systems over the last fifty years, and then cover the major components of most operating
	systems. This discussion will cover the tradeoffs that can be made between performance and
	functionality during the design and implementation of an operating system. Particular emphasis
	will be given to three major OS subsystems: process management (processes, threads, CPU
	scheduling, synchronization, and deadlock), memory management (segmentation, paging, swapping),
	file systems, and operating system support for distributed systems.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this course in Fall 2022. Excellent class taught by Professor Tim Richards. A lot more in
		depth than I expected. I learned about virtualization, memory management, multhreading with
		semophores and mutexes, and file systems. One of the most fun project I did was the Producer and
		Consumer, which is a classic problem in multithreading. Multiple producer produces items and put
		them into a buffer, and multiple consumer consumes the items from the buffer. Ensuring that the
		producer and consumer do not access the buffer at the same time using semophores and mutexes.
	</p>
</CourseReflection>

<CourseDemonstration name="Shell Program" />
<CourseCode language="cpp" {code} />

<CourseNavigation
	prevLink="Fall2022/CS360: Network Security"
	nextLink="Spring2023/CS326: Web Programming"
/>
