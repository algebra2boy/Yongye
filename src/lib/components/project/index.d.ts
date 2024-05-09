import type { Brand } from '../logo';

export type PersonalProjectName =
	| 'LingoQuest'
	| 'PandoraBox'
	| 'Yongye'
	| 'yogo'
	| 'ice-faculty'
	| 'ice-queb'
	| 'Chemistry-Web-App'
	| "Cook'er"
	| 'CI-CD-Pipeline'
	| 'MLH-Web-Scraper'
	| 'DockerDeployment'
	| 'Free-Write'
	| 'Career-Explorer'
	| 'HouseFinder'
	| 'Pomodoro'
	| 'classic-quote-generator'
	| 'Event-Planner'
	| 'MCAS-Analysis'
	| 'ShopHub'
	| 'TechHouse'
	| 'Ree-See.it'
	| 'SwiftUI Learning'
	| 'Crewmate'
	| 'Community Board'
	| 'cat'
	| 'breweries'
	| 'Clue'
	| 'HelpFunding'
	| 'RateMyDine'
	| 'Socket programming'
	| 'DineAndGo'
	| 'Enrollment'
	| 'AbsenteeismAtWork'
	| 'Find.it'
	| 'Flashcards'
	| 'CYE take home assessment'
	| 'OHill-Squad-WeSQL'
	| 'HelloFromYongye'
	| 'Twilio-ChatBot'
	| 'Covid19-Analysis'
	| 'Circus'
	| 'Java Bundle'
	| 'TicTacToe'
	| 'Tips Calculator'
	| 'Hacking with Swift'
	| 'Snake Game'
	| 'RateMyDine2.0'
	| 'Router API'
	| 'VeRoViz'
	| 'Distance Matrix'
	| 'Twilio-ChatBot';

export type FileStructure = {
	type: 'folder' | 'file';
	name: string;
	files?: FileStructure[];
};

export type PersonalProject = {
	name: PersonalProjectName;
	description: string;
	logo: Brand[];
	startDate: Date;
	endDate: Date;
	githubLink?: string;
	readme?: string;
};

export type README = {
	[R in PersonalProjectName]: string;
};
