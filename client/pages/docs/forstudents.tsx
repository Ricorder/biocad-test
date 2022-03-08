import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function Forstudents(): JSX.Element {
	return (
		<>
			<Head>
				<title>Для студентов - BIOCAD</title>
				<meta name="description" content='Информация для студентов' />
				<meta property="og:title" content='Для студентов - BIOCAD' />
				<meta property="og:description" content='Информация для студентов' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Для студентов</h1>
		</>
	);
}

export default withLayout(Forstudents);
