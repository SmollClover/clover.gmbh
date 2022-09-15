import '../styles/globals.css';

import { AnimatePresence } from 'framer-motion';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
			<div className="col-span-12 text-center lg:col-span-3">
				<Sidebar />
			</div>
			<div className="flex flex-col col-span-12 lg:col-span-9">
				<div className="mb-7 bg-dark rounded-2xl">
					<Navbar />
				</div>

				<div className="flex-grow bg-dark rounded-2xl">
					<AnimatePresence mode="wait">
						<Component {...pageProps} key={router.route} />
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

export default MyApp;
