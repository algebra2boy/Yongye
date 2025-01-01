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

<CourseHeader>CS490STA: Scalable Web Systems</CourseHeader>

<CourseDescription>
	Course Description: The web has become a large and complex area for application development.
	Access to an abundance of open source languages, libraries, and frameworks has led to the quick
	and easy construction of a variety of applications with several moving parts working in
	coordination to present to the user the illusion of a single program. In reality, web applications
	are extremely difficult to get right. They involve a large collection of coordinated services,
	multiple databases, complicated user interfaces, security and performance issues, and ever
	changing 3rd party services, spread across physical and virtual machines. These complications are
	further stressed by the large number of concurrent users that access these applications every
	second. This course will investigate several well known web-based applications and the technology
	and software architecture used to scale these applications. We will also study a specific topic
	related to scalability in software design in the context of web application architecture.
</CourseDescription>

<CourseDivider />

<CourseReflection>
	<p>
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
</CourseReflection>

<CourseDemonstration name="Event Bus" />
<CourseCode language="javascript" {code} />

<CourseNavigation
	prevLink="Spring2023/CS589: Machine Learning"
	nextLink="Fall2023/CS220: Programming Methodology"
/>
