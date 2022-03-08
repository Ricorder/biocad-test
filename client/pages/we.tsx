import Head from 'next/head';
import React from 'react';
import { withLayout } from '../layout/Layout';

function We(): JSX.Element {
	return (
		<>
			<Head>
				<title>О компании - BIOCAD</title>
				<meta name="description" content='Информация о компании BIOCAD' />
				<meta property="og:title" content='О компании - BIOCAD' />
				<meta property="og:description" content='Информация о компании BIOCAD' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>О компании</h1>
		</>
	);
}

export default withLayout(We);
