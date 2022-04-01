import type { NextPage } from 'next';

import Bar from '../components/Bar';

import { languages } from '../data/languages';
import { tools } from '../data/tools';

const Resume: NextPage = () => {
	return (
		<div className="px-6 py-2">
			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<h5 className="my-3 text-2xl font-bold">Education</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">Application Development</h5>
						<p className="font-semibold">Heinrich-Hertz-Berufskolleg (2021 - today)</p>
					</div>
				</div>
				{/* <div>
					<h5 className="my-3 text-2xl font-bold">Experience</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">None</h5>
						<p className="font-semibold"></p>
					</div>
				</div> */}
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
		</div>
	);
};

export default Resume;
