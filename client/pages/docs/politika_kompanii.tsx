import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function CompanyPolicy(): JSX.Element {
	return (
		<>
			<Head>
				<title>ПОЛИТИКА ЗАО БИОКАД в отношении обработки персональных данных - BIOCAD</title>
				<meta name="description" content='Информация о ПОЛИТИКЕ ЗАО БИОКАД в отношении обработки персональных данных' />
				<meta property="og:title" content='ПОЛИТИКА ЗАО БИОКАД в отношении обработки персональных данных - BIOCAD' />
				<meta property="og:description" content='Информация о ПОЛИТИКЕ ЗАО БИОКАД в отношении обработки персональных данных' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>ПОЛИТИКА ЗАО БИОКАД в отношении обработки персональных данных</h1>
		</>
	);
}

export default withLayout(CompanyPolicy);
