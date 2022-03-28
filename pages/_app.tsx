import '../styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		document.body.classList.add('bg-darker');
		document.body.classList.add('text-white');
	});

	return (
		<div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32">
			<div className="col-span-12 text-center lg:col-span-3">
				<Sidebar />
			</div>
			<div className="col-span-12 lg:col-span-9 bg-dark rounded-2xl">
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;
