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
function takeCS326() {
    while (true) {
        console.log('Excellent course! Learn a ton!');
    }
}
    `;
</script>

<svelte:head>
	<title>Web Programming</title>
	<meta name="description" content="Web Programming" />
</svelte:head>

<CourseHeader>CS326: Web Programming</CourseHeader>

<CourseDescription>
	Course Description: COMPSCI 326 presents a harmonious blend of theoretical foundations and
	practical application in the domain of web programming. Emphasizing both the aesthetic aspects of
	HTML and CSS and the functional use of JavaScript, the curriculum is designed to provide a
	comprehensive understanding of web development from a full stack perspective. Theoretical
	exploration includes an in-depth analysis of JavaScript as a multi-paradigm language, its role in
	front-end and back-end development, and the principles of HTTP communication. Students will engage
	in critical discussions about client-server architecture, exploring how JavaScript unifies these
	traditionally separate areas of development. A significant portion of the course is devoted to
	understanding JSON for data interchange, and methods of persistent storage in web applications
	without relying on conventional database systems. Practically, the course offers extensive
	hands-on experience. Students will apply theoretical concepts to real-world scenarios, developing
	responsive web interfaces, manipulating server-side JavaScript with Node.js, and integrating
	front-end and back-end with HTTP requests and responses. The curriculum is structured to encourage
	project-based learning, where students will conceptualize, design, and implement full-stack web
	applications, reflecting the integration of theory and practice. This course is ideal for students
	who have a foundational understanding of programming and seek a deep, theory-rich, and practical
	approach to mastering full-stack web development, with a special focus on JavaScript. It aims to
	equip students with both the conceptual framework and the technical skills necessary to excel in
	the evolving landscape of web development.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
		I took this course in Spring 2023. I had a lot of fun learning about web programming. Vanilla.js
		definitely should be the first thing to learn before jumping into any framework, like React,
		Svelte. The fundamental of web programming is to understnad how web API, DOM manipulation, and
		event handling works. The amount and diversity of exercises and projects in this course were
		very helpful to understand the concepts. We worked a single project called Scrabble where we
		designed and implemented a web application that allows users to play a game of Scrabble. It was
		a great experience to work on a project that involves both front-end and back-end. The
		discussions are insanely helpful, and the professor Tim Richards is very knowledgeable. Yes, Tim
		Richards, what a great professor. I would highly recommend this course to anyone who wants to
		learn web programming. For the final project, I worked on a web application that allows students
		to leave feedback for dinning hall food, which is called
		<a href="/project/personal/RateMyDine/" class="underline"> RateMyDine. </a>
		I still remember the day when I presented this project to him in the office hour. He was very impressed
		with the design and the functionality of the project. Jeff (one of my team member) and I showed him
		the sign and login page, and Tim signed up with his fake account and got saved into the MongoDB database.
		Amazing!
	</p>
</CourseReflection>

<CourseDemonstration name="Javascript" />
<CourseCode language="javascript" {code} />

<CourseNavigation
	prevLink="Fall2022/CS377: Operating Systems"
	nextLink="Spring2023/CS453: Computer Networks"
/>
