import type { Brand } from '../logo/logoData.js';

export type Project = {
	name: string;
	description: string;
	logo: Brand[];
	startDate: Date;
	endDate: Date;
};

export const projects: Project[] = [
	{
		name: 'Yongye',
		description: 'My website! (This website!)',
		logo: ['Typescript', "Svelte", "TailwindCSS"],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 5)
	},
	{
		name: 'yogo',
		description: 'A command line tool to provide shortcut',
		logo: ['Typescript', "Node.js"],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 5)
	},
	{
		name: 'ice-faculty',
		description: 'A web app that allows faculty to upload office hour',
		logo: ['Typescript', 'Node.js', 'React', 'Express', 'MongoDB'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 5)
	},
	{
		name: 'ice-queb',
		description: 'A robust REST and WebSocket API for managing office hour',
		logo: ['Typescript', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 5)
	},
	{
		name: 'Chemistry-Web-App',
		description: 'A web app that help students to learn chemistry',
		logo: ['Typescript', 'Node.js', 'Svelte', 'TailwindCSS', 'Express', 'MongoDB', 'Playwright', 'Jest'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 5)
	}, 
	{
		name: "CI-CD-Pipeline",
		description: "Learning how to set up and trigger Github workflows",
		logo: ["GithubAction"],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4)
	},
	{
		name: 'MLH-Web-Scraper',
		description: 'A scraper scrapes all the MLH hackathon event',
		logo: ["Golang"],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4)
	},
	{
		name: 'DockerDeployment',
		description: 'learn how to deploy node.js express dockerized app on Azure',
		logo: ["Docker", "Node.js", "Express", "Azure"],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4)
	},
	{
		name: 'Free-Write',
		description: 'A simple free rich editor web app allow you to write and focus',
		logo: ["React", "Javascript", "TailwindCSS"],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 4)
	},
	{
		name: 'Career-Explorer',
		description: 'A simple web app that searches real life job posting',
		logo: ["Svelte", "Javascript", "TailwindCSS"],
		startDate: new Date(2024, 3),
		endDate: new Date(2024, 3)
	},
	{
		name: 'HouseFinder',
		description: 'A simple SwiftUI demo app to manage houses for real estate agent.',
		logo: ["Swift"],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 2)
	}
];
