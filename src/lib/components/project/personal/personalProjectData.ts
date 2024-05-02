import type { Brand } from '../../logo/index.js';

export type Project = {
	name: string;
	description: string;
	logo: Brand[];
	startDate: Date;
	endDate: Date;
};

export const personalProjects: Project[] = [
	{
		name: 'LingoQuest',
		description: 'A language learning web app that helps learn language',
		logo: [
			'Docker',
			'Svelte',
			'Socket.io',
			'Typescript',
			'Gin',
			'Express',
			'MongoDB',
			'Flask',
			'RabbitMQ',
			'AWS',
			'GraphQL'
		],
		startDate: new Date(2024, 5),
		endDate: new Date(2024, 9)
	},
	{
		name: 'Yongye',
		description: 'My website! (This website!)',
		logo: ['Typescript', 'Svelte', 'TailwindCSS', 'Vercel'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 5)
	},
	{
		name: 'yogo',
		description: 'A command line tool to provide shortcut',
		logo: ['Typescript', 'Node.js'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 5)
	},
	{
		name: 'ice-faculty',
		description: 'A web app that allows faculty to upload office hour',
		logo: ['Docker', 'Typescript', 'Node.js', 'React', 'Express', 'MongoDB', 'Vercel'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 5)
	},
	{
		name: 'ice-queb',
		description: 'A robust REST and WebSocket API for managing office hour',
		logo: ['Docker', 'Typescript', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 5)
	},
	{
		name: 'Chemistry-Web-App',
		description: 'A web app that help students to learn chemistry',
		logo: ['Typescript', 'Svelte', 'TailwindCSS', 'Express', 'MongoDB', 'Playwright', 'Jest'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 5)
	},
	{
		name: "Cook'er",
		description: 'A mobile app that manage receipts in a Tinder-like way',
		logo: ['Javascript', 'Swift', 'Node.js', 'Express', 'MongoDB'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 2)
	},
	{
		name: 'CI-CD-Pipeline',
		description: 'Learning how to set up and trigger Github workflows',
		logo: ['GithubAction'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4)
	},
	{
		name: 'MLH-Web-Scraper',
		description: 'A scraper scrapes all the MLH hackathon event',
		logo: ['Golang', 'Gin'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4)
	},
	{
		name: 'DockerDeployment',
		description: 'learn how to deploy node.js express dockerized app on Azure',
		logo: ['Docker', 'Node.js', 'Express', 'Azure'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4)
	},
	{
		name: 'Free-Write',
		description: 'A simple free rich editor web app allow you to write and focus',
		logo: ['React', 'Javascript', 'TailwindCSS', 'Vercel'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4)
	},
	{
		name: 'Career-Explorer',
		description: 'A simple web app that searches real life job posting',
		logo: ['Svelte', 'Javascript', 'TailwindCSS', 'Vercel'],
		startDate: new Date(2024, 3),
		endDate: new Date(2024, 3)
	},
	{
		name: 'HouseFinder',
		description: 'A simple SwiftUI demo app to manage houses for real estate agent.',
		logo: ['Swift'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 2)
	},
	{
		name: 'Pomodoro',
		description: 'A simple pomodoro timer app on Apple Watch',
		logo: ['Swift'],
		startDate: new Date(2024, 1),
		endDate: new Date(2024, 2)
	},
	{
		name: 'classic-quote-generator',
		description: 'A simple Apple Watch app that generates classic quotes',
		logo: ['Swift'],
		startDate: new Date(2024, 1),
		endDate: new Date(2024, 1)
	},
	{
		name: 'Event-Planner',
		description: 'A web app that helps create and sign up events using microservices',
		logo: ['Docker', 'Javascript', 'Express', 'MongoDB', 'Bootstrap'],
		startDate: new Date(2023, 7),
		endDate: new Date(2023, 9)
	},
	{
		name: 'MCAS-Analysis',
		description: 'Explores the relationship between income and standardized test performance',
		logo: ['R', 'RStudio'],
		startDate: new Date(2023, 9),
		endDate: new Date(2024, 1)
	},
	{
		name: 'ShopHub',
		description: 'A shopping app that provides convenience to daily life',
		logo: ['Swift'],
		startDate: new Date(2023, 6),
		endDate: new Date(2023, 12)
	},
	{
		name: 'TechHouse',
		description: 'A platform to share computer science knowledge',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 11),
		endDate: new Date(2023, 12)
	},
	{
		name: 'Ree-See.it',
		description: 'An iOS mobile app that manages and stores receipts',
		logo: ['Docker', 'Swift', 'Express', 'MongoDB', 'AWS', 'ChatGPT', 'Flask', 'Tesseract.js'],
		startDate: new Date(2023, 11),
		endDate: new Date(2023, 11)
	},
	{
		name: 'SwiftUI Learning',
		description: 'A website that helps you learn SwiftUI like quizlet',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 10),
		endDate: new Date(2023, 10)
	},
	{
		name: 'Crewmate',
		description: 'A website that creates AmongUs characters',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 9),
		endDate: new Date(2023, 10)
	},
	{
		name: 'Community Board',
		description: 'A website that displays computer science club',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 9),
		endDate: new Date(2023, 10)
	},
	{
		name: 'cat',
		description: 'A website that finds cat images based on your preference',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 10),
		endDate: new Date(2023, 10)
	},
	{
		name: 'breweries',
		description: 'A website that finds breweries using API and generate analytics charts',
		logo: ['Javascript', 'React', 'CSS'],
		startDate: new Date(2023, 10),
		endDate: new Date(2023, 11)
	},
	{
		name: 'Clue',
		description: 'A room escape game implemented in C and pointers',
		logo: ['C'],
		startDate: new Date(2022, 2),
		endDate: new Date(2022, 3)
	},
	{
		name: 'HelpFunding',
		description: 'My Codepath Web 102 prework',
		logo: ['HTML', 'CSS', 'Javascript'],
		startDate: new Date(2023, 2),
		endDate: new Date(2023, 3)
	},
	{
		name: 'RateMyDine',
		description: 'A platform to share opinions about food from all dining hall at UMass Amherst',
		logo: ['HTML', 'CSS', 'Javascript'],
		startDate: new Date(2023, 2),
		endDate: new Date(2023, 5)
	},
	{
		name: 'Socket programming',
		description: 'Learn about how UCP and TCP work for both client and server',
		logo: ['Python'],
		startDate: new Date(2023, 3),
		endDate: new Date(2023, 4)
	},
	{
		name: 'DineAndGo',
		description: 'Making a restaurant management app',
		logo: ['Swift', 'Firebase'],
		startDate: new Date(2022, 11),
		endDate: new Date(2023, 2)
	},
	{
		name: 'Enrollment',
		description: 'A simple website for enrolling classes with login and register feature.',
		logo: ['HTML', 'CSS', 'Javascript', 'MongoDB', 'Flask'],
		startDate: new Date(2022, 11),
		endDate: new Date(2023, 1)
	},
	{
		name: 'AbsenteeismAtWork',
		description: 'Data Science Project about work absenteeism',
		logo: ['R', 'RStudio'],
		startDate: new Date(2022, 9),
		endDate: new Date(2023, 1)
	},
	{
		name: 'Find.it',
		description: 'A web app helps people to find their lost items on campus',
		logo: ['React', 'HTML', 'CSS', 'Twilio', 'Flask', 'MySQL'],
		startDate: new Date(2022, 11),
		endDate: new Date(2022, 12)
	},
	{
		name: 'Flashcards',
		description: 'An iOS app to help users to study in a productive and fun way',
		logo: ['Swift'],
		startDate: new Date(2022, 10),
		endDate: new Date(2022, 11)
	},
	{
		name: 'CYE take home assessment',
		description: 'My assessment for CYE',
		logo: ['Swift'],
		startDate: new Date(2022, 9),
		endDate: new Date(2022, 10)
	},
	{
		name: 'OHill-Squad-WeSQL',
		description: 'Learned how to connect mySQL database with Python.',
		logo: ['Python', 'MySQL'],
		startDate: new Date(2022, 8),
		endDate: new Date(2022, 9)
	},
	{
		name: 'HelloFromYongye',
		description: 'first mini iOS project to say hello and other greetings',
		logo: ['Swift'],
		startDate: new Date(2022, 7),
		endDate: new Date(2022, 7)
	},
	{
		name: 'Twilio-ChatBot',
		description: 'A conversional bot that integrates with many APIs.',
		logo: ['Python', 'Flask', 'Twilio'],
		startDate: new Date(2022, 7),
		endDate: new Date(2022, 8)
	},
	{
		name: 'Covid19-Analysis',
		description: 'A data analysis project about COVID-19 between mask mandate and hospitalization',
		logo: ['R', 'RStudio'],
		startDate: new Date(2020, 6),
		endDate: new Date(2020, 7)
	},
	{
		name: 'Circus',
		description: 'A Java project that includes feature to modify student personal data',
		logo: ['Java'],
		startDate: new Date(2021, 2),
		endDate: new Date(2021, 5)
	},
	{
		name: 'Java Bundle',
		description:
			'10 Java projects that I did in a community college course taught by Professor Paul Marques',
		logo: ['Java'],
		startDate: new Date(2021, 1),
		endDate: new Date(2021, 5)
	},
	{
		name: 'TicTacToe',
		description: 'A simple TicTacToe game implemented in Swift',
		logo: ['Swift'],
		startDate: new Date(2022, 12),
		endDate: new Date(2023, 2)
	},
	{
		name: 'Tips Calculator',
		description: 'A simple tips calculator implemented in Swift',
		logo: ['Swift'],
		startDate: new Date(2022, 12),
		endDate: new Date(2023, 1)
	},
	{
		name: 'Hacking with Swift',
		description: '13 projects that I did in Hacking with Swift',
		logo: ['Swift'],
		startDate: new Date(2023, 1),
		endDate: new Date(2023, 10)
	},
	{
		name: 'Snake Game',
		description: 'A simple snake game implemented in Swift using SpriteKit',
		logo: ['Swift'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4)
	},
	{
		name: 'RateMyDine2.0',
		description: 'Rate My Dine upgrade (but better, still in progress)',
		logo: ['Typescript', 'Express', 'Svelte', 'Jest'],
		startDate: new Date(2024, 1),
		endDate: new Date(2024, 2)
	},
	{
		name: 'Router API',
		description: 'An internal API that is used by Curbhub for Router',
		logo: ['Python', 'Flask'],
		startDate: new Date(2022, 6),
		endDate: new Date(2022, 8)
	},
	{
		name: 'VeRoViz',
		description: 'visualize vehicle routing problem (VRP)',
		logo: ['Python', 'Flask'],
		startDate: new Date(2022, 6),
		endDate: new Date(2022, 8)
	},
	{
		name: 'Twilio-ChatBot',
		description: 'A bot on WhatsApp for users to submit ID to perform background check',
		logo: ['Python', 'Flask', 'Twilio'],
		startDate: new Date(2022, 6),
		endDate: new Date(2022, 7)
	},
	{
		name: 'Distance Matrix',
		description:
			"Predict travel time using Uber's H3, Distance Matrix API, and NetworkX's Dijkstra",
		logo: ['Python', 'Flask'],
		startDate: new Date(2022, 7),
		endDate: new Date(2022, 8)
	}
];
