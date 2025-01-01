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
	<title>Independent Study</title>
	<meta name="description" content="Independent Study" />
</svelte:head>

<CourseHeader>CS396: Independent Study</CourseHeader>

<CourseDescription>
	Course Description: The main objective of this proposal is to delve into cloud migration
	andcontainerization within the framework of a microservice architecture using the Javascript
	orTypescript programming language, but not limited to these languages. Another importantobjective
	is to focus on API version management and explore GraphQL, as well as acquiringskills to manage
	software workflows through CI/CD methodologies
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this independent study in the Spring of 2024. First of all, thank you Tim, as known as my
		advisor, mentor, professor, and friend. I really wanted to learn more about advanced web topics
		and decided to reach out to my favorite professor, Tim Richards, to see if he would be
		interested in advising me on an independent study. This course was a great opporunity for me to
		learn independently and explore the topics that I am interested in. There are many web topics
		that I explored and this Notion page is a reflection of my learning journey:
		<a
			href="https://yongye.notion.site/Advanced-Web-Topics-a306d6ba3c934af09bffa17ae318d875?pvs=25"
			class="underline">Advanced Web programming.</a
		>
	</p>
</CourseReflection>

<CourseNavigation prevLink="Spring2024/CS520: Theory and Practice of Software Engineering" />
