<script>
	import { goto } from '$app/navigation';
	import {
		CourseHeader,
		CourseDescription,
		CourseReflection,
		CourseNavigation
	} from '$lib/components/course';
</script>

<svelte:head>
	<title>Data Science For Good</title>
	<meta name="description" content="Data Science For Good" />
</svelte:head>

<CourseHeader>CS191: Data Science For Goods</CourseHeader>

<CourseDescription>
	Course Description: An exploration of computer science for first-year CICS students
</CourseDescription>

<hr class="divide-solid border-slate-500 mt-1 border-1" />

<CourseReflection>
	I took this seminar in Fall 2021, and the course went over a brief introduction about K nearest
	neighbors and training and testing using a sample to perform predictive analysis, logistic
	regression, and the use of the Random Forest to evaluate the model. At the end of the course, we
	were tasked with a final project to analyze a dataset and present our findings. The final project
	was about predicting breast cancer from FNA Using Machine, and you can find the report from here:
	<a href="/pdf/CS_191_Project.pdf" class="underline"> CS 191 Project </a>
</CourseReflection>

<CourseNavigation nextLink="Spring2022/CS198C: C Programming Language" />
