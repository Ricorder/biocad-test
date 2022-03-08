import styles from './Product.module.scss';
import React from 'react';
import { ProductProps } from './Product.props';
import Bg from './bg.svg';
import Line from './line.svg';
import LineEnd from './line-end.svg';
import classNames from 'classnames';

function Product({ product, index, className }: ProductProps): JSX.Element {
	const stageArray: number[] = [1, 2, 3, 4, 5];

	return (
		<div
			className={classNames(styles.product, className, {
				[styles.gray]: (index + 1) % 2 !== 0,
			})}
		>
			<span>
				<Bg
					className={classNames(className, {
						[styles.blue]: product.typeOfDisease == 'Орфанные заболевания',
						[styles.cyan]: product.typeOfDisease == 'Аутоиммунные заболевания',
						[styles.red]: product.typeOfDisease == 'Онкология',
						[styles.violet]: product.typeOfDisease == 'Другое',
					})}
				/>
			</span>
			<span className={styles.text}>{product.name}</span>
			<span className={styles.text}>{product.mecanism}</span>
			<span className={styles.text}>{product.indication}</span>
			{stageArray.map((el: number) =>
				el < product.stage ? (
					<span key={el}>
						<Line />
					</span>
				) : el == product.stage ? (
					<div key={el} className={styles.stage}>
						<LineEnd />
					</div>
				) : (
					<div key={el} className={styles.stage}></div>
				),
			)}
		</div>
	);
}

export default Product;
