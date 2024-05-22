<script>
	import { goto } from '$app/navigation';
	import Code from '$lib/components/highlight/Code.svelte';

	let code = `
    app.post("/events", async (req, res) => {
    // the type of the event from each microservice
    const event = req.body;

    for (const { name, port } of servicePorts) {
        try {
            await fetch(\`http://<name>:<port>/events\`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(event)
            })

        } catch (error) {
            console.log(error);
        }
    }

    res.send({ status: 'OK' });
})
    `;
</script>

<svelte:head>
	<title>Scalable Web Systems</title>
	<meta name="description" content="Scalable Web Systems" />
</svelte:head>

<div class="text-gray-700 p-2">
	<small class="flex flex-row items-center gap-2 mb-2">
		<a href="/courses">← courses</a>
	</small>
	<h1 class="text-xl font-bold text-gray-900">CS490STA: Scalable Web Systems</h1>

	<h2 class="text-sm font-medium text-gray-600 mt-1">
		Course Description: The web has become a large and complex area for application development.
		Access to an abundance of open source languages, libraries, and frameworks has led to the quick
		and easy construction of a variety of applications with several moving parts working in
		coordination to present to the user the illusion of a single program. In reality, web
		applications are extremely difficult to get right. They involve a large collection of
		coordinated services, multiple databases, complicated user interfaces, security and performance
		issues, and ever changing 3rd party services, spread across physical and virtual machines. These
		complications are further stressed by the large number of concurrent users that access these
		applications every second. This course will investigate several well known web-based
		applications and the technology and software architecture used to scale these applications. We
		will also study a specific topic related to scalability in software design in the context of web
		application architecture.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-normal font-mono mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 text-sm font-mono">
		I took this course in Summer 2023. What? You haven't taken this course yet? You should! This
		course was amazing, excellent, and fantastic. Can I tell you how much I love this course? You
		learn about nodemon, morgan, helmet, middleware, curl, logging, testing, rate limiting, svelte,
		sveltekit, docker, docker compose, microservices, event driven architecture, and so much more. A
		lot of hands-on projects and exercises. If you are looking to learn about how to build a
		scalable web system, this course is for you. For the final project, I designed and implemented a
		web application that allows users to create and sign up for events, which is called <a
			href="/project/personal/Event-Planner"
			class="underline">Event Planner</a
		>. I became the UCA for this course in Fall 2023. It was great working with professor Tim
		Richards, and I learned a lot from him, TAs and other students.
	</p>

	<h1 class="text-xl font-normal font-mono mt-1">Code demonstration of Event Bus</h1>

	<Code language="javascript" {code} />
</div>


<div class="flex justify-center items-center gap-3 mb-6 mt-4">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/courses/Spring2023/CS589: Machine Learning/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/courses/Fall2023/CS220: Programming Methodology/README.md')}
	>
		Next
	</button>
</div>
