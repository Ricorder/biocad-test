import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function Products(): JSX.Element {
	return (
		<>
			<Head>
				<title>60 продуктов в портфолио - BIOCAD</title>
				<meta name="description" content='60 основных продуктов компании BIOCAD' />
				<meta property="og:title" content='60 продуктов в портфолио - BIOCAD' />
				<meta property="og:description" content='60 основных продуктов компании BIOCAD' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>60 продуктов в портфолио</h1>
		</>
	);
}

export default withLayout(Products);
