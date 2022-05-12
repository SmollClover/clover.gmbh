import { motion, Variants } from 'framer-motion';
import { FunctionComponent } from 'react';

import { Language } from '../interface/Language';

const Bar: FunctionComponent<{
	data: Language;
}> = ({ data: { name, level, LIcon } }) => {
	const variants: Variants = {
		initial: {
			width: '100%',
		},
		animate: {
			width: level,
			transition: {
				duration: 0.5,
				type: 'spring',
				damping: 10,
				stiffness: 100,
			},
		},
	};

	return (
		<div className="my-2 rounded-full bg-darker-600">
			<motion.div
				className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
				style={{ width: level }}
				variants={variants}
				initial="initial"
				animate="animate"
			>
				<LIcon className="mr-3" />
				{name}
			</motion.div>
		</div>
	);
};

export default Bar;
