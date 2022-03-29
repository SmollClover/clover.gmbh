import ServiceCard from '../components/ServiceCard';
import { Services } from '../data';

import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className="flex flex-col px-6 pt-1">
			<h5 className="my-3">
				I am currently in training to become an IT specialist in the firld of application development. I have over 4
				years of personal experience by tinkering and creating some Bots for the online messaging plattform Discord
			</h5>
			<div className="flex-grow p-4 " style={{ marginLeft: '-1rem', marginRight: '-1rem', marginTop: '-1.5rem' }}>
				<h6 className="my-3 text-xl font-bold tracking-wide">What I offer</h6>
				<div className="grid gap-6 lg:grid-cols-2">
					{Services.map((service) => {
						return (
							<div key={service.id} className="rounded-lg lg:col-span-1 bg-darker-600">
								<ServiceCard service={service} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
