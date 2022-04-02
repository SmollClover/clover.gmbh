import type { NextPage } from 'next';

import ProjectCard from '../components/ProjectCard';

import { projects } from '../data/projects';

const Project: NextPage = () => {
	return (
		<div className="px-5 py-2 overflow-y-scroll" style={{ height: '57vh' }}>
			<nav>Navbar</nav>
			<div className="relative grid grid-cols-12 gap-4 my-3">
				{projects.map((value) => {
					return (
						<div key={value.name} className="col-span-12 p-2 sm:col-span-6 lg:col-span-4">
							<ProjectCard project={value} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Project;
