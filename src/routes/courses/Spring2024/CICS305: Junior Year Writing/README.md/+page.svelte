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
	<title>Junior Year Writting</title>
	<meta name="description" content="Junior Year Writting" />
</svelte:head>

<CourseHeader>CICS305: Junior Year Writting</CourseHeader>

<CourseDescription>
	Course Description: CICS 305 satisfies the Junior Year Writing (JYW) requirement for CS and
	Informatics Majors at UMass. It is also an important course in the undergraduate curriculum for
	learning more about ethics and the social implications of computing. Topics vary each semester as
	many readings are taken from current events. At minimum, students should expect to learn more
	about how computing intersects with race, gender, access, identity, social class, priviledge,
	language, and the environment. Previous topics covered in class include: Gamergate, CS for All,
	algorithmic bias, inclusivity in CS, planned obsolescence, right to repair, energy consumption,
	speed of technological advance (and resultant societal effects), AI personhood, AI development,
	automation, and autonomous vehicles. Discussions are used to help students practice critical
	thinking about current issues in computing through a lens informed by social theories.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this course in the Spring of 2024. This course was interesting. First homework was to
		build a resume and cover letter. Second homework was to write a letter to a manager about
		advertisement. Third homework was to argue about unethical and ethical tools. Fourth homework
		was to write about a research paper. Fifth homework was to convince a high up manager to change
		a policy based on the research paper. For the research paper, I wrote about how Duolingo
		impacted the language learning enviornment in education. You can read the paper from here: <a
			href="/pdf/Duolingo.pdf"
			class="underline">Duolingo</a
		>.
	</p>
</CourseReflection>

<CourseNavigation
	prevLink="Fall2023/CS220: Programming Methodology"
	nextLink="Spring2024/CS496: Web Systems Dev Real-World"
/>
