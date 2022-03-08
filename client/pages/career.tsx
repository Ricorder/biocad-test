import Head from 'next/head';
import React from 'react';
import { withLayout } from '../layout/Layout';

function Career(): JSX.Element {
	return (
		<>
			<Head>
				<title>Карьера - BIOCAD</title>
				<meta name="description" content='Все о карьере в компании BIOCAD' />
				<meta property="og:title" content='Карьера - BIOCAD' />
				<meta property="og:description" content='Все о карьере в компании BIOCAD' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Карьера</h1>
		</>
	);
}

export default withLayout(Career);
