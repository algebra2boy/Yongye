<script>
	import {
		CourseHeader,
		CourseDescription,
		CourseReflection,
		CourseNavigation,
		CourseDivider
	} from '$lib/components/course';
</script>

<svelte:head>
	<title>Theory and Practice of Software Engineering</title>
	<meta name="description" content="Junior Year Writting" />
</svelte:head>

<CourseHeader>CS520: Theory and Practice of Software Engineering</CourseHeader>

<CourseDescription>
	Course Description: CS 520 introduces students to the principal activities and state-of-the-art
	techniques involved in developing high-quality software systems. Topics include: requirements
	analysis, formal specification methods, software design, software testing and debugging, program
	analysis, and automated software engineering.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this course in the Spring of 2024. I learned the most were advanced git concepts (cherry
		picking, rebasing, squashing, and merging), software design patterns, and software testing, and
		automated testing using Randoop. The course was project-based and we worked in a team to build a
		software system. We used Notion to document everything, and you can find our offical page of our
		final project, <a
			href="https://yongye.notion.site/Ice-Queb-6b2c3f17a1fc45389f03c585d92f2afb?pvs=25"
			class="underline">Ice-Queb</a
		>.
	</p>
</CourseReflection>

<CourseNavigation
	prevLink="Spring2024/CS496: Web Systems Dev Real-World"
	nextLink="Spring2024/CS396: Independent Study"
/>
