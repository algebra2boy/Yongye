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
	| 'RabbitMQ';

export type Logo = {
	[K in Brand]: {
		imageURL: string;
		websiteURL?: string;
		isPersonalRelated: boolean; // if the logo is related to personal information
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
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
		isPersonalRelated: false
	},
	R: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg',
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
	},
	Express: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
		isPersonalRelated: false
	},
	React: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
		isPersonalRelated: false
	},
	MongoDB: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
		isPersonalRelated: false
	},
	'Socket.io': {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg',
		isPersonalRelated: false
	},
	Svelte: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg',
		isPersonalRelated: false
	},
	Playwright: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
		isPersonalRelated: false
	},
	Jest: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
		isPersonalRelated: false
	},
	Golang: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
		isPersonalRelated: false
	},
	GithubAction: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
		isPersonalRelated: false
	},
	Azure: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
		isPersonalRelated: false
	},
	Bootstrap: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg',
		isPersonalRelated: false
	},
	AWS: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
		isPersonalRelated: false
	},
	ChatGPT: {
		imageURL: 'https://static-00.iconduck.com/assets.00/openai-icon-2021x2048-4rpe5x7n.png',
		isPersonalRelated: false
	},
	Flask: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
		isPersonalRelated: false
	},
	'Tesseract.js': {
		imageURL:
			'https://raw.githubusercontent.com/naptha/tesseract.js/HEAD/docs/images/tesseract.png',
		isPersonalRelated: false
	},
	Twilio: {
		imageURL:
			'https://yt3.googleusercontent.com/ytc/AIdro_mPLQY8e9917tUTXcnpZ7jhvuyH9a9GX_57slDz38J8Ej8=s900-c-k-c0x00ffffff-no-rj',
		isPersonalRelated: false
	},
	MySQL: {
		imageURL: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
		isPersonalRelated: false
	},
	Gin: {
		imageURL: 'https://raw.githubusercontent.com/gin-gonic/logo/master/color.png',
		isPersonalRelated: false
	},
	RabbitMQ: {
		imageURL:
			'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
		isPersonalRelated: false
	}
};
