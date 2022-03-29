import { FunctionComponent } from 'react';

import { Service } from '../interface/Service';

const ServiceCard: FunctionComponent<{ service: Service }> = ({ service: { title, description, SIcon } }) => {
	const createMarkup = () => {
		return {
			__html: description,
		};
	};

	return (
		<div className="flex items-center p-2 space-x-4">
			<SIcon className="w-12 h-12 text-pink" />
			<div>
				<h4 className="font-bold">{title}</h4>
				<p dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</div>
	);
};

export default ServiceCard;
