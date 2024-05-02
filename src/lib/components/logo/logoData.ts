import type { DevIconOption, Logo } from './index.d.ts';

export const getImageFromDevicon = (
	name: string,
	option: DevIconOption = 'original',
	wordmark: boolean = false
): string => {
	return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${option}${
		wordmark ? '-wordmark' : ''
	}.svg`;
};

export const techStack: Logo = {
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
		imageURL: getImageFromDevicon('typescript'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	Python: {
		imageURL: getImageFromDevicon('python'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	Docker: {
		imageURL: getImageFromDevicon('docker'),
		isPersonalRelated: false,
		isTechTool: true
	},
	'Node.js': {
		imageURL: getImageFromDevicon('nodejs'),
		isPersonalRelated: false,
		isTechTool: true
	},
	HTML: {
		imageURL: getImageFromDevicon('html5'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	CSS: {
		imageURL: getImageFromDevicon('css3'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	TailwindCSS: {
		imageURL: getImageFromDevicon('tailwindcss'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Swift: {
		imageURL: getImageFromDevicon('swift'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	Javascript: {
		imageURL: getImageFromDevicon('javascript'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	Java: {
		imageURL: getImageFromDevicon('java'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	R: {
		imageURL: getImageFromDevicon('r'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	PostgreSQL: {
		imageURL: getImageFromDevicon('postgresql'),
		isPersonalRelated: false,
		isTechTool: true
	},
	C: {
		imageURL: getImageFromDevicon('c'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	'C++': {
		imageURL: getImageFromDevicon('cplusplus'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	Express: {
		imageURL: getImageFromDevicon('express'),
		isPersonalRelated: false,
		isTechTool: true
	},
	React: {
		imageURL: getImageFromDevicon('react'),
		isPersonalRelated: false,
		isTechTool: true
	},
	MongoDB: {
		imageURL: getImageFromDevicon('mongodb'),
		isPersonalRelated: false,
		isTechTool: true
	},
	'Socket.io': {
		imageURL: getImageFromDevicon('socketio'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Svelte: {
		imageURL: getImageFromDevicon('svelte'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Playwright: {
		imageURL: getImageFromDevicon('playwright'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Jest: {
		imageURL: getImageFromDevicon('jest', 'plain'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Golang: {
		imageURL: getImageFromDevicon('go'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	GithubAction: {
		imageURL: getImageFromDevicon('github'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Azure: {
		imageURL: getImageFromDevicon('azure'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Bootstrap: {
		imageURL: getImageFromDevicon('bootstrap'),
		isPersonalRelated: false,
		isTechTool: true
	},
	AWS: {
		imageURL: getImageFromDevicon('amazonwebservices', 'original', true),
		isPersonalRelated: false,
		isTechTool: true
	},
	ChatGPT: {
		imageURL: 'https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png',
		isPersonalRelated: false,
		isTechTool: true
	},
	Flask: {
		imageURL: getImageFromDevicon('flask'),
		isPersonalRelated: false,
		isTechTool: true
	},
	'Tesseract.js': {
		imageURL:
			'https://raw.githubusercontent.com/naptha/tesseract.js/HEAD/docs/images/tesseract.png',
		isPersonalRelated: false,
		isTechTool: true
	},
	Twilio: {
		imageURL: 'https://cdn.iconscout.com/icon/free/png-256/free-twilio-3521773-2945271.png?f=webp',
		isPersonalRelated: false,
		isTechTool: true
	},
	MySQL: {
		imageURL: getImageFromDevicon('mysql'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Gin: {
		imageURL: 'https://raw.githubusercontent.com/gin-gonic/logo/master/color.png',
		isPersonalRelated: false,
		isTechTool: true
	},
	RabbitMQ: {
		imageURL: getImageFromDevicon('rabbitmq'),
		isPersonalRelated: false,
		isTechTool: true
	},
	SQL: {
		imageURL: getImageFromDevicon('azuresqldatabase'),
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	VSCode: {
		imageURL: getImageFromDevicon('vscode'),
		isPersonalRelated: false,
		isTechTool: true
	},
	PyCharm: {
		imageURL: getImageFromDevicon('pycharm'),
		isPersonalRelated: false,
		isTechTool: true
	},
	IntelliJ: {
		imageURL: getImageFromDevicon('intellij'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Xcode: {
		imageURL: getImageFromDevicon('xcode'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Jupyter: {
		imageURL: getImageFromDevicon('jupyter'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Postman: {
		imageURL: getImageFromDevicon('postman'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Firebase: {
		imageURL: getImageFromDevicon('firebase'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Git: {
		imageURL: getImageFromDevicon('git'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Vercel: {
		imageURL: getImageFromDevicon('vercel'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Netlify: {
		imageURL: getImageFromDevicon('netlify'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Bash: {
		imageURL: getImageFromDevicon('bash'),
		isPersonalRelated: false,
		isTechTool: true
	},
	FastAPI: {
		imageURL: getImageFromDevicon('fastapi'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Latex: {
		imageURL: getImageFromDevicon('latex'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Linux: {
		imageURL: getImageFromDevicon('linux'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Mongoose: {
		imageURL: getImageFromDevicon('mongoose'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Kubernetes: {
		imageURL: getImageFromDevicon('kubernetes'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Npm: {
		imageURL: getImageFromDevicon('npm', 'original', true),
		isPersonalRelated: false,
		isTechTool: true
	},
	Pnpm: {
		imageURL: getImageFromDevicon('pnpm'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Nodemon: {
		imageURL: getImageFromDevicon('nodemon'),
		isPersonalRelated: false,
		isTechTool: true
	},
	'Three.js': {
		imageURL: getImageFromDevicon('threejs'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Vite: {
		imageURL: getImageFromDevicon('vite'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Notion: {
		imageURL: getImageFromDevicon('notion'),
		isPersonalRelated: false,
		isTechTool: true
	},
	Figma: {
		imageURL: getImageFromDevicon('figma'),
		isPersonalRelated: false,
		isTechTool: true
	},
	NetworkX: {
		imageURL: getImageFromDevicon('networkx'),
		isPersonalRelated: false,
		isTechTool: true
	},
	GraphQL: {
		imageURL: getImageFromDevicon('graphql', 'plain'),
		isPersonalRelated: false,
		isTechTool: true
	},
	RStudio: {
		imageURL: getImageFromDevicon('rstudio'),
		isPersonalRelated: false,
		isTechTool: true
	}
};
