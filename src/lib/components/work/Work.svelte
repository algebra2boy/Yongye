<script lang="ts">
	type Job = {
		company: string;
		position: string;
		time: string;
		link: string;
	};

	let jobs: Job[] = [
		{
			company: 'Capital One',
			position: 'Software Engineering Intern',
			time: 'Summer 2025',
			link: 'https://www.capitalone.com/'
		},
		{
			company: 'Manning College',
			position: 'Course Assistant for Scalable Web Systems - CS 426',
			time: 'Spring 2025',
			link: 'https://www.cics.umass.edu/'
		},
		{
			company: 'Site Service Software',
			position: 'React Native Mobile Intern',
			time: 'Oct 2024 - Jan 2025',
			link: 'https://siteservicesoftware.com/'
		},
		{
			company: 'Fidelity Investments',
			position: 'iOS Mobile Intern',
			time: 'Summer 2024',
			link: 'https://www.fidelity.com/'
		},
		{
			company: 'Center For Youth Engagement',
			position: 'iOS/macOS developer',
			time: 'Mar 2023 - present',
			link: 'https://www.cyengagement.org/'
		},
		{
			company: 'Manning College',
			position: 'Course Assistant for Scalable Web Systems - CS 426',
			time: 'Fall 2023',
			link: 'https://www.cics.umass.edu/'
		},
		{
			company: 'Manning College',
			position: 'Course Assistant for Web Programming - CS 326',
			time: 'Summer 2023',
			link: 'https://www.cics.umass.edu/'
		},
		{
			company: 'Manning College',
			position: 'Course Assistant for Reasoning Under Uncertainty - CS 240',
			time: 'Spring 2023',
			link: 'https://www.cics.umass.edu/'
		},
		{
			company: 'Paper.io',
			position: 'Math Tutor',
			time: 'May 2022 - Feb 2023',
			link: 'https://paper.co/'
		},
		{
			company: 'Curbhub',
			position: 'Software Development Intern',
			time: 'Summer 2022',
			link: 'https://www.curbhub.io/'
		}
	];
</script>

<div class="pt-2 pl-2 rounded-lg">
	<h1 class="text-xl font-normal mb-2">Work Experience</h1>

	<ul class="list-disc pl-6 text-sm">
		{#each jobs as { company, position, time, link }}
			<li class="mt-0.5">
				<a href={link} class="underline">
					<span class="font-bold">
						{company}
					</span>
				</a>
				({time}): {position}
			</li>
		{/each}
	</ul>
</div>
