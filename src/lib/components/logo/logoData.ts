export type Brand = 'linkedin' | 'github' | 'gmail';

export type Logo = {
	[K in Brand]: {
		imageURL: string;
		websiteURL?: string;
	};
};

export const logoData: Logo = {
	github: {
		websiteURL: 'https://github.com/algebra2boy',
		imageURL: 'https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github'
	},
	linkedin: {
		websiteURL: 'https://linkedin.com/in/yytan04',
		imageURL: 'https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat&logo=LinkedIn'
	},
	gmail: {
		websiteURL: 'mailto:yongyetan1209@gmail.com',
		imageURL: 'https://img.shields.io/badge/-Gmail-DF0000?style=flat&logo=Gmail'
	}
};
