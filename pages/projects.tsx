import { useState } from 'react';

import ProjectCard from '../components/ProjectCard';
import ProjectNavbar from '../components/ProjectNavbar';
import { projects as projectsData } from '../data/projects';
import { Category } from '../interface/Project';

import type { NextPage } from 'next';
const Project: NextPage = () => {
	const [projects, setProjects] = useState(projectsData);
	const [active, setActive] = useState('all');

	const handlerFilterCategory = (category: Category | 'all') => {
		setActive(category);

		if (category === 'all') return setProjects(projectsData);
		return setProjects(projectsData.filter((project) => project.categories.includes(category)));
	};

	return (
		<div className="px-5 py-2 overflow-y-auto" style={{ height: '57vh' }}>
			<ProjectNavbar handlerFilterCategory={handlerFilterCategory} active={active} />

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
