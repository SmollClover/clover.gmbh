import { motion } from 'framer-motion';
import Head from 'next/head';

import Bar from '../components/Bar';
import { fadeInUp, routeAnimation } from '../data/animations';
import { languages } from '../data/languages';
import { tools } from '../data/tools';

import type { NextPage } from 'next';
const Resume: NextPage = () => {
	return (
		<motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-6 py-2">
			<Head>
				<title>Lars Belitz - Resume</title>
				<meta property="og:title" content="Lars Belitz - Resume" key="title" />
			</Head>

			<div className="grid gap-6 md:grid-cols-2">
				<motion.div variants={fadeInUp} initial="initial" animate="animate">
					<h5 className="my-3 text-2xl font-bold">Education</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">Application Development</h5>
						<p className="font-semibold">Heinrich-Hertz-Berufskolleg (2021 - today)</p>
					</div>
				</motion.div>
				{/* <motion.div variants={fadeInUp} initial="initial" animate="animate">
					<h5 className="my-3 text-2xl font-bold">Experience</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">None, yet</h5>
						<p className="font-semibold"></p>
					</div>
				</motion.div> */}
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<h5 className="my-3 text-2xl font-bold">Languages</h5>
					<div className="my-2">
						{languages.map((value) => {
							return <Bar data={value} key={value.name} />;
						})}
					</div>
				</div>
				<div>
					<h5 className="my-3 text-2xl font-bold">Tools</h5>
					<div className="my-2">
						{tools.map((value) => {
							return <Bar data={value} key={value.name} />;
						})}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Resume;
