export type Brand =
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
	| 'Github'
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
	| 'GraphQL'
	| 'RStudio'
	| 'Expo';

export type Logo = {
	[K in Brand]: {
		imageURL: string;
		websiteURL?: string;
		isProgrammingLanguage?: boolean; // if the logo is related to programming language
		isTechTool?: boolean; // if the logo is related to tech tools
	};
};

type DevIconOption = 'original' | 'plain';
