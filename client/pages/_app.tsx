import '../styles/globals.scss';
import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
