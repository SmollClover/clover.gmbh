import { Project } from '../interface/Project';

export const projects: Array<Project> = [
	{
		name: 'Jahresprojekt FA11',
		description:
			'A Class project where we got split into groups of four. Each group received the same Specifications for a Prototype Game collection. We were tasked with writing a Specificationbook and then code a complete Prototype with all of the Specifications in the language Python using PyGame as the GUI library.',
		imagePath: '/image/Jahresprojekt-FA11.png',
		githubUrl: 'https://github.com/SmollClover/Jahresprojekt-FA11',
		categories: ['application', 'school'],
		keys: ['School Project', 'Python', 'PyGame', 'Games'],
	},
	{
		name: 'Print Screen',
		description:
			'A Online Hosted Screenshotting Service where Users can Upload Pictures through ShareX to then receive a Link to the then online hosted Image',
		imagePath: '/image/Print-Screen.png',
		deployUrl: 'https://print-screen.dev/',
		categories: ['website'],
		keys: ['Screenshotting Service', 'Website', 'Public', 'ShareX'],
	},
	{
		name: 'Hiko',
		description: 'A Ticket Managing Discord Bot that uses the Thread feature',
		imagePath: '/image/Hiko.png',
		githubUrl: 'https://github.com/SmollClover/Hiko',
		categories: ['discord bot'],
		keys: ['Discord', 'NodeJS', 'Bot', 'Moderation'],
	},
	{
		name: 'Kioshi',
		description: 'A automated Discord Bot that handles Server Booster perks',
		imagePath: '/image/Kioshi.png',
		githubUrl: 'https://github.com/SmollClover/Kioshi',
		categories: ['discord bot'],
		keys: ['Discord', 'NodeJS', 'Bot', 'Moderation'],
	},
	{
		name: 'Yagi',
		description: 'A automated Anti-Raid Discord Bot',
		imagePath: '/image/Yagi.png',
		githubUrl: 'https://github.com/SmollClover/Yagi',
		categories: ['discord bot'],
		keys: ['Discord', 'NodeJS', 'Bot', 'Moderation'],
	},
	{
		name: 'Vocalhooks',
		description: "A Webserver that's designed to listen for requests and then do certain Actions defined in a file",
		imagePath: '/image/Placeholder.png',
		githubUrl: 'https://github.com/SmollClover/Vocalhooks',
		categories: ['application'],
		keys: ['Webserver', 'Webhooks', 'Automated'],
	},
	{
		name: 'Hexador',
		description: 'A File encryption Program which always produces a random output which it can still decode',
		imagePath: '/image/Placeholder.png',
		githubUrl: 'https://github.com/SmollClover/Hexador',
		categories: ['application'],
		keys: ['Encryption', 'Security'],
	},
	{
		name: 'Neural Network',
		description: 'A basic Neural Network Implementation in TypeScript',
		imagePath: '/image/Placeholder.png',
		githubUrl: 'https://github.com/SmollClover/Neural-Network',
		categories: ['other'],
		keys: ['Neural Network', 'Machine Learning'],
	},
];
