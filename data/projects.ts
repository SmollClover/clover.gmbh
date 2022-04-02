import { Project } from '../interface/Project';

export const projects: Array<Project> = [
	{
		name: 'Hiko',
		description: 'A Ticket Managing Discord Bot that uses the Thread feature',
		imagePath: '/image/Hiko.png',
		githubUrl: 'https://github.com/SmollClover/Hiko',
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
		name: 'Print Screen',
		description:
			'A Online Hosted Screenshotting Service where Users can Upload Pictures through ShareX to then receive a Link to the then online hosted Image',
		imagePath: '/image/Print-Screen.png',
		deployUrl: 'https://print-screen.dev/',
		categories: ['website'],
		keys: ['Screenshotting Service', 'Website', 'Public', 'ShareX'],
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
