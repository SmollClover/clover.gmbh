import Image from 'next/image';
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Sidebar = () => {
	return (
		<div>
			<div className="p-4 bg-dark rounded-2xl">
				<div>
					<Image
						src="/image/Clover.png"
						alt="Clover Profile Picture"
						height="1028"
						width="1028"
						className="w-32 h-32 mx-auto rounded-full"
					/>
					<h3 className="my-4 text-3xl font-medium tracking-wider" style={{ fontFamily: 'Prompt-Light, sans-serif' }}>
						Lars Belitz
					</h3>
					<p className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-darker-600">
						Typescript Developer
					</p>

					<div className="flex justify-around w-9/12 mx-auto my-5 text-white md:w-full">
						<a href="https://github.com/SmollClover" target="_blank" rel="noreferrer">
							<FaGithubAlt className="w-8 h-8 cursor-pointer" />
						</a>
						<a href="https://www.linkedin.com/in/lars-belitz-5814b6224/" target="_blank" rel="noreferrer">
							<FaLinkedin className="w-8 h-8 cursor-pointer" />
						</a>
					</div>
				</div>
			</div>

			<div className="py-4 bg-darker" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
				<div className="flex items-center justify-center">
					<MdLocationOn className="w-6 h-6" />
					<span>Essen, Germany</span>
				</div>
				<p className="my-2">clover@duck.com</p>
			</div>

			<div className="p-4 bg-dark rounded-2xl">
				<button
					className="w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 focus:outline-none"
					onClick={() => window.open('mailto:clover@duck.com')}
				>
					Email me
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
