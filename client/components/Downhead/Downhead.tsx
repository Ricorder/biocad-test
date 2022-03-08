import styles from './Downhead.module.scss';
import React from 'react';

function Downhead(): JSX.Element {
	return (
		<div className={styles.downhead}>
			<div></div>
			<div>Наименование</div>
			<div>Механизм действия терапевтического агента</div>
			<div>Показание</div>
			<div>Разработка</div>
			<div>КИ Фаза I</div>
			<div>КИ Фаза II</div>
			<div>КИ Фаза III</div>
			<div>Регистрация</div>
		</div>
	);
}

export default Downhead;
