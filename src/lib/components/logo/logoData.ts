export type Brand =
	| 'Linkedin'
	| 'Github'
	| 'Gmail'
	| 'Typescript'
	| 'Python'
	| 'Docker'
	| 'Node.js'
	| 'HTML'
	| 'CSS'
	| 'TailwindCSS'
	| 'Swift'
	| 'Javascript'
	| 'Java'
	| 'R'
	| 'C'
	| 'C++'
	| 'PostgreSQL';

export type Logo = {
	[K in Brand]: {
		imageURL: string;
		websiteURL?: string;
		isPersonalRelated: boolean; // if the logo is related to personal website
	};
};

export const logoData: Logo = {
	Github: {
		websiteURL: 'https://github.com/algebra2boy',
		imageURL: 'https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github',
		isPersonalRelated: true
	},
	Linkedin: {
		websiteURL: 'https://linkedin.com/in/yytan04',
		imageURL: 'https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=LinkedIn',
		isPersonalRelated: true
	},
	Gmail: {
		websiteURL: 'mailto:yongyetan1209@gmail.com',
		imageURL: 'https://img.shields.io/badge/-Gmail-DF0000?style=flat&logo=Gmail',
		isPersonalRelated: true
	},
	Typescript: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
		isPersonalRelated: false
	},
	Python: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
		isPersonalRelated: false
	},
	Docker: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
		isPersonalRelated: false
	},
	'Node.js': {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
		isPersonalRelated: false
	},
	HTML: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
		isPersonalRelated: false
	},
	CSS: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
		isPersonalRelated: false
	},
	TailwindCSS: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
		isPersonalRelated: false
	},
	Swift: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
		isPersonalRelated: false
	},
	Javascript: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
		isPersonalRelated: false
	},
	Java: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
		isPersonalRelated: false
	},
	R: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
		isPersonalRelated: false
	},
	PostgreSQL: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
		isPersonalRelated: false
	},
	C: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
		isPersonalRelated: false
	},
	'C++': {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
		isPersonalRelated: false
	}
};
