import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function Kurs(): JSX.Element {
	return (
		<>			
			<Head>
				<title>Программа поддержки пациентов - BIOCAD</title>
				<meta name="description" content='Информация о программе поддержки пациентов' />
				<meta property="og:title" content='Программа поддержки пациентов - BIOCAD' />
				<meta property="og:description" content='Информация о программе поддержки пациентов' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Программа поддержки пациентов</h1>
		</>
	);
}

export default withLayout(Kurs);
