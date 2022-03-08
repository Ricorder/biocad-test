import Head from 'next/head';
import React from 'react';
import { withLayout } from '../../layout/Layout';

function UserAgreement(): JSX.Element {
	return (
		<>
			<Head>
				<title>Пользовательское соглашение - BIOCAD</title>
				<meta name="description" content='Информация о пользовательском соглашении' />
				<meta property="og:title" content='Пользовательское соглашение - BIOCAD' />
				<meta property="og:description" content='Информация о пользовательском соглашении' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Пользовательское соглашение</h1>
		</>
	);
}

export default withLayout(UserAgreement);
