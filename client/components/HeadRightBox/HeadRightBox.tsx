import styles from './HeadRightBox.module.css';
import React from 'react';
import Line from './line.svg';
import { HeadRightBoxProps } from './HeadRightBox.props';

function HeadRightBox({ ...props }: HeadRightBoxProps): JSX.Element {
	return (
		<div className={styles.box} {...props}>
			<div className={styles.imagebox}></div>
			<div className={styles.textbox}>
				<Line className={styles.line} />
				<p className={styles.boldtext}>Обратите внимание:</p>
				<p className={styles.normaltext}>данные обновляются ежеквартально.</p>
			</div>
		</div>
	);
}

export default HeadRightBox;
