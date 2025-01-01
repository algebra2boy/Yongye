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

<CourseHeader>CS220: Programming Methodology</CourseHeader>

<CourseDescription>
	Course Description: The goal of COMPSCI220 Programming Methodology is to turn you into an advanced
	programmer with a deep understanding of modern programming methodology. We will emphasize good
	software engineering skills, including programming abstractions, testing, and debugging. Although
	the programming language that we will use is JavaScript, we will emphasize general programming
	principles. Everything that you will learn in the class will be applicable to other modern
	languages, including (for example) C++, C#, D, Go, Java, Python, Rust, and Swift.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this course in Fall 2023. A lot of design patterns, and software engineering principles
		taught by professor Marius Minea. This course is indeed very time consuming, and but it is super
		worth and rewarding. You learn how to write good code and think more critically about the code
		you write. The course is very project-based and intense. Project every single week was a lot of
		work, but it was a great learning experience. It was great to learn about typescript,
		observables, promises, async/await, and building an interpreters, and fluent design, black box
		testing, and functional programming.
	</p>
</CourseReflection>

<CourseDemonstration name="Typescript" />
<CourseCode language="typescript" {code} />

<CourseNavigation
	prevLink="Summer2023/CS490STA: Scalable Web Systems"
	nextLink="Spring2024/CICS305: Junior Year Writing"
/>
