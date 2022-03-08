import styles from './Body.module.css';
import React from 'react';
import Downhead from '../../components/Downhead/Downhead';
import Product from '../../components/Product/Product';
import ProductModel from '../../interfaces/product.interface';
import { BodyProps } from './Body.props';
import { useAppContext } from '../../context/app.context';

function Body({ ...props }: BodyProps): JSX.Element {
	const { products } = useAppContext();

	return (
		<main {...props}  className={styles.body}>
			<section className={styles.border}>
				<div className={styles.tophead}>
					<div className={styles.firstsquare}>Информация о продукте</div>
					<div className={styles.secondsquare}>Этапы разработки</div>
				</div>
				<Downhead />
				{products &&
					products.map((product: ProductModel, i: number) => (
						<Product key={i} index={i} product={product} />
					))}
			</section>
		</main>
	);
}

export default Body;
