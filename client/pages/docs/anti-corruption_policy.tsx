import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function AntiCorruptionPolicy(): JSX.Element {
	return (
		<>
			<Head>
				<title>Антикоррупционная Политика ЗАО «БИОКАД» - BIOCAD</title>
				<meta name="description" content='Положение об Антикоррупционной Политики ЗАО «БИОКАД»' />
				<meta property="og:title" content='Антикоррупционная Политика ЗАО «БИОКАД» - BIOCAD' />
				<meta property="og:description" content='Положение об Антикоррупционной Политики ЗАО «БИОКАД»' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Антикоррупционная Политика ЗАО «БИОКАД»</h1>
		</>
	);
}

export default withLayout(AntiCorruptionPolicy);
