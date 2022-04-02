import { FunctionComponent } from 'react';

import { Category } from '../interface/Project';

export const NavItem: FunctionComponent<{
	value: Category | 'all';
	handlerFilterCategory: Function;
	active: string;
}> = ({ value, handlerFilterCategory, active }) => {
	let className = 'px-5 capitalize rounded-full cursor-pointer bg-darker-600 from-pink-400 to-purple-400';

	if (active === value) className += ' bg-gradient-to-r';

	return (
		<li onClick={() => handlerFilterCategory(value)} className={className}>
			{value}
		</li>
	);
};

const ProjectNavbar: FunctionComponent<{
	handlerFilterCategory: Function;
	active: string;
}> = (props) => {
	return (
		<div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
			<NavItem value="all" {...props} />
			<NavItem value="discord bot" {...props} />
			<NavItem value="website" {...props} />
			<NavItem value="application" {...props} />
			<NavItem value="tool" {...props} />
			<NavItem value="fun" {...props} />
			<NavItem value="other" {...props} />
		</div>
	);
};

export default ProjectNavbar;
