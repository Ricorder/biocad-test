import Head from 'next/head';
import React from 'react';
import { withLayout } from '../layout/Layout';

function Production(): JSX.Element {
	return (
		<>
			<Head>
				<title>Производство - BIOCAD</title>
				<meta name="description" content='Все стадии производства в компании BIOCAD' />
				<meta property="og:title" content='Производство - BIOCAD' />
				<meta property="og:description" content='Все стадии производства в компании BIOCAD' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Производство</h1>
		</>
	);
}

export default withLayout(Production);
