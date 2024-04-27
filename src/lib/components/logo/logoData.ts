export type Brand = 'Linkedin' | 'Github' | 'Gmail' |
	'Typescript' | 'Python' | 'Docker'| 'Node.js' | 'HTML' | 
	'CSS' | 'TailwindCSS' | 'Swift' | 'Javascript' | 
	'Java' | 'R' | 'C/C++' | 'SQL';

export type Logo = {
	[K in Brand]: {
		imageURL: string;
		websiteURL?: string;
	};
};

export const logoData: Logo = {
	Github: {
		websiteURL: 'https://github.com/algebra2boy',
		imageURL: 'https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github'
	},
	Linkedin: {
		websiteURL: 'https://linkedin.com/in/yytan04',
		imageURL: 'https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=LinkedIn'
	},
	Gmail: {
		websiteURL: 'mailto:yongyetan1209@gmail.com',
		imageURL: 'https://img.shields.io/badge/-Gmail-DF0000?style=flat&logo=Gmail'
	},
	Typescript: {
		imageURL: 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white'
	},
	Python: {
		imageURL: "https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white",
	},
	Docker: {
		imageURL: "https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white",
	},
	"Node.js": {
		imageURL: "https://img.shields.io/badge/-Node.js-339933?style=flat&logo=node-dot-js&logoColor=white",
	},
	HTML: {
		imageURL: "https://img.shields.io/badge/-HTML-E34F26?style=flat&logo=html5&logoColor=white",
	},
	CSS: {
		imageURL: "https://img.shields.io/badge/-CSS-1572B6?style=flat&logo=css3&logoColor=white",
	},
	TailwindCSS: {
		imageURL: "https://img.shields.io/badge/-TailwindCSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white",
	},
	Swift: {
		imageURL: "https://img.shields.io/badge/-Swift-FA7343?style=flat&logo=swift&logoColor=white",
	},
	Javascript: {
		imageURL: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black",
	},
	Java: {
		imageURL: "https://img.shields.io/badge/-Java-007396?style=flat&logo=java&logoColor=white",
	},
	R: {
		imageURL: "https://img.shields.io/badge/-R-276DC3?style=flat&logo=r&logoColor=white",
	},
	SQL: {
		imageURL: "https://img.shields.io/badge/-SQL-336791?style=flat&logo=postgresql&logoColor=white"
	},
	"C/C++": {
		imageURL: "https://img.shields.io/badge/-C%2FC++-00599C?style=flat&logo=cplusplus&logoColor=white"
	}
};
