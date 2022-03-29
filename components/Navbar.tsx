import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';

const NavItem: FunctionComponent<{
	activeItem: string;
	setActiveItem: Function;
	name: string;
	route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
	return activeItem !== name ? (
		<div className="px-5 rounded-full bg-gradient-to-r from-pink-400 to-purple-400">
			<Link href={route}>
				<a>
					<span onClick={() => setActiveItem(name)}>{name}</span>
				</a>
			</Link>
		</div>
	) : null;
};

const Navbar = () => {
	const [activeItem, setActiveItem] = useState('');

	const { pathname } = useRouter();

	useEffect(() => {
		if (pathname === '/') setActiveItem('About');
		if (pathname === '/projects') setActiveItem('Projects');
		if (pathname === '/resume') setActiveItem('Resume');
	}, [pathname]);

	return (
		<div className="flex justify-between px-5 py-3 my-3">
			<span className="px-5 text-xl font-semibold rounded-full bg-darker-600 focus:outline-none md:text-2xl">
				{activeItem}
			</span>
			<div className="flex space-x-3 text-lg">
				<NavItem name="About" route="/" activeItem={activeItem} setActiveItem={setActiveItem} />
				<NavItem name="Projects" route="/projects" activeItem={activeItem} setActiveItem={setActiveItem} />
				<NavItem name="Resume" route="/resume" activeItem={activeItem} setActiveItem={setActiveItem} />
			</div>
		</div>
	);
};

export default Navbar;
