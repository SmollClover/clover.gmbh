import { NextStrictCSP } from 'next-strict-csp';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const HeadCSP = process.env.PROD ? NextStrictCSP : Head;

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<HeadCSP>
					{process.env.PROD && <meta httpEquiv="Content-Security-Policy" />}
					<meta
						name="description"
						content="TypeScript Developer who started out with programming Discord Bots and now has over 4 years of experience with JavaScript."
					/>
					<meta name="keywords" content="Developer, Typescript, Lars Belitz, Discord Bot" />

					<meta property="og:site_name" content="Lars Belitz" key="site_name" />
					<meta
						property="og:description"
						content="TypeScript Developer who started out with programming Discord Bots and now has over 4 years of experience with JavaScript."
						key="description"
					/>
					<meta name="theme-color" content="#ff79c6" key="theme-color" />
				</HeadCSP>
				<body className="text-white bg-fixed bg-darker">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
