import Head from 'next/head';
import React from 'react';
import { withLayout } from '../layout/Layout';

function Contacts(): JSX.Element {
	return (
		<>
			<Head>
				<title>Контакты - BIOCAD</title>
				<meta name="description" content='Контактная информация BIOCAD' />
				<meta property="og:title" content='Контакты - BIOCAD' />
				<meta property="og:description" content='Контактная информация BIOCAD' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Контакты</h1>
		</>
	);
}

export default withLayout(Contacts);
