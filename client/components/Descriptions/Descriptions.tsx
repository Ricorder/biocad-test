import styles from './Descriptions.module.css';
import React from 'react';
import Description from '../Description/Description';

function Descriptions(): JSX.Element {
	return (
		<section className={styles.descriptions}>
			<Description>Орфанные заболевания</Description>
			<Description>Аутоиммунные заболевания</Description>
			<Description>Онкология</Description>
			<Description>Другое</Description>
		</section>
	);
}

export default Descriptions;
