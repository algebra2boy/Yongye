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
	<title>Network Security</title>
	<meta name="description" content="Network Security" />
</svelte:head>

<CourseHeader>CS360: Network Security</CourseHeader>

<CourseDescription>
	Course Description: This course provides an introduction to the principles and practice of
	computer and network security. A focus on both fundamentals and practical information will be
	stressed. The three key topics of this course are cryptography, privacy, and network security.
	Subtopics include ciphers, hashes, key exchange, security services (integrity, availability,
	confidentiality, etc.), security attacks, vulnerabilities, anonymous communications, and
	countermeasures.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this course in Fall 2022. This course was a great introduction to the principles and
		practice of computer and network security. The most takeway from this course was understanding
		the importance of cryptography, privacy, and network security. The course covered cryptography
		like SHA and AES, public key infrastructure, and network security like firewalls, malwares, and
		so on. For the final project, I worked on a research paper on the topic of
		<a href="/pdf/SQLInjection.pdf" class="underline"> SQL Injection</a>, which you can find the
		report from the link.
	</p>
</CourseReflection>

<CourseNavigation
	prevLink="Summer2022/CS345: Data Management"
	nextLink="Fall2022/CS377: Operating Systems"
/>
