import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function DrugSafety(): JSX.Element {
	return (
		<>
			<Head>
				<title>Мониторинг безопасности препаратов BIOCAD - BIOCAD</title>
				<meta name="description" content='Информация о Мониторинг безопасности препаратов BIOCAD' />
				<meta property="og:title" content='Мониторинг безопасности препаратов BIOCAD - BIOCAD' />
				<meta property="og:description" content='Информация о Мониторинг безопасности препаратов BIOCAD' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Мониторинг безопасности препаратов BIOCAD</h1>
		</>
	);
}

export default withLayout(DrugSafety);
