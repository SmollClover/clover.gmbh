import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';

import ProjectCard from '../components/ProjectCard';
import ProjectNavbar from '../components/ProjectNavbar';
import { fadeInUp, routeAnimation, stagger } from '../data/animations';
import { projects } from '../data/projects';
import { Category } from '../interface/Project';

import type { NextPage } from 'next';
const Project: NextPage = () => {
	const [filter, setFilter] = useState<null | Category>(null);

	const [showDetail, setShowDetail] = useState('');

	const handlerFilterCategory = (category: Category) => setFilter(category);

	return (
		<motion.div
			variants={routeAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
			className="px-5 py-2 overflow-y-auto"
			style={{ height: '57vh' }}
		>
			<Head>
				<title>Lars Belitz - Projects</title>
				<meta property="og:title" content="Lars Belitz - Projects" key="title" />
			</Head>

			<ProjectNavbar handlerFilterCategory={handlerFilterCategory} active={filter} />

			<motion.div variants={stagger} className="relative grid grid-cols-12 gap-4 my-3">
				{projects.map((value) => {
					return value.categories.includes(filter) || !filter ? (
						<motion.div
							variants={fadeInUp}
							key={value.name}
							className="col-span-12 p-2 sm:col-span-6 lg:col-span-4"
						>
							<ProjectCard project={value} showDetail={showDetail} setShowDetail={setShowDetail} />
						</motion.div>
					) : null;
				})}
			</motion.div>
		</motion.div>
	);
};

export default Project;
