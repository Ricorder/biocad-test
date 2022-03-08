import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function Science(): JSX.Element {
	return (
		<>
			<Head>
				<title>Научная деятельность - BIOCAD</title>
				<meta name="description" content='Описание научной деятельности в компании BIOCAD' />
				<meta property="og:title" content='Научная деятельность - BIOCAD' />
				<meta property="og:description" content='Описание научной деятельности в компании BIOCAD' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Научная деятельность</h1>
		</>
	);
}

export default withLayout(Science);
