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
	<title>Web Systems Dev Real-World</title>
	<meta name="description" content="Web Systems Dev Real-World" />
</svelte:head>

<CourseHeader>CS496: Web Systems Dev Real-World</CourseHeader>

<CourseDescription>
	Course Description: This course is an engaging course designed for students to apply their web
	programming skills in building actual systems for real clients. This hands-on, project-based
	course starts with a review of essential web technologies and advances to topics like responsive
	design and database integration. Students will interact directly with clients, work in teams to
	develop functional web systems, and learn about project management, including agile methodologies.
	Emphasis is also placed on testing, deployment, and portfolio development. Ideal for those with
	advanced web programming knowledge, this course not only enhances technical skills but also
	prepares students for professional web development roles by offering a blend of theoretical
	knowledge and practical, real-world experience.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this course in the Spring of 2024. This course is special. You can learn more about what
		we do from <a href="/project/personal/Chemistry-Web-App" class="underline">here</a>.
	</p>
</CourseReflection>

<CourseNavigation
	prevLink="Spring2024/CICS305: Junior Year Writing"
	nextLink="Spring2024/CS520: Theory and Practice of Software Engineering"
/>
