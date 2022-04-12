import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext,
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="ru">
					<Head>
						<meta property="og:type" content="website"/>
						<meta property="og:locale" content="ru_RU"/>
						<meta property="og:url" content="http://localhost:3000"/>
						<link rel="icon" href="/favicon.ico"></link>
						<link rel="preconnect" href="https://fonts.googleapis.com" />
						<link
							rel="preconnect"
							href="https://fonts.gstatic.com"
							crossOrigin="true"
						/>
						<link
							href="https://fonts.googleapis.com/css2?family=Rboto:wght@400;500;700&display=swap"
							rel="stylesheet"
						/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
