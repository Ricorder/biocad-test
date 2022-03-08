import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function Partnership(): JSX.Element {
	return (
		<>
			<Head>
				<title>Партнёры - BIOCAD</title>
				<meta name="description" content='Основные партнёры компании BIOCAD' />
				<meta property="og:title" content='Партнёры - BIOCAD' />
				<meta property="og:description" content='Основные партнёры компании BIOCAD' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Партнёры</h1>
		</>
	);
}

export default withLayout(Partnership);
