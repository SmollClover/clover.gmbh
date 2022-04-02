import Image from 'next/image';
import { FunctionComponent, useState } from 'react';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

import { Project } from '../interface/Project';

const ProjectCard: FunctionComponent<{
	project: Project;
}> = ({ project: { name, description, imagePath, deployUrl, githubUrl, categories, keys } }) => {
	const [showDetail, setShowDetail] = useState(false);

	return (
		<div className="rounded-2xl bg-darker-800">
			<Image
				src={imagePath}
				alt={name}
				className="cursor-pointer rounded-2xl"
				onClick={() => setShowDetail(true)}
				width={512}
				height={288}
				layout="responsive"
			/>
			<p className="my-2 text-center">{name}</p>

			{showDetail && (
				<div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 rounded-2xl md:grid-cols-2 gap-x-12 bg-darker-800">
					<div>
						<Image
							className="rounded-2xl"
							src={imagePath}
							alt={name}
							width={512}
							height={288}
							layout="responsive"
						/>
						<div className="flex justify-center my-4 space-x-3">
							<a
								href={githubUrl}
								className="flex items-center px-4 py-2 space-x-3 text-lg rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
							>
								<AiFillGithub />
								<span>Github</span>
							</a>
							{deployUrl && (
								<a
									href={deployUrl}
									className="flex items-center px-4 py-2 space-x-3 text-lg rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
								>
									<AiFillProject />
									<span>Project</span>
								</a>
							)}
						</div>
					</div>

					<div>
						<h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
						<h3 className="mb-3 font-medium ">{description}</h3>
						<div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
							{keys.map((key) => {
								return (
									<span className="px-2 py-1 my-1 rounded-sm bg-dark-600" key={key}>
										{key}
									</span>
								);
							})}
						</div>
					</div>

					<button
						onClick={() => setShowDetail(false)}
						className="absolute p-1 rounded-full top-3 right-3 focus:outline-none"
					>
						<MdClose size={30} />
					</button>
				</div>
			)}
		</div>
	);
};

export default ProjectCard;
