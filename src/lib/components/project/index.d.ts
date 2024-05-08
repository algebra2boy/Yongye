import type { Brand } from "../logo/index.d.ts";

export type FileStructure = {
	type: 'folder' | 'file';
	name: string;
	files?: FileStructure[];
};

export type Project = {
	name: string;
	description: string;
	logo: Brand[];
	startDate: Date;
	endDate: Date;
};