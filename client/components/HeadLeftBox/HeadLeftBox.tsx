import styles from './HeadLeftBox.module.css';
import React from 'react';
import Shape from './shape.svg';
import Dots from './dots.svg';

function HeadLeftBox(): JSX.Element {
	return (
		<div className={styles.box}>
			<div className={styles.htag}>
				<h1 className={styles.h1}>
					Преппараты
					<br /> в разработке
				</h1>
				<Shape />
			</div>
			<Dots className={styles.dots} />
		</div>
	);
}

export default HeadLeftBox;
