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
		logo: ['Typescript'],
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
		name: 'ice-iceb',
		description: 'A robust REST and WebSocket API for managing office hour',
		logo: ['Typescript', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 5)
	},
	{
		name: 'Chemistry Web App',
		description: 'A web app that help students to learn chemistry',
		logo: ['Typescript', 'Node.js', 'Svelte', 'TailwindCSS', 'Express', 'MongoDB', 'Playwright', 'Jest'],
		startDate: new Date(2024, 2),
		endDate: new Date(2024, 5)
	}
];
