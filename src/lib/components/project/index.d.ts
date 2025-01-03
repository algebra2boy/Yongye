import type { Brand } from '../logo';

export type PersonalProjectName =
	| 'DonutStripe'
	| 'LingoQuest'
	| 'PandoraBox'
	| 'Yongye'
	| 'yogo'
	| 'Ice-faculty'
	| 'Ice-queb'
	| 'Chemistry-Web-App'
	| "Cook'er"
	| 'CI-CD-Pipeline'
	| 'MLH-Web-Scraper'
	| 'DockerDeployment'
	| 'Free-Write'
	| 'Career-Explorer'
	| 'HouseFinder'
	| 'Pomodoro'
	| 'Quote-Generator'
	| 'Event-Planner'
	| 'MCAS-Analysis'
	| 'ShopHub'
	| 'TechHouse'
	| 'Ree-See.it'
	| 'SwiftUI Learning'
	| 'Crewmate'
	| 'Community Board'
	| 'Cat'
	| 'Breweries'
	| 'Clue'
	| 'HelpFunding'
	| 'RateMyDine'
	| 'Socket programming'
	| 'DineAndGo'
	| 'Enrollment'
	| 'AbsentWork'
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

export type PersonalProject = {
	name: PersonalProjectName;
	description: string;
	logo: Brand[];
	startDate: Date;
	endDate: Date;
	githubLink?: string;
	readme?: string;
};
