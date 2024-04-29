export type Brand =
	| 'Linkedin'
	| 'Github'
	| 'Gmail'
	| 'Typescript'
	| 'Python'
	| 'Docker'
	| 'HTML'
	| 'CSS'
	| 'TailwindCSS'
	| 'Swift'
	| 'Javascript'
	| 'Java'
	| 'R'
	| 'C'
	| 'C++'
	| 'PostgreSQL'
	| 'MongoDB'
	| 'Express'
	| 'React'
	| 'Node.js'
	| 'Socket.io'
	| 'Svelte'
	| 'Playwright'
	| 'Jest'
	| 'Golang'
	| 'GithubAction'
	| 'Azure'
	| 'Bootstrap'
	| 'AWS'
	| 'ChatGPT'
	| 'Flask'
	| 'Tesseract.js'
	| 'Twilio'
	| 'MySQL'
	| 'Gin'
	| 'RabbitMQ'
	| 'SQL'
	| 'VSCode'
	| 'PyCharm'
	| 'IntelliJ'
	| 'Xcode'
	| 'Jupyter'
	| 'Postman'
	| 'Firebase'
	| 'Git'
	| 'Vercel'
	| 'Netlify'
	| 'Bash'
	| 'FastAPI'
	| 'Latex'
	| 'Linux'
	| 'Mongoose'
	| 'Kubernetes'
	| 'Npm'
	| 'Nodemon'
	| 'Pnpm'
	| 'Three.js'
	| 'Vite'
	| 'Notion'
	| 'Figma'
	| 'NetworkX'
	| 'GraphQL';

export type Logo = {
	[K in Brand]: {
		imageURL: string;
		websiteURL?: string;
		isProgrammingLanguage?: boolean; // if the logo is related to programming language
		isTechTool?: boolean; // if the logo is related to tech tools
		isPersonalRelated: boolean; // if the logo is related to personal information
	};
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
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	Python: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	Docker: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	'Node.js': {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	HTML: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	CSS: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	TailwindCSS: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Swift: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	Javascript: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	Java: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	R: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	PostgreSQL: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	C: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	'C++': {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	Express: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	React: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	MongoDB: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	'Socket.io': {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Svelte: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Playwright: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Jest: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Golang: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	GithubAction: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Azure: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Bootstrap: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	AWS: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	ChatGPT: {
		imageURL: 'https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png',
		isPersonalRelated: false,
		isTechTool: true
	},
	Flask: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
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
		imageURL:
			'https://yt3.googleusercontent.com/ytc/AIdro_mPLQY8e9917tUTXcnpZ7jhvuyH9a9GX_57slDz38J8Ej8=s900-c-k-c0x00ffffff-no-rj',
		isPersonalRelated: false,
		isTechTool: true
	},
	MySQL: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Gin: {
		imageURL: 'https://raw.githubusercontent.com/gin-gonic/logo/master/color.png',
		isPersonalRelated: false,
		isTechTool: true
	},
	RabbitMQ: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	SQL: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
		isProgrammingLanguage: true,
		isPersonalRelated: false
	},
	VSCode: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	PyCharm: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	IntelliJ: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Xcode: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Jupyter: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Postman: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Firebase: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Git: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Vercel: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Netlify: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Bash: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	FastAPI: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Latex: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Linux: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Mongoose: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Kubernetes: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Npm: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Pnpm: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pnpm/pnpm-original-wordmark.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Nodemon: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	'Three.js': {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Vite: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Notion: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	Figma: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	NetworkX: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/networkx/networkx-original.svg',
		isPersonalRelated: false,
		isTechTool: true
	},
	GraphQL: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
		isPersonalRelated: false,
		isTechTool: true
	}
};
