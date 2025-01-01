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

	let query = `
SELECT * 
FROM STUDENT
WHERE name='Yongye';
`;
</script>

<svelte:head>
	<title>Data Management</title>
	<meta name="description" content="Data Management" />
</svelte:head>

<CourseHeader>CS345: Data Management</CourseHeader>

<CourseDescription>
	Course Description: Modern computer systems make ample use of databases from where to share and
	synchronize many types of information. For example, commercial websites store information about
	clients and products in databases. Likewise, news organizations store news items and user
	preferences which can then be accessed from a variety of devices, and through a variety of
	formats. COMPSCI 345 provides a comprehensive introduction to the use of data management systems
	that can be used in such applications, with a strong emphasis on the relational database model.
	Some of the covered topics include application-driven database design, schema refinement,
	implementation of basic transactions, data on the web, and data visualization.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this course in Summer 2022. This course was a great introduction to the use of data
		management systems with an demonstration on SQL. The most takeway from this course was
		understanding the relational database model, entity relationship diagrams, SQL queries, and how
		to implement basic transactions and optimize queries, and providing security to different roles.
		Professor Jaime Davila was a great instructor and answered a lot of my questions via email.
		Functional dependencies, normalization, and indexing were some of the topics that I enjoyed
		learning.
	</p>
</CourseReflection>

<CourseDemonstration name="SQL" />
<CourseCode language="sql" code={query} />

<CourseNavigation
	prevLink="Spring2022/CS198C: C Programming Language"
	nextLink="Fall2022/CS360: Network Security"
/>
