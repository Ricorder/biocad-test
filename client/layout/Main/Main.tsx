import styles from './Main.module.css';
import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';

function Main(): JSX.Element {
	return (
		<div className={styles.main}>
			<Header/>
			<Body />
		</div>
	);
}

export default Main;
