import '../styles/globals.scss';
import React from 'react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />				
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
