import styles from './Select.module.css';
import React from 'react';
import Arrow from './arrow-down-small.svg';
import Line from './line.svg';
import { SelectProps } from './Select.props';

function Select({ children }: SelectProps): JSX.Element {
	return (
		<div className={styles.select}>
			<p className={styles.text}>{children}</p>
			<Arrow className={styles.arrow} />
			<Line className={styles.line} />
		</div>
	);
}

export default Select;
