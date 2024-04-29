<script lang="ts">
	import CardTemplate from '../CardTemplate.svelte';
</script>

<div class="pt-2 pl-1 rounded-lg">
	<h1 class="text-xl font-extralight">EDUCATION</h1>
	<hr class="divide-solid border-slate-500 mt-1 border-1" />
	<CardTemplate
		title="University of Massachusetts Amherst"
		date="May 2025"
		websiteURL="https://www.umass.edu/"
		subTitle="Bachelor of Science in Computer Science and Mathematics"
		listItems={[
			'Math Coursework: Calculus I-III, Multivariate Calculus, Intro Linear Algebra, Ordinal Differential Equations, Mathematical Computing, Data Science Using R, Linear Algebra Applied Math, Statistical Computing',
			'Computer Science CourseWork: Data Structure, Introduction to Computation, Intro to C Programming, Computer Systems, Reasoning Under Uncertainty, Intro Computer Network, Operating Systems, Leadership Practicum, Web Programming, Computer Networks, Machine Learning, Practical and Application of Data Managemnet, Scalable Web Systems, Programming Methodology, Introduction to Algortithms, Social Issues in Computing, Independent Study (Advanced Web Programming), Web Systems Dev: Real-World, Theory and Practice/Software Engineering',
			'Codepath Coursework: iOS Programming with Storyboard (iOS 101), Technical Interview Prep (Tip 103), Web Programming in React (Web 102)'
		]}
	/>
</div>
