import styles from './Groupselect.module.css';
import React from 'react';
import Select from '../Select/Select';

function Groupselect(): JSX.Element {
	return (
		<section className={styles.groupselect}>
			<Select>Тип продукта</Select>
			<Select>Тип молекулы</Select>
			<Select>Платформа</Select>
			<Select>Терапевтическая область</Select>
		</section>
	);
}

export default Groupselect;
