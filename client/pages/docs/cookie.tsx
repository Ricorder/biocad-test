import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function Cookie(): JSX.Element {
	return (
		<>
			<Head>
				<title>Использование файлов Cookie - BIOCAD</title>
				<meta name="description" content='Положение об использовании файлов Cookie' />
				<meta property="og:title" content='Использование файлов Cookie - BIOCAD' />
				<meta property="og:description" content='Положение об использовании файлов Cookie' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Использование файлов Cookie</h1>
		</>
	);
}

export default withLayout(Cookie);
