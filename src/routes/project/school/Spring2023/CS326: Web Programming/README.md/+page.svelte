<script>
	import { goto } from '$app/navigation';
	import Code from '$lib/components/highlight/Code.svelte';

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

<div class="mt-2 text-gray-700">
	<h1 class="text-xl font-bold text-gray-900">CS326: Web Programming</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: COMPSCI 326 presents a harmonious blend of theoretical foundations and
		practical application in the domain of web programming. Emphasizing both the aesthetic aspects
		of HTML and CSS and the functional use of JavaScript, the curriculum is designed to provide a
		comprehensive understanding of web development from a full stack perspective. Theoretical
		exploration includes an in-depth analysis of JavaScript as a multi-paradigm language, its role
		in front-end and back-end development, and the principles of HTTP communication. Students will
		engage in critical discussions about client-server architecture, exploring how JavaScript
		unifies these traditionally separate areas of development. A significant portion of the course
		is devoted to understanding JSON for data interchange, and methods of persistent storage in web
		applications without relying on conventional database systems. Practically, the course offers
		extensive hands-on experience. Students will apply theoretical concepts to real-world scenarios,
		developing responsive web interfaces, manipulating server-side JavaScript with Node.js, and
		integrating front-end and back-end with HTTP requests and responses. The curriculum is
		structured to encourage project-based learning, where students will conceptualize, design, and
		implement full-stack web applications, reflecting the integration of theory and practice. This
		course is ideal for students who have a foundational understanding of programming and seek a
		deep, theory-rich, and practical approach to mastering full-stack web development, with a
		special focus on JavaScript. It aims to equip students with both the conceptual framework and
		the technical skills necessary to excel in the evolving landscape of web development.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this course in Spring 2023. I had a lot of fun learning about web programming. 
        Vanilla.js definitely should be the first thing to learn before jumping into any framework, like React, Svelte.
        The fundamental of web programming is to understnad how web API, DOM manipulation, and event handling works.
        The amount and diversity of exercises and projects in this course were very helpful to understand the concepts.
        We worked a single project called Scrabble where we designed and implemented a web application that allows users to play a game of Scrabble.
        It was a great experience to work on a project that involves both front-end and back-end. The discussions are insanely helpful, and the professor Tim Richards is very knowledgeable.
        Yes, Tim Richards, what a great professor. I would highly recommend this course to anyone who wants to learn web programming. For the final project,
        I worked on a web application that allows students to leave feedback for dinning hall food, which is called 
        <a href="/project/personal/RateMyDine/" class="underline">
            RateMyDine.
        </a>
        I still remember the day when I presented this project to him in the office hour. He was very impressed with the design and the functionality of the project.
        Jeff (one of my team member) and I showed him the sign and login page, and Tim signed up with his fake account and got saved into the MongoDB database.
        Amazing!
	</p>

	<h1 class="text-xl font-normal font-mono mt-1">Code demonstration of Javascript</h1>
	<Code language="javascript" {code} />
</div>

<div class="flex mt-5 justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Fall2022/CS377: Operating Systems/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Spring2023/CS453: Computer Networks/README.md')}
	>
		Next
	</button>
</div>
