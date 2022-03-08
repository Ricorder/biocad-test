import styles from './Description.module.css';
import React from 'react';
import { DescriptionProps } from './Description.props';
import Circle from './circle.svg';
import CircleArrow from './arrow-circle.svg';
import classNames from 'classnames';
import { useAppContext } from '../../context/app.context';

function Description({ children, className }: DescriptionProps): JSX.Element {
	const { filter } = useAppContext();

	const sortHandler = (el): void=> {
		filter && filter(el);
	};

	return (
		<div	onClick={() => sortHandler(children)} className={styles.description}>
			<Circle
				className={classNames(styles.description, className, {
					[styles.blue]: children == 'Орфанные заболевания',
					[styles.cyan]: children == 'Аутоиммунные заболевания',
					[styles.red]: children == 'Онкология',
					[styles.violet]: children == 'Другое',
				})}
			/>
			<p className={styles.text}>{children}</p>
			<CircleArrow
				className={classNames(styles.description, className, {
					[styles.blue]: children == 'Орфанные заболевания',
					[styles.cyan]: children == 'Аутоиммунные заболевания',
					[styles.red]: children == 'Онкология',
					[styles.white]: children == 'Другое',
				})}
			/>
		</div>
	);
}

export default Description;
