import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function QualityPolicy(): JSX.Element {
	return (
		<>
			<Head>
				<title>Политика BIOCAD в области качества - BIOCAD</title>
				<meta name="description" content='Информация о политике BIOCAD в области качества' />
				<meta property="og:title" content='Политика BIOCAD в области качества - BIOCAD' />
				<meta property="og:description" content='Информация о политике BIOCAD в области качества' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Политика BIOCAD в области качества</h1>
		</>
	);
}

export default withLayout(QualityPolicy);
