import { FunctionComponent } from 'react';

import { Language } from '../interface/Language';

const Bar: FunctionComponent<{
	data: Language;
}> = ({ data: { name, level, LIcon } }) => {
	return (
		<div className="my-2 rounded-full bg-darker-600">
			<div
				className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
				style={{ width: level }}
			>
				<LIcon className="mr-3" />
				{name}
			</div>
		</div>
	);
};

export default Bar;
