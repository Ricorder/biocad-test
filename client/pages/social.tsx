import Head from 'next/head';
import React from 'react';
import { withLayout } from '../layout/Layout';

function Social(): JSX.Element {
	return (
		<>
			<Head>
				<title>Устойчивое развитие - BIOCAD</title>
				<meta name="description" content='Устойчивое развитие - основной принцып в компании BIOCAD' />
				<meta property="og:title" content='Устойчивое развитие - BIOCAD' />
				<meta property="og:description" content='Устойчивое развитие - основной принцып в компании BIOCAD' />
				<meta property="og:type" content="article" />
			</Head>
			<h1>Устойчивое развитие</h1>
		</>
	);
}

export default withLayout(Social);
