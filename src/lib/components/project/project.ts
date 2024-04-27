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
		name: 'yogo',
		description: 'A command line tool to provide shortcut',
		logo: ['Typescript'],
		startDate: new Date(2024, 4),
		endDate: new Date(2024, 5)
	}
];
