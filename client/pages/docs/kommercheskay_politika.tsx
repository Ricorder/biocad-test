import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function CommercialPolicy(): JSX.Element {
	return (
		<>
			<Head>
				<title>Коммерческая политика ЗАО «БИОКАД» - BIOCAD</title>
				<meta name="description" content='Информация о коммерческой политике ЗАО «БИОКАД»' />
				<meta property="og:title" content='Коммерческая политика ЗАО «БИОКАД» - BIOCAD' />
				<meta property="og:description" content='Информация о коммерческой политике ЗАО «БИОКАД»' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Коммерческая политика ЗАО «БИОКАД»</h1>
		</>
	);
}

export default withLayout(CommercialPolicy);
