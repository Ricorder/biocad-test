import Head from 'next/head';
import React from 'react';
import { GetStaticProps } from 'next';
import { withLayout } from '../layout/Layout';
import Main from '../layout/Main/Main';
import ProductModel from '../interfaces/product.interface';
import axios from 'axios';

function Home({ products }: HomeProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Преппараты в разработке - Biocad</title>
				<meta name="description" content='Перечень разрабатываемых преппаратов в компании Biocad'/>
				<meta property="og:title" content='Преппараты в разработке - Biocad' />
				<meta property="og:description" content='Перечень разрабатываемых преппаратов в компании Biocad' />
				<meta property="og:type" content="article" />
			</Head>
			<Main/>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const { data: products } = await axios.get<ProductModel[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/all`);
	return {
		props: {
			products
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	products: ProductModel[];
}
