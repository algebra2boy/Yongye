import type { DevIconOption, Logo } from './';
import type { Brand } from './index';

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
	Expo: {
		imageURL: 'https://img.icons8.com/?size=100&id=hmieDPifBlBM&format=png&color=000000',
		isTechTool: true
	},
	Typescript: {
		imageURL: getImageFromDevicon('typescript'),
		isProgrammingLanguage: true
	},
	Python: {
		imageURL: getImageFromDevicon('python'),
		isProgrammingLanguage: true
	},
	Docker: {
		imageURL: getImageFromDevicon('docker'),
		isTechTool: true
	},
	'Node.js': {
		imageURL: getImageFromDevicon('nodejs'),
		isTechTool: true
	},
	HTML: {
		imageURL: getImageFromDevicon('html5'),
		isProgrammingLanguage: true
	},
	CSS: {
		imageURL: getImageFromDevicon('css3'),
		isProgrammingLanguage: true
	},
	TailwindCSS: {
		imageURL: getImageFromDevicon('tailwindcss'),
		isTechTool: true
	},
	Swift: {
		imageURL: getImageFromDevicon('swift'),
		isProgrammingLanguage: true
	},
	Javascript: {
		imageURL: getImageFromDevicon('javascript'),
		isProgrammingLanguage: true
	},
	Java: {
		imageURL: getImageFromDevicon('java'),
		isProgrammingLanguage: true
	},
	R: {
		imageURL: getImageFromDevicon('r'),
		isProgrammingLanguage: true
	},
	PostgreSQL: {
		imageURL: getImageFromDevicon('postgresql'),
		isTechTool: true
	},
	C: {
		imageURL: getImageFromDevicon('c'),
		isProgrammingLanguage: true
	},
	'C++': {
		imageURL: getImageFromDevicon('cplusplus'),
		isProgrammingLanguage: true
	},
	Express: {
		imageURL: getImageFromDevicon('express'),
		isTechTool: true
	},
	React: {
		imageURL: getImageFromDevicon('react'),
		isTechTool: true
	},
	MongoDB: {
		imageURL: getImageFromDevicon('mongodb'),
		isTechTool: true
	},
	'Socket.io': {
		imageURL: getImageFromDevicon('socketio'),
		isTechTool: true
	},
	Svelte: {
		imageURL: getImageFromDevicon('svelte'),
		isTechTool: true
	},
	Playwright: {
		imageURL: getImageFromDevicon('playwright'),
		isTechTool: true
	},
	Jest: {
		imageURL: getImageFromDevicon('jest', 'plain'),
		isTechTool: true
	},
	Golang: {
		imageURL: getImageFromDevicon('go'),
		isProgrammingLanguage: true
	},
	CSharp: {
		imageURL: getImageFromDevicon('csharp'),
		isProgrammingLanguage: true
	},
	Github: {
		imageURL: getImageFromDevicon('github'),
		isTechTool: true
	},
	Azure: {
		imageURL: getImageFromDevicon('azure'),
		isTechTool: true
	},
	Bootstrap: {
		imageURL: getImageFromDevicon('bootstrap'),
		isTechTool: true
	},
	AWS: {
		imageURL: getImageFromDevicon('amazonwebservices', 'original', true),
		isTechTool: true
	},
	ChatGPT: {
		imageURL: 'https://cdn.iconscout.com/icon/free/png-256/free-chatgpt-icon-svg-png-download-7576880.png?f=webp',
		isTechTool: true
	},
	Flask: {
		imageURL: getImageFromDevicon('flask'),
		isTechTool: true
	},
	'Tesseract.js': {
		imageURL:
			'https://raw.githubusercontent.com/naptha/tesseract.js/HEAD/docs/images/tesseract.png',
		isTechTool: true
	},
	Twilio: {
		imageURL: 'https://cdn.iconscout.com/icon/free/png-256/free-twilio-3521773-2945271.png?f=webp',
		isTechTool: true
	},
	MySQL: {
		imageURL: getImageFromDevicon('mysql'),
		isTechTool: true
	},
	Gin: {
		imageURL: 'https://avatars.githubusercontent.com/u/7894478?v=4',
		isTechTool: true
	},
	RabbitMQ: {
		imageURL: getImageFromDevicon('rabbitmq'),
		isTechTool: true
	},
	SQL: {
		imageURL: getImageFromDevicon('azuresqldatabase'),
		isProgrammingLanguage: true
	},
	VSCode: {
		imageURL: getImageFromDevicon('vscode'),
		isTechTool: true
	},
	PyCharm: {
		imageURL: getImageFromDevicon('pycharm'),
		isTechTool: true
	},
	IntelliJ: {
		imageURL: getImageFromDevicon('intellij'),
		isTechTool: true
	},
	Xcode: {
		imageURL: getImageFromDevicon('xcode'),
		isTechTool: true
	},
	Jupyter: {
		imageURL: getImageFromDevicon('jupyter'),
		isTechTool: true
	},
	Postman: {
		imageURL: getImageFromDevicon('postman'),
		isTechTool: true
	},
	Firebase: {
		imageURL: getImageFromDevicon('firebase'),
		isTechTool: true
	},
	Git: {
		imageURL: getImageFromDevicon('git'),
		isTechTool: true
	},
	Vercel: {
		imageURL: getImageFromDevicon('vercel'),
		isTechTool: true
	},
	Netlify: {
		imageURL: getImageFromDevicon('netlify'),
		isTechTool: true
	},
	Bash: {
		imageURL: getImageFromDevicon('bash'),
		isTechTool: true
	},
	FastAPI: {
		imageURL: getImageFromDevicon('fastapi'),
		isTechTool: true
	},
	Latex: {
		imageURL: getImageFromDevicon('latex'),
		isTechTool: true
	},
	Linux: {
		imageURL: getImageFromDevicon('linux'),
		isTechTool: true
	},
	Mongoose: {
		imageURL: getImageFromDevicon('mongoose'),
		isTechTool: true
	},
	Kubernetes: {
		imageURL: getImageFromDevicon('kubernetes'),
		isTechTool: true
	},
	Npm: {
		imageURL: getImageFromDevicon('npm', 'original', true),
		isTechTool: true
	},
	Pnpm: {
		imageURL: getImageFromDevicon('pnpm'),
		isTechTool: true
	},
	Nodemon: {
		imageURL: getImageFromDevicon('nodemon'),
		isTechTool: true
	},
	'Three.js': {
		imageURL: getImageFromDevicon('threejs'),
		isTechTool: true
	},
	Vite: {
		imageURL: getImageFromDevicon('vite'),
		isTechTool: true
	},
	Notion: {
		imageURL: getImageFromDevicon('notion'),
		isTechTool: true
	},
	Figma: {
		imageURL: getImageFromDevicon('figma'),
		isTechTool: true
	},
	NetworkX: {
		imageURL: getImageFromDevicon('networkx'),
		isTechTool: true
	},
	GraphQL: {
		imageURL: getImageFromDevicon('graphql', 'plain'),
		isTechTool: true
	},
	RStudio: {
		imageURL: getImageFromDevicon('rstudio'),
		isTechTool: true
	}
};

export const programmingLanguages = Object.keys(techStack)
	.sort()
	.filter((stack) => techStack[stack as Brand].isProgrammingLanguage) as Brand[];

export const tools = Object.keys(techStack)
	.sort()
	.filter((stack) => techStack[stack as Brand].isTechTool) as Brand[];
