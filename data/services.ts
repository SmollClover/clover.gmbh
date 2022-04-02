import { FaCloud, FaRegWindowRestore, FaRobot, FaTools } from 'react-icons/fa';

import { Service } from '../interface/Service';

export const Services: Array<Service> = [
	{
		title: 'Discord Bots',
		description: 'I\'ve been programming Discord Bots for 4 years now, so I\'ve learned how to properly do it.',
		SIcon: FaRobot,
	},
	{
		title: 'Websites',
		description: 'I\'m capable of building very small Websites that serve simple purposes.',
		SIcon: FaCloud,
	},
	{
		title: 'Applications',
		description: 'Through Electron, I can make applications for Windows, Linux and MacOS.',
		SIcon: FaRegWindowRestore,
	},
	{
		title: 'Tools',
		description: 'Small Applications which do certain actions by parsing starting Arguments.',
		SIcon: FaTools,
	},
];
