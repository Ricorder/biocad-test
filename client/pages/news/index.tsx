import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function News(): JSX.Element {
	return (
		<>
			<Head>
				<title>Новости - BIOCAD</title>
				<meta name="description" content='Все новости о компании BIOCAD' />
				<meta property="og:title" content='Новости - BIOCAD' />
				<meta property="og:description" content='Все новости о компании BIOCAD' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Новости</h1>
		</>
	);
}

export default withLayout(News);
