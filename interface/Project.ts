export type Category = 'discord bot' | 'website' | 'application' | 'tool' | 'fun' | 'other';

export interface Project {
	name: string;
	description: string;
	imagePath: string;
	deployUrl?: string;
	githubUrl?: string;
	categories: Array<Category>;
	keys: Array<string>;
}
